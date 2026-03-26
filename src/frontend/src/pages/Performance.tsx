import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Clock, Target, TrendingUp, Trophy } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ExamSession, Page } from "../types/exam";

const SUBJECT_LABELS: Record<string, string> = {
  math: "Mathematics",
  computerConcepts: "Computer Concepts",
  logicalReasoning: "Logical Reasoning",
  english: "English",
};

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}m ${s}s`;
}

interface PerformanceProps {
  onNavigate: (page: Page) => void;
}

export function Performance({ onNavigate }: PerformanceProps) {
  const sessions = useMemo<ExamSession[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("cetprep_sessions") || "[]");
    } catch {
      return [];
    }
  }, []);

  const stats = useMemo(() => {
    if (sessions.length === 0) return null;
    const totalQ = sessions.reduce((a, s) => a + s.totalQuestions, 0);
    const totalC = sessions.reduce((a, s) => a + s.correctAnswers, 0);
    const mocks = sessions.filter((s) => s.type === "mock").length;
    const bestScore = Math.max(...sessions.map((s) => s.score));
    const avgScore = Math.round(
      sessions.reduce((a, s) => a + s.score, 0) / sessions.length,
    );
    return {
      totalQ,
      totalC,
      mocks,
      bestScore,
      avgScore,
      accuracy: Math.round((totalC / totalQ) * 100),
    };
  }, [sessions]);

  const scoreHistory = useMemo(() => {
    return sessions.map((s, i) => ({ name: `Test ${i + 1}`, score: s.score }));
  }, [sessions]);

  const subjectAccuracy = useMemo(() => {
    const subjects = Object.keys(SUBJECT_LABELS);
    return subjects
      .map((s) => {
        let total = 0;
        let correct = 0;
        for (const session of sessions) {
          if (session.subjectBreakdown?.[s]) {
            total += session.subjectBreakdown[s].total;
            correct += session.subjectBreakdown[s].correct;
          } else if (session.subject === s) {
            total += session.totalQuestions;
            correct += session.correctAnswers;
          }
        }
        return {
          subject: SUBJECT_LABELS[s],
          accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
          questions: total,
        };
      })
      .filter((s) => s.questions > 0);
  }, [sessions]);

  if (sessions.length === 0) {
    return (
      <div
        className="max-w-3xl mx-auto px-4 py-20 text-center"
        data-ocid="performance.empty_state"
      >
        <BarChart2 className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">No Data Yet</h2>
        <p className="text-muted-foreground mb-6">
          Take practice tests or mock exams to see your performance analytics
          here.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={() => onNavigate("practice")}
            data-ocid="performance.practice.primary_button"
          >
            Start Practice
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate("mock")}
            data-ocid="performance.mock.secondary_button"
          >
            Take Mock Exam
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-10"
      data-ocid="performance.section"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Performance Analytics
        </h1>
        <p className="text-muted-foreground mt-1">
          Your MAH-MCA-CET preparation insights
        </p>
      </div>

      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border border-border">
            <CardContent className="p-5">
              <Trophy className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {stats.avgScore}%
              </div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-5">
              <Target className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {stats.accuracy}%
              </div>
              <div className="text-sm text-muted-foreground">
                Overall Accuracy
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-5">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {stats.bestScore}%
              </div>
              <div className="text-sm text-muted-foreground">Best Score</div>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-5">
              <Clock className="w-8 h-8 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {stats.totalQ}
              </div>
              <div className="text-sm text-muted-foreground">
                Questions Attempted
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Score History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={scoreHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v: number) => [`${v}%`, "Score"]} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#1E63D6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {subjectAccuracy.length > 0 && (
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Subject-wise Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={subjectAccuracy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(v: number) => [`${v}%`, "Accuracy"]} />
                  <Bar
                    dataKey="accuracy"
                    fill="#1E63D6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="border border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Session History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...sessions].reverse().map((s, idx) => (
              <div
                key={s.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
                data-ocid={`performance.session.item.${idx + 1}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-8 rounded-full ${s.type === "mock" ? "bg-primary" : "bg-green-500"}`}
                  />
                  <div>
                    <p className="font-medium text-sm text-foreground">
                      {s.type === "mock"
                        ? "Mock Exam"
                        : `Practice - ${s.subject ? SUBJECT_LABELS[s.subject] || s.subject : "Mixed"}`}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(s.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      &bull; {formatTime(s.timeSpent)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-muted-foreground">
                    {s.correctAnswers}/{s.totalQuestions} correct
                  </p>
                  <Badge
                    className={`${s.score >= 70 ? "bg-green-100 text-green-700" : s.score >= 50 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"} border-0`}
                  >
                    {s.score}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
