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
import { ALL_GRAMMAR_QUESTIONS as GRAMMAR_QUESTIONS } from "../data/grammarQuestions";

const TOPICS = [
  "Vocabulary",
  "Grammar",
  "Idioms & Phrases",
  "RC Strategy",
  "Reading Comprehension",
];

const TOPIC_META: Record<
  string,
  { color: string; bg: string; border: string; desc: string; emoji: string }
> = {
  Vocabulary: {
    color: "#1E63D6",
    bg: "#EBF0FD",
    border: "#1E63D6",
    desc: "Synonyms, antonyms, one-word substitutions & word meanings based on MAH CET pattern",
    emoji: "📖",
  },
  Grammar: {
    color: "#0891B2",
    bg: "#E0F7FA",
    border: "#0891B2",
    desc: "Tenses, prepositions, articles, active/passive voice & sentence correction",
    emoji: "✏️",
  },
  "Idioms & Phrases": {
    color: "#7C3AED",
    bg: "#EDE9FE",
    border: "#7C3AED",
    desc: "Common English idioms, phrases and their contextual meanings",
    emoji: "💬",
  },
  "RC Strategy": {
    color: "#D97706",
    bg: "#FEF3C7",
    border: "#D97706",
    desc: "Skim & scan techniques, para identification, inference & tone detection",
    emoji: "🎯",
  },
  "Reading Comprehension": {
    color: "#059669",
    bg: "#D1FAE5",
    border: "#059669",
    desc: "Short passages with comprehension, inference and vocabulary-in-context questions",
    emoji: "📝",
  },
};

type Mode = "home" | "quiz" | "results" | "review";

interface GrammarPracticeProps {
  onBack: () => void;
}

export function GrammarPractice({ onBack }: GrammarPracticeProps) {
  const [mode, setMode] = useState<Mode>("home");
  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const questions =
    activeTopic === "All"
      ? GRAMMAR_QUESTIONS
      : GRAMMAR_QUESTIONS.filter((q) => q.topic === activeTopic);

  const current = questions[currentIndex];
  const totalQ = questions.length;
  const answered = Object.keys(answers).length;

  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0),
    0,
  );

  const startTopic = (topic: string) => {
    setActiveTopic(topic);
    setCurrentIndex(0);
    setAnswers({});
    setRevealed(new Set());
    setMode("quiz");
  };

  const handleAnswer = (idx: number) => {
    if (revealed.has(current.id)) return;
    setAnswers((prev) => ({ ...prev, [current.id]: idx }));
    setRevealed((prev) => new Set(prev).add(current.id));
  };

  const handleReset = () => {
    setAnswers({});
    setRevealed(new Set());
    setCurrentIndex(0);
    setMode("quiz");
  };

  const handleBackToTopics = () => {
    setMode("home");
    setAnswers({});
    setRevealed(new Set());
    setCurrentIndex(0);
  };

  const isRevealed = current ? revealed.has(current.id) : false;
  const userAns = current ? answers[current.id] : undefined;
  const pct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;

  // ─── HOME ───
  if (mode === "home") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Grammar & English Practice
            </h1>
            <p className="text-muted-foreground">
              Select a topic to practice 100 focused MCQs with instant answer
              feedback
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {TOPICS.map((topic) => {
              const meta = TOPIC_META[topic];
              const count = GRAMMAR_QUESTIONS.filter(
                (q) => q.topic === topic,
              ).length;
              return (
                <Card
                  key={topic}
                  className="border-2 hover:shadow-md transition-shadow cursor-pointer"
                  style={{ borderColor: `${meta.border}40` }}
                  onClick={() => startTopic(topic)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                        style={{ backgroundColor: meta.bg }}
                      >
                        {meta.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-base">
                          {topic}
                        </h3>
                        <Badge
                          className="text-xs mt-1"
                          style={{
                            backgroundColor: meta.bg,
                            color: meta.color,
                            border: `1px solid ${meta.border}`,
                          }}
                        >
                          {count} Questions
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {meta.desc}
                    </p>
                    <Button
                      className="w-full"
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
          <Card className="border-2 border-dashed border-primary/40">
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-foreground">
                  Practice All Topics
                </h3>
                <p className="text-sm text-muted-foreground">
                  {GRAMMAR_QUESTIONS.length} MCQs — Vocabulary, Grammar, Idioms,
                  RC Strategy & Reading Comprehension
                </p>
              </div>
              <Button onClick={() => startTopic("All")} variant="outline">
                Start All ({GRAMMAR_QUESTIONS.length} Qs)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ─── RESULTS ───
  if (mode === "results") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Button variant="ghost" onClick={handleBackToTopics} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Topics
          </Button>
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center pb-2">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Test Complete —{" "}
                {activeTopic === "All" ? "All Topics" : activeTopic}!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-5xl font-bold text-primary">
                {score}/{totalQ}
              </div>
              <div className="text-lg text-muted-foreground">
                {pct}% Accuracy
              </div>
              <Progress value={pct} className="h-3 max-w-xs mx-auto" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-green-600">
                    {score}
                  </div>
                  <div className="text-xs text-muted-foreground">Correct</div>
                </div>
                <div className="bg-red-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-red-500">
                    {answered - score}
                  </div>
                  <div className="text-xs text-muted-foreground">Wrong</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-gray-500">
                    {totalQ - answered}
                  </div>
                  <div className="text-xs text-muted-foreground">Skipped</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center mt-6 flex-wrap">
                <Button onClick={() => setMode("review")} variant="outline">
                  Review Answers
                </Button>
                <Button onClick={handleReset}>Try Again</Button>
                <Button variant="ghost" onClick={handleBackToTopics}>
                  Back to Topics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ─── REVIEW ───
  if (mode === "review") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" onClick={() => setMode("results")}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Score
            </Button>
            <h2 className="text-xl font-bold">
              Answer Review —{" "}
              {activeTopic === "All" ? "All Topics" : activeTopic} ({score}/
              {totalQ})
            </h2>
          </div>
          <ScrollArea className="h-[calc(100vh-140px)] pr-2">
            <div className="space-y-5">
              {questions.map((q, idx) => {
                const uAns = answers[q.id];
                const isCorrect = uAns === q.correctIndex;
                const isSkipped = uAns === undefined;
                const meta = TOPIC_META[q.topic];
                return (
                  <Card
                    key={q.id}
                    className={`border-2 ${
                      isSkipped
                        ? "border-gray-200 bg-gray-50"
                        : isCorrect
                          ? "border-green-300 bg-green-50"
                          : "border-red-300 bg-red-50"
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        {isSkipped ? (
                          <CircleDashed className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                        ) : isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className="flex gap-2 mb-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                              Q{idx + 1}
                            </Badge>
                            <Badge
                              className="text-xs"
                              style={{
                                backgroundColor: meta?.bg ?? "#f3f4f6",
                                color: meta?.color ?? "#374151",
                                border: `1px solid ${meta?.color ?? "#d1d5db"}`,
                              }}
                            >
                              {q.topic}
                            </Badge>
                          </div>
                          <p className="font-medium text-sm text-foreground whitespace-pre-line mb-3">
                            {q.question}
                          </p>
                          <div className="space-y-1.5">
                            {q.options.map((opt, oi) => (
                              <div
                                key={`opt-${q.id}-${oi}`}
                                className={`text-sm px-3 py-2 rounded-lg border ${
                                  oi === q.correctIndex
                                    ? "bg-green-100 border-green-400 font-semibold text-green-800"
                                    : oi === uAns && !isCorrect
                                      ? "bg-red-100 border-red-400 text-red-800"
                                      : "bg-white border-gray-200"
                                }`}
                              >
                                {String.fromCharCode(65 + oi)}. {opt}
                                {oi === q.correctIndex && " ✓"}
                                {oi === uAns && !isCorrect && " ✗"}
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-xs text-blue-800">
                              <span className="font-semibold">
                                Explanation:{" "}
                              </span>
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  }

  // ─── QUIZ ───
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" onClick={handleBackToTopics} size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Topics
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">
              {activeTopic === "All" ? "All Topics Practice" : activeTopic}
            </h1>
            <p className="text-xs text-muted-foreground">
              {totalQ} MCQs · MAH CET Pattern · Instant Feedback
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>
              Question {currentIndex + 1} of {totalQ}
            </span>
            <span>{answered} answered</span>
          </div>
          <Progress
            value={((currentIndex + 1) / totalQ) * 100}
            className="h-2"
          />
        </div>

        {current && (
          <Card className="border-2 border-primary/20 mb-5">
            <CardHeader className="pb-3">
              <div className="flex gap-2 flex-wrap mb-2">
                <Badge variant="outline" className="text-xs">
                  Q{currentIndex + 1}
                </Badge>
                {activeTopic === "All" && (
                  <Badge
                    className="text-xs"
                    style={{
                      backgroundColor:
                        TOPIC_META[current.topic]?.bg ?? "#f3f4f6",
                      color: TOPIC_META[current.topic]?.color ?? "#374151",
                      border: `1px solid ${TOPIC_META[current.topic]?.color ?? "#d1d5db"}`,
                    }}
                  >
                    {current.topic}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-base font-semibold leading-relaxed whitespace-pre-line">
                {current.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {current.options.map((opt, oi) => {
                const isSelected = userAns === oi;
                const isCorrectOpt = oi === current.correctIndex;
                let cls =
                  "bg-white border-border hover:border-primary hover:bg-primary/5";
                if (isRevealed) {
                  if (isCorrectOpt)
                    cls =
                      "bg-green-100 border-green-500 font-semibold text-green-800";
                  else if (isSelected)
                    cls = "bg-red-100 border-red-400 text-red-800";
                  else cls = "bg-white border-gray-200 opacity-70";
                } else if (isSelected) {
                  cls = "bg-primary text-white border-primary font-medium";
                }
                return (
                  <button
                    key={`opt-${current.id}-${oi}`}
                    type="button"
                    onClick={() => handleAnswer(oi)}
                    disabled={isRevealed}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${cls} ${isRevealed ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span className="font-semibold mr-2">
                      {String.fromCharCode(65 + oi)}.
                    </span>
                    {opt}
                    {isRevealed && isCorrectOpt && " ✓"}
                    {isRevealed && isSelected && !isCorrectOpt && " ✗"}
                  </button>
                );
              })}

              {isRevealed && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <span className="font-semibold">Explanation: </span>
                    {current.explanation}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          <span className="text-xs text-muted-foreground">
            {answered}/{totalQ} answered
          </span>
          {currentIndex < totalQ - 1 ? (
            <Button onClick={() => setCurrentIndex((i) => i + 1)}>
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={() => setMode("results")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              See Results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
