import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  XCircle,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Subject } from "../backend.d";
import { type LocalQuestion, getHardQuestions } from "../data/questions";
import type { ExamSession, UserAnswer } from "../types/exam";

const SUBJECT_COLORS: Record<
  Subject,
  { bg: string; text: string; border: string; label: string }
> = {
  [Subject.math]: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-300",
    label: "Mathematics",
  },
  [Subject.computerConcepts]: {
    bg: "bg-teal-100",
    text: "text-teal-800",
    border: "border-teal-300",
    label: "Computer Concepts",
  },
  [Subject.logicalReasoning]: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-300",
    label: "Logical Reasoning",
  },
  [Subject.english]: {
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-300",
    label: "English",
  },
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

function useTimer(active: boolean) {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(interval);
  }, [active]);
  return elapsed;
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function HardMCQSet() {
  const [questions, setQuestions] = useState<LocalQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examActive, setExamActive] = useState(false);
  const elapsed = useTimer(examActive && !isSubmitted);

  const startExam = useCallback(() => {
    const all = getHardQuestions();
    const chosen = all;
    setQuestions(chosen);
    setAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setExamActive(true);
  }, []);

  const currentQ = questions[currentIndex];

  const handleAnswer = (answerIndex: number) => {
    if (isSubmitted || !currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        answerIndex,
        flagged: prev[currentQ.id]?.flagged || false,
      },
    }));
  };

  const handleFlag = () => {
    if (!currentQ || isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        answerIndex: prev[currentQ.id]?.answerIndex ?? -1,
        flagged: !prev[currentQ.id]?.flagged,
      },
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setExamActive(false);
    const correct = questions.filter(
      (q) => answers[q.id]?.answerIndex === q.correctAnswerIndex,
    ).length;
    const session: ExamSession = {
      id: Date.now().toString(),
      type: "practice",
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: correct,
      timeSpent: elapsed,
      score: Math.round((correct / questions.length) * 100),
    };
    saveSession(session);
    toast.success(`Hard Set submitted! Score: ${session.score}%`);
  };

  const answeredCount = Object.keys(answers).filter(
    (k) => answers[Number(k)]?.answerIndex !== -1,
  ).length;
  const flaggedCount = Object.values(answers).filter((a) => a.flagged).length;

  const results = useMemo(() => {
    if (!isSubmitted) return null;
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
    return {
      correct,
      wrong,
      skipped,
      score: Math.round((correct / questions.length) * 100),
    };
  }, [isSubmitted, questions, answers]);

  // Landing screen
  if (!examActive && !isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
          <Zap className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Hard MCQ Set
        </h1>
        <p className="text-muted-foreground text-lg mb-2">
          500+ hard questions sourced from top MCA CET prep sites
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Sanfoundry · IndiaBix · GeeksforGeeks · PrepInsta · ExamVeda · Vision
          Academy
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {Object.values(Subject).map((s) => {
            const c = SUBJECT_COLORS[s];
            return (
              <span
                key={s}
                className={`text-xs px-3 py-1 rounded-full border font-medium ${c.bg} ${c.text} ${c.border}`}
              >
                {c.label}
              </span>
            );
          })}
        </div>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg"
          onClick={startExam}
          data-ocid="hard.start.button"
        >
          Start Hard Practice (500+ Questions)
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          Mixed subjects · Hard difficulty · Timed
        </p>
      </div>
    );
  }

  // Results screen
  if (isSubmitted && results) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-4">
            <span className="text-3xl font-bold text-red-600">
              {results.score}%
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Hard Set Complete!
          </h2>
          <p className="text-muted-foreground mt-1">
            Time taken: {formatTime(elapsed)} &bull; {results.correct}/
            {questions.length} correct
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">
                {results.correct}
              </div>
              <div className="text-sm text-green-600">Correct</div>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-700">
                {results.wrong}
              </div>
              <div className="text-sm text-red-600">Wrong</div>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4 text-center">
              <Flag className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-700">
                {results.skipped}
              </div>
              <div className="text-sm text-yellow-600">Skipped</div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-4">
          Answer Review
        </h3>
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer?.answerIndex === q.correctAnswerIndex;
            const isWrong =
              userAnswer && userAnswer.answerIndex !== -1 && !isCorrect;
            const sc = SUBJECT_COLORS[q.subject];
            return (
              <Card
                key={q.id}
                className={`border ${
                  isCorrect
                    ? "border-green-200 bg-green-50"
                    : isWrong
                      ? "border-red-200 bg-red-50"
                      : "border-yellow-200 bg-yellow-50"
                }`}
                data-ocid={`hard.review.item.${idx + 1}`}
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
                    <div className="flex-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium mr-2 ${sc.bg} ${sc.text} ${sc.border}`}
                      >
                        {sc.label}
                      </span>
                      <p className="font-medium text-gray-900 text-sm mt-1">
                        {q.text}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, oidx) => (
                      <div
                        key={opt}
                        className={`text-sm px-3 py-2 rounded-lg border ${
                          oidx === q.correctAnswerIndex
                            ? "border-green-400 bg-green-100 text-green-800 font-medium"
                            : oidx === userAnswer?.answerIndex && !isCorrect
                              ? "border-red-400 bg-red-100 text-red-800"
                              : "border-border bg-card/50 text-gray-900"
                        }`}
                      >
                        {String.fromCharCode(65 + oidx)}. {opt}
                      </div>
                    ))}
                  </div>
                  <div className="bg-card/70 border border-border rounded-lg p-3 text-sm text-gray-900">
                    <span className="font-semibold text-blue-700">
                      Explanation:{" "}
                    </span>
                    {q.explanation}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 flex gap-3 justify-center">
          <Button
            variant="outline"
            onClick={() => {
              setExamActive(false);
              setIsSubmitted(false);
              setQuestions([]);
            }}
            data-ocid="hard.back.button"
          >
            Back to Start
          </Button>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={startExam}
            data-ocid="hard.retry.button"
          >
            Try Another Set
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  const subjectColor = SUBJECT_COLORS[currentQ.subject];

  // Exam UI
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6 bg-card rounded-xl border border-border p-4">
        <div>
          <p className="text-sm text-muted-foreground">Hard MCQ Set</p>
          <p className="font-semibold text-foreground">
            Mixed Subjects · Hard Difficulty
          </p>
        </div>
        <div className="flex items-center gap-2 text-lg font-mono font-bold text-red-600">
          <Clock className="w-5 h-5" />
          {formatTime(elapsed)}
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleSubmit}
          disabled={answeredCount === 0}
          data-ocid="hard.submit.button"
        >
          Submit Test
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline">
                  Q {currentIndex + 1} of {questions.length}
                </Badge>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border font-medium ${subjectColor.bg} ${subjectColor.text} ${subjectColor.border}`}
                  >
                    {subjectColor.label}
                  </span>
                  <Badge variant="secondary">{currentQ.topic}</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFlag}
                    className={
                      answers[currentQ.id]?.flagged
                        ? "text-yellow-600"
                        : "text-muted-foreground"
                    }
                    data-ocid="hard.flag.toggle"
                  >
                    <Flag className="w-4 h-4" />
                    {answers[currentQ.id]?.flagged ? "Flagged" : "Flag"}
                  </Button>
                </div>
              </div>

              <p className="text-base font-medium text-foreground mb-6 leading-relaxed">
                {currentQ.text}
              </p>

              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const selected = answers[currentQ.id]?.answerIndex === idx;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => handleAnswer(idx)}
                      data-ocid={`hard.option.${idx + 1}`}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        selected
                          ? "border-red-500 bg-red-50 text-red-700 font-medium"
                          : "border-border bg-card hover:border-red-300 hover:bg-red-50/30"
                      }`}
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
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  disabled={currentIndex === 0}
                  data-ocid="hard.prev.button"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </Button>
                <Progress
                  value={((currentIndex + 1) / questions.length) * 100}
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
                  data-ocid="hard.next.button"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border sticky top-24">
            <CardContent className="p-4">
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Question Navigator
              </h4>
              <div className="grid grid-cols-5 gap-1.5 mb-4">
                {questions.map((q, idx) => {
                  const ans = answers[q.id];
                  const isAnswered = ans && ans.answerIndex !== -1;
                  const isFlagged = ans?.flagged;
                  return (
                    <button
                      type="button"
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      data-ocid={`hard.navigator.item.${idx + 1}`}
                      className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                        idx === currentIndex ? "ring-2 ring-red-500" : ""
                      } ${
                        isFlagged
                          ? "bg-yellow-300 text-yellow-800"
                          : isAnswered
                            ? "bg-red-500 text-white"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500" /> Answered (
                  {answeredCount})
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-yellow-300" /> Flagged (
                  {flaggedCount})
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-muted border" /> Not
                  Answered ({questions.length - answeredCount})
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
