import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Trophy,
  XCircle,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Subject } from "../backend.d";
import { type LocalQuestion, getMixedQuestions } from "../data/questions";
import type { ExamSession, UserAnswer } from "../types/exam";

const MOCK_DURATION = 90 * 60; // 90 minutes in seconds
const SUBJECT_LABELS: Record<string, string> = {
  [Subject.math]: "Mathematics",
  [Subject.computerConcepts]: "Computer Concepts",
  [Subject.logicalReasoning]: "Logical Reasoning",
  [Subject.english]: "English",
};
const SUBJECT_COLORS: Record<string, string> = {
  [Subject.math]: "#1E63D6",
  [Subject.computerConcepts]: "#0891B2",
  [Subject.logicalReasoning]: "#7C3AED",
  [Subject.english]: "#D97706",
};

function saveSession(session: ExamSession) {
  try {
    const existing = JSON.parse(
      localStorage.getItem("cetprep_sessions") || "[]",
    ) as ExamSession[];
    existing.push(session);
    localStorage.setItem("cetprep_sessions", JSON.stringify(existing));
  } catch {
    // ignore
  }
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function MockExam() {
  const [examStarted, setExamStarted] = useState(false);
  const [questions, setQuestions] = useState<LocalQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MOCK_DURATION);
  const [activeSubjectTab, setActiveSubjectTab] = useState(Subject.math);

  useEffect(() => {
    if (!examStarted || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, isSubmitted]);

  const handleAutoSubmit = useCallback(() => {
    setIsSubmitted(true);
    toast.warning("Time's up! Exam auto-submitted.");
  }, []);

  const startExam = () => {
    const qs = getMixedQuestions(Math.ceil(150 / 4)); // ~37-38 per subject = 150
    setQuestions(qs.slice(0, 150));
    setAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setTimeLeft(MOCK_DURATION);
    setExamStarted(true);
  };

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true);
    const correct = questions.filter(
      (q) => answers[q.id]?.answerIndex === q.correctAnswerIndex,
    ).length;
    const breakdown: Record<string, { total: number; correct: number }> = {};
    const subjects = [
      Subject.math,
      Subject.computerConcepts,
      Subject.logicalReasoning,
      Subject.english,
    ];
    for (const s of subjects) {
      const subQ = questions.filter((q) => q.subject === s);
      const subC = subQ.filter(
        (q) => answers[q.id]?.answerIndex === q.correctAnswerIndex,
      ).length;
      breakdown[s] = { total: subQ.length, correct: subC };
    }
    const session: ExamSession = {
      id: Date.now().toString(),
      type: "mock",
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: correct,
      timeSpent: MOCK_DURATION - timeLeft,
      score: Math.round((correct / questions.length) * 100),
      subjectBreakdown: breakdown,
    };
    saveSession(session);
    toast.success(`Mock exam submitted! Score: ${session.score}%`);
  }, [questions, answers, timeLeft]);

  const currentQ = questions[currentIndex];
  const answeredCount = Object.values(answers).filter(
    (a) => a.answerIndex !== -1,
  ).length;
  const flaggedCount = Object.values(answers).filter((a) => a.flagged).length;

  const results = useMemo(() => {
    if (!isSubmitted || questions.length === 0) return null;
    const correct = questions.filter(
      (q) => answers[q.id]?.answerIndex === q.correctAnswerIndex,
    ).length;
    const wrong = questions.filter(
      (q) =>
        answers[q.id] &&
        answers[q.id].answerIndex !== -1 &&
        answers[q.id].answerIndex !== q.correctAnswerIndex,
    ).length;
    const skipped = questions.filter(
      (q) => !answers[q.id] || answers[q.id].answerIndex === -1,
    ).length;
    const subjects = [
      Subject.math,
      Subject.computerConcepts,
      Subject.logicalReasoning,
      Subject.english,
    ];
    const breakdown = subjects.map((s) => {
      const subQ = questions.filter((q) => q.subject === s);
      const subC = subQ.filter(
        (q) => answers[q.id]?.answerIndex === q.correctAnswerIndex,
      ).length;
      return {
        subject: s,
        total: subQ.length,
        correct: subC,
        score: subQ.length > 0 ? Math.round((subC / subQ.length) * 100) : 0,
      };
    });
    return {
      correct,
      wrong,
      skipped,
      score: Math.round((correct / questions.length) * 100),
      breakdown,
    };
  }, [isSubmitted, questions, answers]);

  // Landing page
  if (!examStarted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">
          MAH-MCA-CET Mock Exam
        </h1>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Full-length 150-question exam simulating the actual MAH-MCA-CET.
          Covers all 4 subjects with 90-minute timer.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Questions", value: "150" },
            { label: "Duration", value: "90 min" },
            { label: "Subjects", value: "4" },
            { label: "Marks", value: "150" },
          ].map((stat) => (
            <Card key={stat.label} className="border border-border">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left text-sm text-amber-800">
          <strong>Instructions:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>All questions carry equal marks (1 mark each)</li>
            <li>No negative marking</li>
            <li>Timer starts immediately when you click Start</li>
            <li>Answers are auto-saved as you select</li>
            <li>You can review and change answers before submitting</li>
          </ul>
        </div>
        <Button
          size="lg"
          onClick={startExam}
          className="px-12"
          data-ocid="mock.start.primary_button"
        >
          Start Mock Exam
        </Button>
      </div>
    );
  }

  // Results screen
  if (isSubmitted && results) {
    return (
      <div
        className="max-w-5xl mx-auto px-4 py-10"
        data-ocid="mock.results.section"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 border-4 border-primary mb-4">
            <span className="text-3xl font-bold text-primary">
              {results.score}%
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Exam Results</h2>
          <p className="text-muted-foreground mt-1">
            Time taken: {formatTime(MOCK_DURATION - timeLeft)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-green-700">
                {results.correct}
              </div>
              <div className="text-sm text-green-600">Correct</div>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-red-700">
                {results.wrong}
              </div>
              <div className="text-sm text-red-600">Wrong</div>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4 text-center">
              <Flag className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-yellow-700">
                {results.skipped}
              </div>
              <div className="text-sm text-yellow-600">Skipped</div>
            </CardContent>
          </Card>
        </div>

        {/* Subject-wise breakdown */}
        <h3 className="text-lg font-bold text-foreground mb-4">
          Subject-wise Performance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {results.breakdown.map((b) => (
            <Card
              key={b.subject}
              className="border border-border"
              data-ocid="results.subject.card"
            >
              <CardContent className="p-4">
                <div
                  className="w-3 h-3 rounded-full mb-2"
                  style={{ backgroundColor: SUBJECT_COLORS[b.subject] }}
                />
                <p className="font-medium text-sm text-foreground mb-1">
                  {SUBJECT_LABELS[b.subject]}
                </p>
                <div
                  className="text-2xl font-bold"
                  style={{ color: SUBJECT_COLORS[b.subject] }}
                >
                  {b.score}%
                </div>
                <p className="text-xs text-muted-foreground">
                  {b.correct}/{b.total} correct
                </p>
                <Progress value={b.score} className="mt-2 h-1.5" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Answer Review */}
        <h3 className="text-lg font-bold text-foreground mb-4">
          Answer Review
        </h3>
        <Tabs defaultValue={Subject.math}>
          <TabsList className="mb-4">
            {Object.entries(SUBJECT_LABELS).map(([s, label]) => (
              <TabsTrigger key={s} value={s} data-ocid="review.tab">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(SUBJECT_LABELS).map((s) => (
            <TabsContent key={s} value={s}>
              <div className="space-y-4">
                {questions
                  .filter((q) => q.subject === s)
                  .map((q, idx) => {
                    const userAnswer = answers[q.id];
                    const isCorrect =
                      userAnswer?.answerIndex === q.correctAnswerIndex;
                    const isWrong =
                      userAnswer && userAnswer.answerIndex !== -1 && !isCorrect;
                    return (
                      <Card
                        key={q.id}
                        className={`border ${isCorrect ? "border-green-200 bg-green-50" : isWrong ? "border-red-200 bg-red-50" : "border-yellow-200 bg-yellow-50"}`}
                        data-ocid={`review.item.${idx + 1}`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <span
                              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                              style={{
                                backgroundColor: isCorrect
                                  ? "#16a34a"
                                  : isWrong
                                    ? "#dc2626"
                                    : "#d97706",
                              }}
                            >
                              {idx + 1}
                            </span>
                            <p className="font-medium text-foreground text-sm">
                              {q.text}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {q.options.map((opt, oidx) => (
                              <div
                                key={opt}
                                className={`text-sm px-3 py-2 rounded-lg border ${oidx === q.correctAnswerIndex ? "border-green-400 bg-green-100 text-green-800 font-medium" : oidx === userAnswer?.answerIndex && !isCorrect ? "border-red-400 bg-red-100 text-red-800" : "border-border bg-white/50"}`}
                              >
                                {String.fromCharCode(65 + oidx)}. {opt}
                              </div>
                            ))}
                          </div>
                          <div className="bg-white/70 border border-border rounded-lg p-3 text-sm">
                            <span className="font-semibold text-primary">
                              Explanation:{" "}
                            </span>
                            {q.explanation}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 flex gap-3 justify-center">
          <Button
            variant="outline"
            onClick={() => {
              setExamStarted(false);
              setIsSubmitted(false);
            }}
            data-ocid="results.back.button"
          >
            Back to Mock Exams
          </Button>
          <Button onClick={startExam} data-ocid="results.retry.button">
            Retake Exam
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  const timerWarning = timeLeft < 600;
  const subjectQuestions = questions.filter(
    (q) => q.subject === activeSubjectTab,
  );
  const subjectStartIndex = questions.findIndex(
    (q) => q.subject === activeSubjectTab,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      {/* Timer bar */}
      <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-border p-4">
        <div>
          <p className="text-sm text-muted-foreground">MAH-MCA-CET Mock Exam</p>
          <p className="text-xs text-muted-foreground">
            {answeredCount}/{questions.length} answered · {flaggedCount} flagged
          </p>
        </div>
        <div
          className={`flex items-center gap-2 text-xl font-mono font-bold ${timerWarning ? "text-red-600 animate-pulse" : "text-primary"}`}
          data-ocid="exam.timer"
        >
          <Clock className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              data-ocid="exam.submit.open_modal_button"
            >
              Submit Exam
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent data-ocid="exam.submit.dialog">
            <AlertDialogHeader>
              <AlertDialogTitle>Submit Mock Exam?</AlertDialogTitle>
              <AlertDialogDescription>
                You have answered {answeredCount} of {questions.length}{" "}
                questions. {questions.length - answeredCount} questions are
                unanswered. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel data-ocid="exam.submit.cancel_button">
                Continue Exam
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleSubmit}
                data-ocid="exam.submit.confirm_button"
              >
                Submit
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Subject tabs */}
      <Tabs
        value={activeSubjectTab}
        onValueChange={(v) => {
          setActiveSubjectTab(v as Subject);
          const firstQ = questions.findIndex((q) => q.subject === v);
          if (firstQ !== -1) setCurrentIndex(firstQ);
        }}
      >
        <TabsList className="mb-4 w-full">
          {Object.entries(SUBJECT_LABELS).map(([s, label]) => {
            const subQs = questions.filter((q) => q.subject === s);
            const subAns = subQs.filter(
              (q) =>
                answers[q.id]?.answerIndex !== undefined &&
                answers[q.id].answerIndex !== -1,
            ).length;
            return (
              <TabsTrigger
                key={s}
                value={s}
                className="flex-1"
                data-ocid="mock.subject.tab"
              >
                {label}{" "}
                <span className="ml-1 text-xs opacity-70">
                  ({subAns}/{subQs.length})
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.keys(SUBJECT_LABELS).map((s) => (
          <TabsContent key={s} value={s}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Question */}
              <div className="lg:col-span-3">
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">
                        Q {currentIndex + 1} of {questions.length}
                      </Badge>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{currentQ.topic}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            if (!currentQ) return;
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQ.id]: {
                                questionId: currentQ.id,
                                answerIndex:
                                  prev[currentQ.id]?.answerIndex ?? -1,
                                flagged: !prev[currentQ.id]?.flagged,
                              },
                            }));
                          }}
                          className={
                            answers[currentQ.id]?.flagged
                              ? "text-yellow-600"
                              : "text-muted-foreground"
                          }
                          data-ocid="exam.flag.toggle"
                        >
                          <Flag className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-base font-medium text-foreground mb-6 leading-relaxed">
                      {currentQ.text}
                    </p>
                    <div className="space-y-3">
                      {currentQ.options.map((opt, idx) => {
                        const selected =
                          answers[currentQ.id]?.answerIndex === idx;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [currentQ.id]: {
                                  questionId: currentQ.id,
                                  answerIndex: idx,
                                  flagged: prev[currentQ.id]?.flagged || false,
                                },
                              }))
                            }
                            data-ocid={`exam.option.${idx + 1}`}
                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${selected ? "border-primary bg-primary/10 text-primary font-medium" : "border-border bg-white hover:border-primary/50 hover:bg-blue-50/50"}`}
                          >
                            <span className="font-medium mr-2">
                              {String.fromCharCode(65 + idx)}.
                            </span>{" "}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setCurrentIndex((i) => Math.max(0, i - 1))
                        }
                        disabled={currentIndex === 0}
                        data-ocid="exam.prev.button"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                      </Button>
                      <Progress
                        value={(answeredCount / questions.length) * 100}
                        className="w-32 h-2"
                      />
                      <Button
                        variant="outline"
                        onClick={() =>
                          setCurrentIndex((i) =>
                            Math.min(questions.length - 1, i + 1),
                          )
                        }
                        disabled={currentIndex === questions.length - 1}
                        data-ocid="exam.next.button"
                      >
                        Next <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigator */}
              <div>
                <Card className="border border-border sticky top-20">
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-xs text-foreground mb-2">
                      Navigator
                    </h4>
                    <div className="grid grid-cols-5 gap-1">
                      {subjectQuestions.map((q, idx) => {
                        const globalIdx = subjectStartIndex + idx;
                        const ans = answers[q.id];
                        const isAnswered = ans && ans.answerIndex !== -1;
                        const isFlagged = ans?.flagged;
                        return (
                          <button
                            type="button"
                            key={q.id}
                            onClick={() => setCurrentIndex(globalIdx)}
                            data-ocid={`navigator.item.${idx + 1}`}
                            className={`w-7 h-7 rounded text-xs font-medium transition-colors ${globalIdx === currentIndex ? "ring-2 ring-primary" : ""} ${isFlagged ? "bg-yellow-300 text-yellow-800" : isAnswered ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded bg-green-500" />{" "}
                        Answered
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded bg-yellow-300" />{" "}
                        Flagged
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded bg-gray-100 border" />{" "}
                        Not Answered
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
