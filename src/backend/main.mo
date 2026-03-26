import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Nat32 "mo:core/Nat32";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Timer "mo:core/Timer";
import Text "mo:core/Text";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type UserProfileView = UserProfile;
  public type UserStatsView = {
    user : Principal;
    subjectPerformance : [(Subject, { attempted : Nat32; correct : Nat32 })];
    topicCompletion : [(Text, Bool)];
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfileView {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };

    switch (userProfiles.get(caller)) {
      case (null) { null };
      case (?profile) { ?toUserProfileView(profile) };
    };
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfileView {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };

    switch (userProfiles.get(user)) {
      case (null) { null };
      case (?profile) { ?toUserProfileView(profile) };
    };
  };

  public query ({ caller }) func getAllUserProfiles() : async [UserProfileView] {
    userProfiles.values().toArray().map(toUserProfileView);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type Subject = {
    #math;
    #logicalReasoning;
    #english;
    #computerConcepts;
  };

  type Difficulty = {
    #easy;
    #medium;
    #hard;
  };

  type Question = {
    id : Nat32;
    subject : Subject;
    topic : Text;
    difficulty : Difficulty;
    text : Text;
    options : [Text];
    correctAnswerIndex : Nat32;
    explanation : Text;
  };

  type ExamSession = {
    id : Nat32;
    user : Principal;
    questions : List.List<Nat32>;
    userAnswers : List.List<{ questionId : Nat32; answerIndex : Nat32 }>;
    score : Nat32;
    timeSpent : Nat32;
  };

  type UserStats = {
    user : Principal;
    subjectPerformance : Map.Map<Subject, { attempted : Nat32; correct : Nat32 }>;
    topicCompletion : Map.Map<Text, Bool>;
  };

  type StudyResource = {
    id : Nat32;
    subject : Subject;
    title : Text;
    url : Text;
    description : Text;
  };

  // Comparison modules
  module Question {
    public func compareBySubject(q1 : Question, q2 : Question) : Order.Order {
      switch (Text.compare(q1.topic, q2.topic)) {
        case (#equal) { Nat32.compare(q1.id, q2.id) };
        case (order) { order };
      };
    };
  };

  module StudyResource {
    public func compareBySubject(r1 : StudyResource, r2 : StudyResource) : Order.Order {
      switch (Text.compare(r1.title, r2.title)) {
        case (#equal) { Nat32.compare(r1.id, r2.id) };
        case (order) { order };
      };
    };
  };

  // Persistent state
  let questions = Map.empty<Nat32, Question>();
  var nextQuestionId : Nat32 = 0;
  let examSessions = Map.empty<Nat32, ExamSession>();
  var nextSessionId : Nat32 = 0;
  let userStats = Map.empty<Principal, UserStats>();
  let studyResources = Map.empty<Nat32, StudyResource>();
  var nextResourceId : Nat32 = 0;
  let timerEntries = Map.empty<Nat32, Timer.TimerId>();

  // Question management
  public shared ({ caller }) func addQuestion(question : Question) : async Nat32 {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can add questions");
    };
    let id = nextQuestionId;
    nextQuestionId += 1;
    let newQuestion : Question = {
      question with
      id;
    };
    questions.add(id, newQuestion);
    id;
  };

  public query ({ caller }) func getQuestionsBySubject(subject : Subject) : async [Question] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access questions");
    };
    questions.values().toArray().sort(Question.compareBySubject).filter(
      func(q) { q.subject == subject }
    );
  };

  public query ({ caller }) func getRandomQuestions(count : Nat32) : async [Question] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access questions");
    };

    questions.values().toArray().sort(Question.compareBySubject).sliceToArray(0, count.toNat());
  };

  // Exam session management
  public shared ({ caller }) func startExamSession(questionIds : [Nat32]) : async Nat32 {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can start exam sessions");
    };
    let id = nextSessionId;
    nextSessionId += 1;
    let questionsList = List.fromArray(questionIds);
    let newSession : ExamSession = {
      id;
      user = caller;
      questions = questionsList;
      userAnswers = List.empty<{ questionId : Nat32; answerIndex : Nat32 }>();
      score = 0;
      timeSpent = 0;
    };
    examSessions.add(id, newSession);
    id;
  };

  public shared ({ caller }) func submitExamSession(sessionId : Nat32, answers : [{ questionId : Nat32; answerIndex : Nat32 }], timeSpent : Nat32) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit exam sessions");
    };
    if (not examSessions.containsKey(sessionId)) {
      Runtime.trap("Exam session not found");
    };
    let session = switch (examSessions.get(sessionId)) {
      case (?session) { session };
      case (null) { Runtime.trap("Exam session not found") };
    };
    if (session.user != caller) {
      Runtime.trap("Unauthorized: Can only submit your own session");
    };
    let score = answers.filter(func(ans) { switch (questions.get(ans.questionId)) {
      case (?q) { q.correctAnswerIndex == ans.answerIndex };
      case (null) { false };
    } }).size();
    let updatedSession : ExamSession = {
      session with
      userAnswers = List.fromArray(answers);
      score = Nat32.fromNat(score);
      timeSpent;
    };
    examSessions.add(sessionId, updatedSession);
  };

  public query ({ caller }) func getUserStats() : async ?UserStatsView {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view stats");
    };
    userStats.get(caller).map(toUserStatsView);
  };

  public shared ({ caller }) func markTopicComplete(topic : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can mark topics complete");
    };
    let stats = switch (userStats.get(caller)) {
      case (?stats) { stats };
      case (null) {
        {
          user = caller;
          subjectPerformance = Map.empty<Subject, { attempted : Nat32; correct : Nat32 }>();
          topicCompletion = Map.empty<Text, Bool>();
        };
      };
    };
    stats.topicCompletion.add(topic, true);
    userStats.add(caller, stats);
  };

  // Study resources
  public shared ({ caller }) func addStudyResource(resource : StudyResource) : async Nat32 {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can add study resources");
    };
    let id = nextResourceId;
    nextResourceId += 1;
    let newResource : StudyResource = {
      resource with
      id;
    };
    studyResources.add(id, newResource);
    id;
  };

  public query ({ caller }) func getResourcesBySubject(subject : Subject) : async [StudyResource] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access study resources");
    };
    studyResources.values().toArray().sort(StudyResource.compareBySubject).filter(
      func(r) { r.subject == subject }
    );
  };

  func toUserProfileView(profile : UserProfile) : UserProfileView {
    profile;
  };

  func toUserStatsView(stats : UserStats) : UserStatsView {
    {
      stats with
      subjectPerformance = stats.subjectPerformance.entries().toArray();
      topicCompletion = stats.topicCompletion.entries().toArray();
    };
  };
};
