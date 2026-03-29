import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { GrammarPractice } from "./pages/GrammarPractice";
import { HardMCQSet } from "./pages/HardMCQSet";
import { Maths20Practice } from "./pages/Maths20Practice";
import { MockExam } from "./pages/MockExam";
import { MockPredictionTests } from "./pages/MockPredictionTests";
import { Performance } from "./pages/Performance";
import { PracticeTest } from "./pages/PracticeTest";
import { PreviousYearQuestions } from "./pages/PreviousYearQuestions";
import { Resources } from "./pages/Resources";
import { Syllabus } from "./pages/Syllabus";
import type { Page } from "./types/exam";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000 },
  },
});

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [practiceSubject, setPracticeSubject] = useState<string | undefined>(
    undefined,
  );

  const handleNavigate = (page: Page, subject?: string) => {
    setCurrentPage(page);
    if (page === "practice") {
      setPracticeSubject(subject);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {currentPage === "dashboard" && (
          <Dashboard onNavigate={handleNavigate} />
        )}
        {currentPage === "practice" && (
          <PracticeTest initialSubject={practiceSubject} />
        )}
        {currentPage === "mock" && <MockExam />}
        {currentPage === "syllabus" && <Syllabus />}
        {currentPage === "resources" && <Resources />}
        {currentPage === "hard" && <HardMCQSet />}
        {currentPage === "pyq" && (
          <PreviousYearQuestions onBack={() => handleNavigate("dashboard")} />
        )}
        {currentPage === "performance" && (
          <Performance onNavigate={handleNavigate} />
        )}
        {currentPage === "mock-prediction" && (
          <MockPredictionTests onBack={() => handleNavigate("dashboard")} />
        )}
        {currentPage === "grammar" && (
          <GrammarPractice onBack={() => handleNavigate("dashboard")} />
        )}
        {currentPage === "maths20" && (
          <Maths20Practice onBack={() => handleNavigate("dashboard")} />
        )}
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
