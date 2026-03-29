import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Trophy,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { type PYQQuestion, getPYQByYear } from "../data/pyqQuestions";

type Year = 2023 | 2024 | 2025 | 2026;
type Phase = "select" | "quiz" | "review";

interface PYQProps {
  onBack: () => void;
}

interface QuizResult {
  question: PYQQuestion;
  selectedAnswer: number | null;
  isCorrect: boolean;
}

const YEAR_META: Record<
  Year,
  { label: string; color: string; bg: string; description: string }
> = {
  2023: {
    label: "2023",
    color: "#1E63D6",
    bg: "#EBF0FD",
    description: "MAH-MCA-CET Previous Year Questions 2023",
  },
  2024: {
    label: "2024",
    color: "#0891B2",
    bg: "#E0F7FA",
    description: "MAH-MCA-CET Previous Year Questions 2024",
  },
  2025: {
    label: "2025",
    color: "#7C3AED",
    bg: "#EDE9FE",
    description: "MAH-MCA-CET Previous Year Questions 2025",
  },
  2026: {
    label: "2026 (Predicted)",
    color: "#D97706",
    bg: "#FEF3C7",
    description:
      "MAH-MCA-CET 2026 Predicted Questions — based on analysis of 2023–2025 paper patterns",
  },
};

export function PreviousYearQuestions({ onBack }: PYQProps) {
  const [phase, setPhase] = useState<Phase>("select");
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [questions, setQuestions] = useState<PYQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [results, setResults] = useState<QuizResult[]>([]);

  const startYear = (year: Year) => {
    const qs = getPYQByYear(year);
    setSelectedYear(year);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setPhase("quiz");
  };

  const handleAnswer = (optionIndex: number) => {
    if (answers[currentIndex] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleSubmit = () => {
    const res: QuizResult[] = questions.map((q, idx) => ({
      question: q,
      selectedAnswer: answers[idx] ?? null,
      isCorrect: answers[idx] === q.correct,
    }));
    setResults(res);
    setPhase("review");
  };

  const score = results.filter((r) => r.isCorrect).length;
  const skipped = results.filter((r) => r.selectedAnswer === null).length;
  const wrong = results.filter(
    (r) => r.selectedAnswer !== null && !r.isCorrect,
  ).length;

  if (phase === "select") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Previous Year Questions
            </h1>
            <p className="text-muted-foreground">
              100 questions per year across all 4 subjects (25 each)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([2023, 2024, 2025, 2026] as Year[]).map((year) => {
              const meta = YEAR_META[year];
              return (
                <Card
                  key={year}
                  className="border border-border hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <CardHeader className="pb-3">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 text-2xl font-bold"
                      style={{ backgroundColor: meta.bg, color: meta.color }}
                    >
                      {year}
                    </div>
                    <CardTitle
                      className="text-xl"
                      style={{ color: meta.color }}
                    >
                      MAH-MCA-CET {year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {meta.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {[
                        "Mathematics",
                        "Computer Concepts",
                        "Logical Reasoning",
                        "English",
                      ].map((sub) => (
                        <div
                          key={sub}
                          className="flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <BookOpen
                            className="w-3 h-3"
                            style={{ color: meta.color }}
                          />
                          <span>{sub.split(" ")[0]}</span>
                        </div>
                      ))}
                    </div>
                    <Badge variant="outline" className="mb-4 text-xs">
                      100 Questions
                    </Badge>
                    <Button
                      className="w-full font-semibold"
                      style={{ backgroundColor: meta.color }}
                      onClick={() => startYear(year)}
                    >
                      Start {year} Paper
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "quiz" && questions.length > 0) {
    const q = questions[currentIndex];
    const chosen = answers[currentIndex];
    const answered = chosen !== undefined;
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const meta = YEAR_META[selectedYear!];

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => setPhase("select")}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Badge style={{ backgroundColor: meta.color, color: "white" }}>
              MAH-MCA-CET {selectedYear}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          {/* Progress */}
          <Progress value={progress} className="mb-6 h-2" />

          {/* Subject badge */}
          <Badge variant="outline" className="mb-4">
            {q.subject}
          </Badge>

          {/* Question */}
          <Card className="mb-6 border border-border shadow-sm">
            <CardContent className="p-6">
              <p className="text-base font-medium text-foreground leading-relaxed">
                {q.question}
              </p>
            </CardContent>
          </Card>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {q.options.map((opt, idx) => {
              let optClassName =
                "w-full text-left justify-start h-auto py-3 px-4 ";
              if (answered) {
                if (idx === q.correct)
                  optClassName +=
                    "border-green-500 bg-green-50 text-green-800 ";
                else if (idx === chosen)
                  optClassName += "border-red-500 bg-red-50 text-red-800 ";
                else optClassName += "opacity-60 ";
              }
              return (
                <Button
                  key={`${q.id}-opt-${idx}`}
                  variant="outline"
                  className={optClassName}
                  onClick={() => handleAnswer(idx)}
                  disabled={answered}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {opt}
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {answered && (
            <Card className="mb-6 border border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <p className="text-sm font-medium text-blue-800 mb-1">
                  Explanation:
                </p>
                <p className="text-sm text-blue-700">{q.explanation}</p>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            {currentIndex < questions.length - 1 ? (
              <Button onClick={goNext}>
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleSubmit}
              >
                Submit Test
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "review") {
    const pct = Math.round((score / results.length) * 100);
    const meta = YEAR_META[selectedYear!];

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => setPhase("select")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Years
          </Button>

          {/* Scorecard */}
          <Card className="mb-8 border-2" style={{ borderColor: meta.color }}>
            <CardContent className="p-8 text-center">
              <Trophy
                className="w-12 h-12 mx-auto mb-3"
                style={{ color: meta.color }}
              />
              <h2 className="text-2xl font-bold mb-1">Test Complete!</h2>
              <p className="text-muted-foreground mb-6">
                MAH-MCA-CET {selectedYear} Paper
              </p>
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: meta.color }}
              >
                {pct}%
              </div>
              <p className="text-muted-foreground mb-6">
                {score} out of {results.length} correct
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-green-600">
                    {score}
                  </div>
                  <div className="text-xs text-muted-foreground">Correct</div>
                </div>
                <div className="bg-red-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-red-600">{wrong}</div>
                  <div className="text-xs text-muted-foreground">Wrong</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-gray-600">
                    {skipped}
                  </div>
                  <div className="text-xs text-muted-foreground">Skipped</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answer Review */}
          <h3 className="text-xl font-bold mb-4">Answer Review</h3>
          <div className="space-y-4">
            {results.map((r, idx) => (
              <Card
                key={`result-${r.question.id}`}
                className={`border-l-4 ${
                  r.isCorrect
                    ? "border-l-green-500"
                    : r.selectedAnswer === null
                      ? "border-l-gray-400"
                      : "border-l-red-500"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-sm font-medium text-foreground flex-1">
                      <span className="text-muted-foreground mr-2">
                        Q{idx + 1}.
                      </span>
                      {r.question.question}
                    </p>
                    {r.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : r.selectedAnswer === null ? (
                      <SkipForward className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs mb-3">
                    {r.question.subject}
                  </Badge>
                  <div className="space-y-1 mb-3">
                    {r.question.options.map((opt, oidx) => (
                      <div
                        key={`${r.question.id}-opt-${oidx}`}
                        className={`text-xs px-3 py-1.5 rounded ${
                          oidx === r.question.correct
                            ? "bg-green-100 text-green-800 font-medium"
                            : oidx === r.selectedAnswer && !r.isCorrect
                              ? "bg-red-100 text-red-800"
                              : "text-muted-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + oidx)}. {opt}
                        {oidx === r.question.correct && " ✓"}
                        {oidx === r.selectedAnswer && !r.isCorrect && " ✗"}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    💡 {r.question.explanation}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
