import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Brain,
  Calculator,
  ChevronRight,
  Clock,
  Cpu,
  FileText,
  Languages,
  Play,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { LOCAL_RESOURCES } from "../data/resources";
import type { ExamSession, Page } from "../types/exam";

const SUBJECT_CARDS = [
  {
    id: "math",
    label: "Mathematics",
    icon: Calculator,
    color: "#1E63D6",
    bg: "#EBF0FD",
    tests: 14,
    page: "practice" as Page,
  },
  {
    id: "computerConcepts",
    label: "Computer Concepts",
    icon: BookOpen,
    color: "#0891B2",
    bg: "#E0F7FA",
    tests: 18,
    page: "practice" as Page,
  },
  {
    id: "logicalReasoning",
    label: "Logical Reasoning",
    icon: Brain,
    color: "#7C3AED",
    bg: "#EDE9FE",
    tests: 12,
    page: "practice" as Page,
  },
  {
    id: "english",
    label: "English Comprehension",
    icon: Languages,
    color: "#D97706",
    bg: "#FEF3C7",
    tests: 10,
    page: "practice" as Page,
  },
];

const PYQ_YEARS = [
  {
    year: 2023 as const,
    color: "#1E63D6",
    bg: "#EBF0FD",
    description: "100 Questions · 4 Subjects",
  },
  {
    year: 2024 as const,
    color: "#0891B2",
    bg: "#E0F7FA",
    description: "100 Questions · 4 Subjects",
  },
  {
    year: 2025 as const,
    color: "#7C3AED",
    bg: "#EDE9FE",
    description: "100 Questions · 4 Subjects",
  },
];

const MOCK_EXAMS = [
  {
    title: "MAH-MCA-CET Full Mock Test 1",
    questions: 150,
    duration: "90 min",
    difficulty: "Medium",
    tag: "Popular",
  },
  {
    title: "MAH-MCA-CET Full Mock Test 2",
    questions: 150,
    duration: "90 min",
    difficulty: "Hard",
    tag: "New",
  },
  {
    title: "MAH-MCA-CET Subject Test - Maths",
    questions: 40,
    duration: "40 min",
    difficulty: "Medium",
    tag: "",
  },
  {
    title: "MAH-MCA-CET Subject Test - CS",
    questions: 40,
    duration: "40 min",
    difficulty: "Hard",
    tag: "Recommended",
  },
];

const SYLLABUS_PROGRESS = [
  { subject: "Mathematics", completed: 8, total: 14, color: "#1E63D6" },
  { subject: "Computer Concepts", completed: 12, total: 18, color: "#0891B2" },
  { subject: "Logical Reasoning", completed: 5, total: 12, color: "#7C3AED" },
  { subject: "English", completed: 6, total: 10, color: "#D97706" },
];

interface DashboardProps {
  onNavigate: (page: Page, subject?: string) => void;
}

function useLocalSessions(): ExamSession[] {
  return useMemo(() => {
    try {
      const data = localStorage.getItem("cetprep_sessions");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }, []);
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const sessions = useLocalSessions();

  const stats = useMemo(() => {
    if (sessions.length === 0) return { attempted: 0, accuracy: 0, mocks: 0 };
    const totalQ = sessions.reduce((a, s) => a + s.totalQuestions, 0);
    const totalC = sessions.reduce((a, s) => a + s.correctAnswers, 0);
    const mocks = sessions.filter((s) => s.type === "mock").length;
    return {
      attempted: totalQ,
      accuracy: totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0,
      mocks,
    };
  }, [sessions]);

  const featuredResources = LOCAL_RESOURCES.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/30 blur-3xl blob" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-white/20 blur-3xl blob" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-teal-300/30 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              MAH-MCA-CET 2025 Preparation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Crack MAH-MCA-CET with
              <br />
              <span className="text-yellow-300">Confidence & Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Complete exam preparation system with 160+ practice questions,
              full mock tests, and performance analytics aligned with the
              official Shiksha.com syllabus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 font-semibold shadow-lg"
                onClick={() => onNavigate("mock")}
                data-ocid="hero.primary_button"
              >
                Start Full Mock Test
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
                onClick={() => onNavigate("practice")}
                data-ocid="hero.secondary_button"
              >
                Practice by Subject
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
                onClick={() => onNavigate("hard")}
                data-ocid="hero.hard_button"
              >
                ⚡ Hard MCQ Set
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-300/70 text-green-200 hover:bg-green-300/10"
                onClick={() => onNavigate("grammar")}
                data-ocid="hero.grammar_button"
              >
                <Languages className="w-4 h-4 mr-2" />
                Grammar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300/70 text-blue-200 hover:bg-blue-300/10"
                onClick={() => onNavigate("maths20")}
                data-ocid="hero.maths20_button"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Maths 2.0
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-300/70 text-red-200 hover:bg-red-300/10"
                onClick={() => onNavigate("youtube")}
                data-ocid="hero.youtube_button"
              >
                <Play className="w-4 h-4 mr-2" />
                YouTube Questions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300/70 text-orange-200 hover:bg-orange-300/10"
                onClick={() => onNavigate("binary")}
                data-ocid="hero.binary_button"
              >
                <Cpu className="w-4 h-4 mr-2" />
                Binary
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-300/70 text-yellow-200 hover:bg-yellow-300/10"
                onClick={() => onNavigate("pyq")}
                data-ocid="hero.pyq_button"
              >
                <FileText className="w-4 h-4 mr-2" />
                Previous Year Questions
              </Button>
            </div>
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">
                  {stats.attempted || "160+"}
                </div>
                <div className="text-xs text-blue-200">Questions</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">
                  {stats.accuracy ? `${stats.accuracy}%` : "4"}
                </div>
                <div className="text-xs text-blue-200">
                  {stats.accuracy ? "Accuracy" : "Subjects"}
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">{stats.mocks || "2"}</div>
                <div className="text-xs text-blue-200">Mock Tests</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Subject Categories */}
        <section data-ocid="subjects.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Subject Categories
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Practice topic-wise questions for each subject
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECT_CARDS.map((subj, idx) => (
              <motion.div
                key={subj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                data-ocid={`subjects.item.${idx + 1}`}
              >
                <Card className="border border-border hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: subj.bg }}
                    >
                      <subj.icon
                        className="w-6 h-6"
                        style={{ color: subj.color }}
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {subj.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {subj.tests} topics covered
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-border hover:bg-primary hover:text-white hover:border-primary transition-colors group-hover:border-primary"
                      onClick={() => onNavigate("practice", subj.id)}
                      data-ocid={`subjects.explore.button.${idx + 1}`}
                      style={{ borderColor: subj.color, color: subj.color }}
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grammar & English Section */}
        <section data-ocid="grammar.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Languages className="w-6 h-6 text-green-600" />
                Grammar & English Practice
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                100 MCQs covering Vocabulary, Grammar, Idioms, RC Strategy — MAH
                CET pattern
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("grammar")}
              data-ocid="grammar.view_all.button"
            >
              Open <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card
              className="border-2 hover:shadow-lg transition-all cursor-pointer group"
              style={{ borderColor: "#05966933" }}
              onClick={() => onNavigate("grammar")}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                    style={{ backgroundColor: "#D1FAE5", color: "#059669" }}
                  >
                    <Languages className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-xl mb-2">
                      Grammar & English — 100 MCQs
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      High-frequency vocabulary, grammar rules, common idioms
                      &amp; phrases, reading comprehension strategy, skim &amp;
                      scan technique, and RC passages — all predicted from MAH
                      CET exam pattern.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Vocabulary",
                        "Grammar",
                        "Idioms & Phrases",
                        "RC Strategy",
                        "Reading Comprehension",
                      ].map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: "#059669", color: "#059669" }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="font-semibold shrink-0"
                    style={{ backgroundColor: "#059669" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("grammar");
                    }}
                    data-ocid="grammar.start.button"
                  >
                    Start Practice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Maths 2.0 Section */}
        <section data-ocid="maths20.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Maths 2.0
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                100 MCQs covering Algebra, Calculus, Probability, Matrices,
                Trigonometry — MAH CET pattern
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("maths20")}
              data-ocid="maths20.view_all.button"
            >
              Open <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card
              className="border-2 hover:shadow-lg transition-all cursor-pointer group"
              style={{ borderColor: "#1E63D633" }}
              onClick={() => onNavigate("maths20")}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                    style={{ backgroundColor: "#EBF0FD", color: "#1E63D6" }}
                  >
                    <Calculator className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-xl mb-2">
                      Maths 2.0 — 100 MCQs
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Algebra, Calculus, Probability, Matrices &amp;
                      Trigonometry — all predicted from MAH CET exam pattern
                      with Vision Academy &amp; top MCA prep sources.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Algebra",
                        "Calculus",
                        "Probability",
                        "Matrices",
                        "Trigonometry",
                      ].map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: "#1E63D6", color: "#1E63D6" }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="font-semibold shrink-0"
                    style={{ backgroundColor: "#1E63D6" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("maths20");
                    }}
                    data-ocid="maths20.start.button"
                  >
                    Start Practice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* YouTube Questions Section */}
        <section data-ocid="youtube.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Play className="w-6 h-6 text-red-600" />
                YouTube Questions
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                100 MCQs inspired by Vision Academy &amp; CUET PG Adda — All 4
                MCA CET subjects
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("youtube")}
              data-ocid="youtube.view_all.button"
            >
              View All
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              className="border-2 hover:shadow-lg transition-all cursor-pointer"
              style={{ borderColor: "#EF444444" }}
              onClick={() => onNavigate("youtube")}
              data-ocid="youtube.card"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-red-100 dark:bg-red-950">
                    📺
                  </div>
                  <Badge
                    variant="outline"
                    className="border-red-500 text-red-600"
                  >
                    100 MCQs
                  </Badge>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">
                  YouTube Questions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  4 sub-boxes: Mathematics, Computer Science, Logical Reasoning,
                  English — questions inspired by Vision Academy &amp; CUET PG
                  Adda YouTube channels
                </p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: "Mathematics", color: "#1E63D6", emoji: "📐" },
                    { label: "CS", color: "#0891B2", emoji: "💻" },
                    { label: "Reasoning", color: "#7C3AED", emoji: "🧠" },
                    { label: "English", color: "#059669", emoji: "📚" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg p-2 text-center text-xs font-medium"
                      style={{
                        backgroundColor: `${s.color}15`,
                        color: s.color,
                      }}
                    >
                      <div className="text-lg mb-1">{s.emoji}</div>
                      {s.label}
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full font-semibold"
                  style={{ backgroundColor: "#DC2626" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("youtube");
                  }}
                  data-ocid="youtube.start.button"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start YouTube Practice
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Binary & Digital Logic Section */}
        <section data-ocid="binary.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Cpu className="w-6 h-6 text-red-600" />
                Binary & Digital Logic
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                165 MCQs — Hard Trap Questions, Binary Conversions, Arithmetic,
                Hex, 2's Complement &amp; Boolean Algebra
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("binary")}
              data-ocid="binary.view_all.button"
            >
              View All
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              className="border-2 hover:shadow-lg transition-all cursor-pointer"
              style={{ borderColor: "#DC262644" }}
              onClick={() => onNavigate("binary")}
              data-ocid="binary.card"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-red-100 dark:bg-red-950">
                    🔢
                  </div>
                  <Badge
                    variant="outline"
                    className="border-red-600 text-red-600"
                  >
                    165 MCQs
                  </Badge>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">
                  Binary & Digital Logic
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  165 MCQs — Hard Trap Questions, Binary Conversions,
                  Arithmetic, Hex, 2's Complement &amp; Boolean Algebra —
                  designed to expose weaknesses and build exam-day speed.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Trap MCQs",
                    "Conversions",
                    "Arithmetic",
                    "Hexadecimal",
                    "Boolean",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs"
                      style={{ borderColor: "#DC2626", color: "#DC2626" }}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-full font-semibold"
                  style={{ backgroundColor: "#DC2626" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("binary");
                  }}
                  data-ocid="binary.start.button"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  Start Binary Practice
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Previous Year Questions */}
        <section data-ocid="pyq.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Previous Year Questions
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Practice with actual MAH-MCA-CET papers from 2023 to 2025
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("pyq")}
              data-ocid="pyq.view_all.button"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PYQ_YEARS.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card
                  className="border-2 hover:shadow-lg transition-all cursor-pointer group"
                  style={{ borderColor: `${item.color}33` }}
                  onClick={() => onNavigate("pyq")}
                >
                  <CardContent className="p-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-xl font-bold"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      {item.year}
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      MAH-MCA-CET {item.year}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {["Math", "CS", "Reasoning", "English"].map((s) => (
                        <Badge
                          key={s}
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: item.color, color: item.color }}
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      className="w-full font-semibold group-hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: item.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate("pyq");
                      }}
                      data-ocid={`pyq.start.button.${idx + 1}`}
                    >
                      Start {item.year} Paper
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mock Prediction Tests */}
        <section data-ocid="mock_prediction.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Mock Prediction Tests
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                3 full-length mocks with 150 unique questions each, covering all
                MCA CET topics
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("mock-prediction")}
              data-ocid="mock_prediction.view_all.button"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {([1, 2, 3] as const).map((id, idx) => {
              const colors = [
                { color: "#1E63D6", bg: "#EBF0FD" },
                { color: "#7C3AED", bg: "#EDE9FE" },
                { color: "#D97706", bg: "#FEF3C7" },
              ];
              const { color, bg } = colors[idx];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card
                    className="border-2 hover:shadow-lg transition-all cursor-pointer group"
                    style={{ borderColor: `${color}33` }}
                    onClick={() => onNavigate("mock-prediction")}
                  >
                    <CardContent className="p-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-lg font-bold"
                        style={{ backgroundColor: bg, color }}
                      >
                        M{id}
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-1">
                        Mock {id} Prediction
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        150 Questions · 4 Subjects · Exam Level
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {["Math", "CS", "Reasoning", "English"].map((s) => (
                          <Badge
                            key={s}
                            variant="outline"
                            className="text-xs"
                            style={{ borderColor: color, color }}
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className="w-full font-semibold group-hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate("mock-prediction");
                        }}
                        data-ocid={`mock_prediction.start.button.${id}`}
                      >
                        Start Mock {id}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Mock Exams + Syllabus Tracker */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mock Exams */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Featured Mock Exams
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("mock")}
                  data-ocid="mocks.view_all.button"
                >
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {MOCK_EXAMS.map((exam, idx) => (
                  <Card
                    key={exam.title}
                    className="border border-border hover:shadow-sm transition-shadow"
                    data-ocid={`mocks.item.${idx + 1}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-foreground text-sm">
                              {exam.title}
                            </h3>
                            {exam.tag && (
                              <Badge variant="secondary" className="text-xs">
                                {exam.tag}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              {exam.questions} Q
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {exam.duration}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {exam.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => onNavigate("mock")}
                          data-ocid={`mocks.start.button.${idx + 1}`}
                        >
                          Start
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Syllabus Tracker */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Syllabus Tracker
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("syllabus")}
                  data-ocid="syllabus.view_all.button"
                >
                  View <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <Card className="border border-border">
                <CardContent className="p-5 space-y-4">
                  {SYLLABUS_PROGRESS.map((s) => {
                    const pct = Math.round((s.completed / s.total) * 100);
                    return (
                      <div key={s.subject}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-foreground">
                            {s.subject}
                          </span>
                          <span className="text-muted-foreground">
                            {s.completed}/{s.total}
                          </span>
                        </div>
                        <Progress value={pct} className="h-2" />
                        <div className="text-xs text-muted-foreground mt-1">
                          {pct}% complete
                        </div>
                      </div>
                    );
                  })}
                  <Button
                    className="w-full mt-2"
                    variant="outline"
                    onClick={() => onNavigate("syllabus")}
                    data-ocid="syllabus.open_modal_button"
                  >
                    Update Progress
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance + Resources */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Snapshot */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Performance Analytics
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("performance")}
                  data-ocid="performance.view_all.button"
                >
                  Full Report <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  {sessions.length === 0 ? (
                    <div
                      className="text-center py-8"
                      data-ocid="performance.empty_state"
                    >
                      <TrendingUp className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                      <p className="text-muted-foreground font-medium">
                        No exams taken yet
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Take a practice test or mock exam to see your analytics
                      </p>
                      <Button
                        className="mt-4"
                        onClick={() => onNavigate("practice")}
                        data-ocid="performance.start.primary_button"
                      >
                        Start Practicing
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">
                          {stats.attempted}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Questions Attempted
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">
                          {stats.accuracy}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Accuracy
                        </div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">
                          {stats.mocks}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Mock Tests
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Latest Resources */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Latest Resources
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("resources")}
                  data-ocid="resources.view_all.button"
                >
                  All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {featuredResources.map((r, idx) => (
                  <Card
                    key={r.id}
                    className="border border-border hover:shadow-sm transition-shadow cursor-pointer"
                    data-ocid={`resources.item.${idx + 1}`}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{r.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {r.title}
                          </p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {r.description.slice(0, 60)}...
                          </p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {r.type}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
