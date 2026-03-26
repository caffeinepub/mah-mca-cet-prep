import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StudyResource {
    id: number;
    url: string;
    title: string;
    subject: Subject;
    description: string;
}
export interface UserProfileView {
    name: string;
}
export interface UserStatsView {
    subjectPerformance: Array<[Subject, {
            attempted: number;
            correct: number;
        }]>;
    topicCompletion: Array<[string, boolean]>;
    user: Principal;
}
export interface Question {
    id: number;
    topic: string;
    subject: Subject;
    difficulty: Difficulty;
    explanation: string;
    text: string;
    correctAnswerIndex: number;
    options: Array<string>;
}
export interface UserProfile {
    name: string;
}
export enum Difficulty {
    easy = "easy",
    hard = "hard",
    medium = "medium"
}
export enum Subject {
    logicalReasoning = "logicalReasoning",
    math = "math",
    computerConcepts = "computerConcepts",
    english = "english"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addQuestion(question: Question): Promise<number>;
    addStudyResource(resource: StudyResource): Promise<number>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllUserProfiles(): Promise<Array<UserProfileView>>;
    getCallerUserProfile(): Promise<UserProfileView | null>;
    getCallerUserRole(): Promise<UserRole>;
    getQuestionsBySubject(subject: Subject): Promise<Array<Question>>;
    getRandomQuestions(count: number): Promise<Array<Question>>;
    getResourcesBySubject(subject: Subject): Promise<Array<StudyResource>>;
    getUserProfile(user: Principal): Promise<UserProfileView | null>;
    getUserStats(): Promise<UserStatsView | null>;
    isCallerAdmin(): Promise<boolean>;
    markTopicComplete(topic: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    startExamSession(questionIds: Uint32Array): Promise<number>;
    submitExamSession(sessionId: number, answers: Array<{
        answerIndex: number;
        questionId: number;
    }>, timeSpent: number): Promise<void>;
}
