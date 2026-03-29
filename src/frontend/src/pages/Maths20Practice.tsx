import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { MATHS20_QUESTIONS } from "../data/maths20Questions";

const TOPICS = [
  "Algebra",
  "Calculus",
  "Probability",
  "Matrices",
  "Trigonometry",
];

const TOPIC_META: Record<
  string,
  { color: string; bg: string; border: string; desc: string; emoji: string }
> = {
  Algebra: {
    color: "#1E63D6",
    bg: "#EBF0FD",
    border: "#1E63D6",
    desc: "Linear equations, quadratic equations, polynomials, sets & relations, functions, binomial theorem",
    emoji: "🔢",
  },
  Calculus: {
    color: "#0891B2",
    bg: "#E0F7FA",
    border: "#0891B2",
    desc: "Limits, continuity, derivatives, integration, maxima/minima and definite integrals",
    emoji: "📈",
  },
  Probability: {
    color: "#7C3AED",
    bg: "#EDE9FE",
    border: "#7C3AED",
    desc: "Basic probability, conditional probability, Bayes theorem, distributions, permutations & combinations",
    emoji: "🎲",
  },
  Matrices: {
    color: "#D97706",
    bg: "#FEF3C7",
    border: "#D97706",
    desc: "Matrix operations, determinants, inverse, transpose, rank and Cramer's rule",
    emoji: "🔲",
  },
  Trigonometry: {
    color: "#059669",
    bg: "#D1FAE5",
    border: "#059669",
    desc: "Trigonometric identities, values at standard angles, inverse trig, equations & heights/distances",
    emoji: "📐",
  },
};

type Mode = "home" | "quiz" | "results" | "review";

interface Maths20PracticeProps {
  onBack: () => void;
}

export function Maths20Practice({ onBack }: Maths20PracticeProps) {
  const [mode, setMode] = useState<Mode>("home");
  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const questions =
    activeTopic === "All"
      ? MATHS20_QUESTIONS
      : MATHS20_QUESTIONS.filter((q) => q.topic === activeTopic);

  const current = questions[currentIndex];
  const totalQ = questions.length;
  const answered = Object.keys(answers).length;

  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0),
    0,
  );

  const startTopic = (topic: string) => {
    setActiveTopic(topic);
    setCurrentIndex(0);
    setAnswers({});
    setRevealed(new Set());
    setMode("quiz");
  };

  const handleAnswer = (optionIndex: number) => {
    if (revealed.has(current.id)) return;
    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }));
    setRevealed((prev) => new Set(prev).add(current.id));
  };

  const goNext = () => {
    if (currentIndex < totalQ - 1) setCurrentIndex((i) => i + 1);
    else setMode("results");
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const pct = totalQ > 0 ? Math.round((answered / totalQ) * 100) : 0;
  const scorePct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;
  const wrong = questions.filter(
    (q) => q.id in answers && answers[q.id] !== q.correct,
  ).length;
  const skipped = totalQ - answered;

  if (mode === "home") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            data-ocid="maths20.back.button"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Maths 2.0</h1>
            <p className="text-muted-foreground text-sm">
              100 MCQs — Algebra, Calculus, Probability, Matrices, Trigonometry
              | MAH CET Level
            </p>
          </div>
        </div>

        {/* Practice All Button */}
        <div className="mb-6">
          <Button
            size="lg"
            className="w-full font-semibold text-base"
            style={{ backgroundColor: "#1E63D6" }}
            onClick={() => startTopic("All")}
            data-ocid="maths20.practice_all.button"
          >
            Practice All 100 Questions
          </Button>
        </div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOPICS.map((topic) => {
            const meta = TOPIC_META[topic];
            const count = MATHS20_QUESTIONS.filter(
              (q) => q.topic === topic,
            ).length;
            return (
              <Card
                key={topic}
                className="border-2 hover:shadow-md transition-all cursor-pointer"
                style={{ borderColor: `${meta.border}44` }}
                onClick={() => startTopic(topic)}
                data-ocid="maths20.topic.card"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        backgroundColor: meta.bg,
                        color: meta.color,
                      }}
                    >
                      {meta.emoji}
                    </div>
                    <Badge
                      variant="outline"
                      style={{ borderColor: meta.border, color: meta.color }}
                    >
                      {count} MCQs
                    </Badge>
                  </div>
                  <h3
                    className="font-bold text-foreground text-lg mb-1"
                    style={{ color: meta.color }}
                  >
                    {topic}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {meta.desc}
                  </p>
                  <Button
                    className="w-full font-semibold"
                    style={{ backgroundColor: meta.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      startTopic(topic);
                    }}
                    data-ocid="maths20.start.button"
                  >
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === "quiz") {
    const isRevealed = revealed.has(current.id);
    const userAnswer = answers[current.id];
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMode("home")}
            data-ocid="maths20.quiz_back.button"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div>
            <h2 className="font-bold text-foreground">
              Maths 2.0 — {activeTopic === "All" ? "All Topics" : activeTopic}
            </h2>
            <p className="text-xs text-muted-foreground">
              Question {currentIndex + 1} of {totalQ}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <Progress value={pct} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {answered}/{totalQ} answered
          </p>
        </div>

        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base font-semibold leading-relaxed">
                Q{currentIndex + 1}. {current.question}
              </CardTitle>
              <Badge variant="outline" className="shrink-0 text-xs">
                {current.topic}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {current.options.map((opt, idx) => {
              let cls =
                "w-full text-left p-3 rounded-lg border text-sm transition-all ";
              if (!isRevealed) {
                cls +=
                  "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer border-border";
              } else if (idx === current.correct) {
                cls +=
                  "border-green-500 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 font-semibold";
              } else if (idx === userAnswer) {
                cls +=
                  "border-red-500 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300";
              } else {
                cls += "border-border opacity-60";
              }
              return (
                <button
                  key={opt}
                  type="button"
                  className={cls}
                  onClick={() => handleAnswer(idx)}
                  disabled={isRevealed}
                  data-ocid="maths20.option.button"
                >
                  <span className="font-bold mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {opt}
                </button>
              );
            })}

            {isRevealed && (
              <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                  💡 Explanation:
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {current.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentIndex === 0}
            data-ocid="maths20.prev.button"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          {currentIndex < totalQ - 1 ? (
            <Button onClick={goNext} data-ocid="maths20.next.button">
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#059669" }}
              onClick={() => setMode("results")}
              data-ocid="maths20.submit.button"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (mode === "results") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mx-auto text-4xl font-bold"
              style={{
                background:
                  scorePct >= 60
                    ? "linear-gradient(135deg,#059669,#0891B2)"
                    : "linear-gradient(135deg,#D97706,#EF4444)",
                color: "#fff",
              }}
            >
              {scorePct}%
            </div>
            <p className="text-muted-foreground text-sm">
              {activeTopic === "All" ? "All Topics" : activeTopic}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl p-4 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {score}
                </p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div className="rounded-xl p-4 bg-red-50 dark:bg-red-950">
                <XCircle className="w-6 h-6 text-red-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {wrong}
                </p>
                <p className="text-xs text-muted-foreground">Wrong</p>
              </div>
              <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-800">
                <CircleDashed className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {skipped}
                </p>
                <p className="text-xs text-muted-foreground">Skipped</p>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => startTopic(activeTopic)}
                data-ocid="maths20.retry.button"
              >
                Retry
              </Button>
              <Button
                onClick={() => setMode("review")}
                data-ocid="maths20.review.button"
              >
                <BookOpen className="w-4 h-4 mr-2" /> Review Answers
              </Button>
              <Button
                variant="ghost"
                onClick={() => setMode("home")}
                data-ocid="maths20.home.button"
              >
                Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Review mode
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMode("results")}
          data-ocid="maths20.review_back.button"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Results
        </Button>
        <h2 className="font-bold text-foreground">Answer Review</h2>
      </div>
      <ScrollArea className="h-[70vh]">
        <div className="space-y-4 pr-2">
          {questions.map((q, idx) => {
            const ua = answers[q.id];
            const isCorrect = ua === q.correct;
            const isSkipped = !(q.id in answers);
            return (
              <Card
                key={q.id}
                className="border-2"
                style={{
                  borderColor: isSkipped
                    ? "#9CA3AF"
                    : isCorrect
                      ? "#059669"
                      : "#EF4444",
                }}
                data-ocid={`maths20.review.item.${idx + 1}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-2 mb-3">
                    {isSkipped ? (
                      <CircleDashed className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    ) : isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Q{idx + 1}. {q.question}
                      </p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {q.topic}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs pl-7">
                    {q.options.map((opt, i) => (
                      <div
                        key={opt}
                        className={`p-2 rounded ${
                          i === q.correct
                            ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 font-semibold"
                            : i === ua
                              ? "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"
                              : "text-muted-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}. {opt}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pl-7">
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      💡 {q.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
