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
import { BINARY_QUESTIONS } from "../data/binaryQuestions";

const TOPICS = [
  "Hard Trap: Binary Conversion",
  "Hard Trap: Binary Arithmetic",
  "Hard Trap: 2's Complement",
  "Hard Trap: Boolean Algebra",
  "Binary Conversion",
  "Binary Arithmetic",
  "Hexadecimal",
  "2's Complement",
  "Boolean Algebra",
];

const TOPIC_META: Record<
  string,
  { color: string; bg: string; emoji: string; desc: string }
> = {
  "Hard Trap: Binary Conversion": {
    color: "#DC2626",
    bg: "#FEF2F2",
    emoji: "🔥",
    desc: "10 trap-level questions on binary-decimal-hex conversion. Designed to catch careless errors.",
  },
  "Hard Trap: Binary Arithmetic": {
    color: "#B45309",
    bg: "#FEF3C7",
    emoji: "⚡",
    desc: "10 trap-level arithmetic questions. Carry propagation, overflow and multiplication traps.",
  },
  "Hard Trap: 2's Complement": {
    color: "#7C3AED",
    bg: "#EDE9FE",
    emoji: "🧠",
    desc: "10 trap-level 2's complement questions. Range, negation, overflow detection.",
  },
  "Hard Trap: Boolean Algebra": {
    color: "#0F766E",
    bg: "#F0FDFA",
    emoji: "💡",
    desc: "10 trap-level Boolean questions. Absorption, De Morgan's, expansion traps.",
  },
  "Binary Conversion": {
    color: "#1E63D6",
    bg: "#EBF0FD",
    emoji: "🔢",
    desc: "30 standard binary↔decimal conversions. Core MCA CET exam pattern questions.",
  },
  "Binary Arithmetic": {
    color: "#0891B2",
    bg: "#E0F7FA",
    emoji: "➕",
    desc: "30 standard addition, subtraction and multiplication problems.",
  },
  Hexadecimal: {
    color: "#059669",
    bg: "#D1FAE5",
    emoji: "🔡",
    desc: "25 hexadecimal conversion questions. Binary↔Hex↔Decimal.",
  },
  "2's Complement": {
    color: "#D97706",
    bg: "#FEF3C7",
    emoji: "🔄",
    desc: "15 standard 2's complement and 1's complement questions.",
  },
  "Boolean Algebra": {
    color: "#6D28D9",
    bg: "#EDE9FE",
    emoji: "⊕",
    desc: "25 Boolean algebra laws and theorems. MAH CET exam level.",
  },
};

type Mode = "home" | "quiz" | "results" | "review";

interface Props {
  onBack: () => void;
}

export function BinaryPractice({ onBack }: Props) {
  const [mode, setMode] = useState<Mode>("home");
  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const questions =
    activeTopic === "All"
      ? BINARY_QUESTIONS
      : BINARY_QUESTIONS.filter((q) => q.topic === activeTopic);

  const current = questions[currentIndex];
  const totalQ = questions.length;
  const answered = Object.keys(answers).length;
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0),
    0,
  );
  const wrong = questions.filter(
    (q) => q.id in answers && answers[q.id] !== q.correct,
  ).length;
  const skipped = totalQ - answered;
  const pct = totalQ > 0 ? Math.round((answered / totalQ) * 100) : 0;
  const scorePct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;

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

  if (mode === "home") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Binary & Digital Logic
            </h1>
            <p className="text-muted-foreground text-sm">
              165 MCQs — Conversions, Arithmetic, Hex, 2's Complement, Boolean
              Algebra | MCA CET Level
            </p>
          </div>
        </div>

        <div className="mb-6">
          <Button
            size="lg"
            className="w-full font-semibold text-base"
            style={{ backgroundColor: "#DC2626" }}
            onClick={() => startTopic("All")}
          >
            🔥 Practice All 165 Questions
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map((topic) => {
            const meta = TOPIC_META[topic];
            const count = BINARY_QUESTIONS.filter(
              (q) => q.topic === topic,
            ).length;
            const isHard = topic.startsWith("Hard Trap");
            return (
              <Card
                key={topic}
                className="border-2 hover:shadow-md transition-all cursor-pointer"
                style={{ borderColor: `${meta.color}44` }}
                onClick={() => startTopic(topic)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: meta.bg }}
                    >
                      {meta.emoji}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant="outline"
                        style={{ borderColor: meta.color, color: meta.color }}
                      >
                        {count} MCQs
                      </Badge>
                      {isHard && (
                        <Badge
                          className="text-xs"
                          style={{ backgroundColor: meta.color, color: "#fff" }}
                        >
                          TRAP
                        </Badge>
                      )}
                    </div>
                  </div>
                  <h3
                    className="font-bold text-foreground text-sm mb-1"
                    style={{ color: meta.color }}
                  >
                    {topic}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {meta.desc}
                  </p>
                  <Button
                    className="w-full font-semibold text-sm"
                    style={{ backgroundColor: meta.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      startTopic(topic);
                    }}
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

  if (mode === "quiz" && current) {
    const isRevealed = revealed.has(current.id);
    const userAnswer = answers[current.id];
    const meta = TOPIC_META[activeTopic] ?? TOPIC_META["Binary Conversion"];
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" onClick={() => setMode("home")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div>
            <h2 className="font-bold text-foreground">
              {activeTopic === "All" ? "All Topics" : activeTopic}
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
              <Badge
                variant="outline"
                className="shrink-0 text-xs"
                style={{ borderColor: meta.color, color: meta.color }}
              >
                {current.topic.replace("Hard Trap: ", "")}
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
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          {currentIndex < totalQ - 1 ? (
            <Button onClick={goNext}>
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#059669" }}
              onClick={() => setMode("results")}
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
              <Button variant="outline" onClick={() => startTopic(activeTopic)}>
                Retry
              </Button>
              <Button onClick={() => setMode("review")}>
                <BookOpen className="w-4 h-4 mr-2" /> Review Answers
              </Button>
              <Button variant="ghost" onClick={() => setMode("home")}>
                Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="sm" onClick={() => setMode("results")}>
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
                      <p className="text-sm font-medium text-gray-900">
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
