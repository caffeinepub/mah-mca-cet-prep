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
import { GRAMMAR_QUESTIONS } from "../data/grammarQuestions";

const TOPICS = [
  "All",
  "Vocabulary",
  "Grammar",
  "Idioms & Phrases",
  "RC Strategy",
  "Reading Comprehension",
];

const TOPIC_COLORS: Record<string, { color: string; bg: string }> = {
  Vocabulary: { color: "#1E63D6", bg: "#EBF0FD" },
  Grammar: { color: "#0891B2", bg: "#E0F7FA" },
  "Idioms & Phrases": { color: "#7C3AED", bg: "#EDE9FE" },
  "RC Strategy": { color: "#D97706", bg: "#FEF3C7" },
  "Reading Comprehension": { color: "#059669", bg: "#D1FAE5" },
};

interface GrammarPracticeProps {
  onBack: () => void;
}

export function GrammarPractice({ onBack }: GrammarPracticeProps) {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const questions =
    selectedTopic === "All"
      ? GRAMMAR_QUESTIONS
      : GRAMMAR_QUESTIONS.filter((q) => q.topic === selectedTopic);

  const current = questions[currentIndex];
  const totalQ = questions.length;
  const answered = Object.keys(answers).length;

  const score = submitted
    ? questions.reduce(
        (acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0),
        0,
      )
    : 0;

  const handleAnswer = (idx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [current.id]: idx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowReview(false);
    setCurrentIndex(0);
  };

  const pct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;

  if (submitted && !showReview) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center pb-2">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Grammar & English Test Complete!
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
                <Button onClick={() => setShowReview(true)} variant="outline">
                  Review Answers
                </Button>
                <Button onClick={handleReset}>Retry Test</Button>
                <Button variant="ghost" onClick={onBack}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (submitted && showReview) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" onClick={() => setShowReview(false)}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Score
            </Button>
            <h2 className="text-xl font-bold">
              Answer Review — Grammar & English ({score}/{totalQ})
            </h2>
          </div>
          <ScrollArea className="h-[calc(100vh-140px)] pr-2">
            <div className="space-y-5">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctIndex;
                const isSkipped = userAns === undefined;
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
                                backgroundColor:
                                  TOPIC_COLORS[q.topic]?.bg ?? "#f3f4f6",
                                color:
                                  TOPIC_COLORS[q.topic]?.color ?? "#374151",
                                border: `1px solid ${TOPIC_COLORS[q.topic]?.color ?? "#d1d5db"}`,
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
                                    : oi === userAns && !isCorrect
                                      ? "bg-red-100 border-red-400 text-red-800"
                                      : "bg-white border-gray-200"
                                }`}
                              >
                                {String.fromCharCode(65 + oi)}. {opt}
                                {oi === q.correctIndex && " ✓"}
                                {oi === userAns && !isCorrect && " ✗"}
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

  // Active test view
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" onClick={onBack} size="sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">
              Grammar & English Practice
            </h1>
            <p className="text-xs text-muted-foreground">
              100 MCQs — MAH CET Pattern · Vocabulary, Grammar, Idioms, RC
            </p>
          </div>
        </div>

        {/* Topic Filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setSelectedTopic(t);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                selectedTopic === t
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Progress */}
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

        {/* Question Card */}
        {current && (
          <Card className="border-2 border-primary/20 mb-5">
            <CardHeader className="pb-3">
              <div className="flex gap-2 flex-wrap mb-2">
                <Badge variant="outline" className="text-xs">
                  Q{currentIndex + 1}
                </Badge>
                <Badge
                  className="text-xs"
                  style={{
                    backgroundColor:
                      TOPIC_COLORS[current.topic]?.bg ?? "#f3f4f6",
                    color: TOPIC_COLORS[current.topic]?.color ?? "#374151",
                    border: `1px solid ${TOPIC_COLORS[current.topic]?.color ?? "#d1d5db"}`,
                  }}
                >
                  {current.topic}
                </Badge>
              </div>
              <CardTitle className="text-base font-semibold leading-relaxed whitespace-pre-line">
                {current.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {current.options.map((opt, oi) => {
                const selected = answers[current.id] === oi;
                return (
                  <button
                    key={`opt-${current.id}-${oi}`}
                    type="button"
                    onClick={() => handleAnswer(oi)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                      selected
                        ? "bg-primary text-white border-primary font-medium"
                        : "bg-white border-border hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="font-semibold mr-2">
                      {String.fromCharCode(65 + oi)}.
                    </span>
                    {opt}
                  </button>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
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
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Submit Test
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
