import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Trophy,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import type { MockQuestion } from "../data/mock1Questions";
import { MOCK1_QUESTIONS } from "../data/mock1Questions";
import { MOCK2_QUESTIONS } from "../data/mock2Questions";
import { MOCK3_QUESTIONS } from "../data/mock3Questions";

type Phase = "select" | "quiz" | "review";
type MockId = 1 | 2 | 3;

const MOCK_META: Record<
  MockId,
  { title: string; color: string; bg: string; description: string; tag: string }
> = {
  1: {
    title: "Mock Prediction Test 1",
    color: "#1E63D6",
    bg: "#EBF0FD",
    description: "150 questions · All topics · MCA CET pattern",
    tag: "Full Mock",
  },
  2: {
    title: "Mock Prediction Test 2",
    color: "#7C3AED",
    bg: "#EDE9FE",
    description: "150 questions · All topics · Different questions",
    tag: "Full Mock",
  },
  3: {
    title: "Mock Prediction Test 3",
    color: "#D97706",
    bg: "#FEF3C7",
    description: "150 questions · All topics · Exam-level difficulty",
    tag: "Full Mock",
  },
};

const QUESTIONS_MAP: Record<MockId, MockQuestion[]> = {
  1: MOCK1_QUESTIONS,
  2: MOCK2_QUESTIONS,
  3: MOCK3_QUESTIONS,
};

interface MockResult {
  question: MockQuestion;
  selected: number | null;
  isCorrect: boolean;
}

interface Props {
  onBack: () => void;
}

export function MockPredictionTests({ onBack }: Props) {
  const [phase, setPhase] = useState<Phase>("select");
  const [mockId, setMockId] = useState<MockId | null>(null);
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [results, setResults] = useState<MockResult[]>([]);

  const startMock = (id: MockId) => {
    setMockId(id);
    setQuestions(QUESTIONS_MAP[id]);
    setCurrentIndex(0);
    setAnswers({});
    setPhase("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnswer = (optIdx: number) => {
    if (answers[currentIndex] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: optIdx }));
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleSubmit = () => {
    const res: MockResult[] = questions.map((q, idx) => ({
      question: q,
      selected: answers[idx] ?? null,
      isCorrect: answers[idx] === q.correct,
    }));
    setResults(res);
    setPhase("review");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToSelect = () => {
    setPhase("select");
    setMockId(null);
    setAnswers({});
    setResults([]);
    setCurrentIndex(0);
  };

  // SELECT PHASE
  if (phase === "select") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Mock Prediction Tests
              </h1>
              <p className="text-muted-foreground text-sm mt-0.5">
                3 full-length mocks · 150 unique questions each · All MCA CET
                topics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {([1, 2, 3] as MockId[]).map((id) => {
              const meta = MOCK_META[id];
              return (
                <Card
                  key={id}
                  className="border-2 hover:shadow-lg transition-all cursor-pointer"
                  style={{ borderColor: `${meta.color}33` }}
                >
                  <CardContent className="p-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: meta.bg }}
                    >
                      <Brain
                        className="w-7 h-7"
                        style={{ color: meta.color }}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      {meta.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {meta.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Math", "CS", "Reasoning", "English"].map((s) => (
                        <Badge
                          key={s}
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: meta.color, color: meta.color }}
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <Badge
                      className="text-xs mb-4 block w-fit"
                      style={{ backgroundColor: meta.color }}
                    >
                      {meta.tag}
                    </Badge>
                    <Button
                      className="w-full font-semibold"
                      style={{ backgroundColor: meta.color }}
                      onClick={() => startMock(id)}
                    >
                      Start Mock {id}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
            <strong>Topics covered in all mocks:</strong> Algebra, Calculus,
            Probability, Matrices, Trigonometry, Data Structures, DBMS, OS,
            Networking, C Programming, Algorithms, Syllogisms, Coding-Decoding,
            Blood Relations, Number Series, Vocabulary, Grammar, Reading
            Comprehension.
          </div>
        </div>
      </div>
    );
  }

  // QUIZ PHASE
  if (phase === "quiz") {
    const meta = MOCK_META[mockId!];
    const q = questions[currentIndex];
    const answered = answers[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const answeredCount = Object.keys(answers).length;

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" size="sm" onClick={handleBackToSelect}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Mocks
            </Button>
            <div className="text-center">
              <p
                className="font-semibold text-sm"
                style={{ color: meta.color }}
              >
                {meta.title}
              </p>
              <p className="text-xs text-muted-foreground">
                Q {currentIndex + 1} of {questions.length}
              </p>
            </div>
            <Badge variant="outline">{q.subject}</Badge>
          </div>

          {/* Progress */}
          <Progress value={progress} className="mb-4 h-2" />

          {/* Question Card */}
          <Card
            className="mb-4 border-2"
            style={{ borderColor: `${meta.color}33` }}
          >
            <CardContent className="p-6">
              <p className="font-semibold text-foreground text-base mb-5 leading-relaxed">
                {currentIndex + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  let cls =
                    "w-full text-left p-3 rounded-lg border text-sm cursor-pointer transition-all ";
                  if (answered === undefined) {
                    cls +=
                      "border-border hover:border-primary hover:bg-primary/5";
                  } else if (idx === q.correct) {
                    cls +=
                      "border-green-500 bg-green-50 text-green-800 font-medium";
                  } else if (idx === answered) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-border bg-muted/30 text-muted-foreground";
                  }
                  return (
                    <button
                      type="button"
                      key={opt.slice(0, 20)}
                      className={cls}
                      onClick={() => handleAnswer(idx)}
                    >
                      <span className="font-semibold mr-2">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answered !== undefined && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Prev
            </Button>
            <span className="text-xs text-muted-foreground">
              {answeredCount} / {questions.length} answered
            </span>
            {currentIndex < questions.length - 1 ? (
              <Button onClick={goNext} style={{ backgroundColor: meta.color }}>
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Submit <Trophy className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>

          {/* Skip / Submit early */}
          {currentIndex < questions.length - 1 && answeredCount >= 10 && (
            <div className="mt-3 text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSubmit}
                className="text-muted-foreground"
              >
                <SkipForward className="w-4 h-4 mr-1" /> Submit Early
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // REVIEW PHASE
  const correct = results.filter((r) => r.isCorrect).length;
  const wrong = results.filter(
    (r) => !r.isCorrect && r.selected !== null,
  ).length;
  const skipped = results.filter((r) => r.selected === null).length;
  const score = Math.round((correct / results.length) * 100);
  const meta = MOCK_META[mockId!];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="outline" size="sm" onClick={handleBackToSelect}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Mocks
          </Button>
          <h2 className="text-xl font-bold text-foreground">
            Results — {meta.title}
          </h2>
        </div>

        {/* Score Card */}
        <Card
          className="mb-6 border-2"
          style={{ borderColor: `${meta.color}44` }}
        >
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div
                className="text-5xl font-bold mb-1"
                style={{ color: meta.color }}
              >
                {score}%
              </div>
              <p className="text-muted-foreground">Overall Score</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <div className="text-xl font-bold text-green-700">
                  {correct}
                </div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <XCircle className="w-6 h-6 text-red-500 mx-auto mb-1" />
                <div className="text-xl font-bold text-red-600">{wrong}</div>
                <div className="text-xs text-muted-foreground">Wrong</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-xl">
                <SkipForward className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-500">{skipped}</div>
                <div className="text-xs text-muted-foreground">Skipped</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Answer Review */}
        <h3 className="font-bold text-lg mb-3">Answer Review</h3>
        <div className="space-y-3">
          {results.map((r, idx) => (
            <Card
              key={r.question.id}
              className={`border-l-4 ${
                r.isCorrect
                  ? "border-l-green-500 bg-green-50/50"
                  : r.selected === null
                    ? "border-l-gray-300 bg-gray-50/50"
                    : "border-l-red-400 bg-red-50/50"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  {r.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : r.selected === null ? (
                    <SkipForward className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {idx + 1}. {r.question.question}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {r.question.subject}
                    </Badge>
                  </div>
                </div>
                <div className="ml-7 space-y-1 text-xs">
                  {r.selected !== null && r.selected !== r.question.correct && (
                    <p className="text-red-600">
                      Your answer: {String.fromCharCode(65 + r.selected)}.{" "}
                      {r.question.options[r.selected]}
                    </p>
                  )}
                  <p className="text-green-700 font-medium">
                    Correct: {String.fromCharCode(65 + r.question.correct)}.{" "}
                    {r.question.options[r.question.correct]}
                  </p>
                  <p className="text-blue-700 bg-blue-50 p-1.5 rounded">
                    {r.question.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-full mt-6" onClick={handleBackToSelect}>
          Try Another Mock
        </Button>
      </div>
    </div>
  );
}
