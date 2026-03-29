import type { LocalQuestion } from "../data/questions";

export type Page =
  | "dashboard"
  | "practice"
  | "mock"
  | "syllabus"
  | "resources"
  | "performance"
  | "hard"
  | "pyq"
  | "mock-prediction"
  | "grammar";

export interface ExamSession {
  id: string;
  type: "practice" | "mock";
  subject?: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // seconds
  score: number;
  subjectBreakdown?: Record<string, { total: number; correct: number }>;
}

export interface UserAnswer {
  questionId: number;
  answerIndex: number;
  flagged: boolean;
}

export interface ExamState {
  questions: LocalQuestion[];
  answers: Record<number, UserAnswer>;
  currentIndex: number;
  startTime: number;
  isSubmitted: boolean;
  sessionType: "practice" | "mock";
  selectedSubject?: string;
}
