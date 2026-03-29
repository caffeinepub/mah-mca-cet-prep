import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Page } from "../types/exam";

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "Dashboard", page: "dashboard" },
  { label: "Practice Tests", page: "practice" },
  { label: "Mock Exams", page: "mock" },
  { label: "Syllabus", page: "syllabus" },
  { label: "Resources", page: "resources" },
  { label: "Performance", page: "performance" },
];

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            className="flex items-center gap-2 font-bold text-xl text-primary"
            onClick={() => onNavigate("dashboard")}
            data-ocid="header.link"
          >
            <BookOpen className="w-6 h-6" />
            <span>CETPrepPro</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.page}
                onClick={() => onNavigate(item.page)}
                data-ocid={`nav.${item.page}.link`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex"
              onClick={() => onNavigate("practice")}
              data-ocid="header.primary_button"
            >
              Get Started
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground/70"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="header.toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setMenuOpen(false);
              }}
              data-ocid={`mobile.nav.${item.page}.link`}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium mt-1 transition-colors ${
                currentPage === item.page
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            className="w-full mt-3"
            onClick={() => {
              onNavigate("practice");
              setMenuOpen(false);
            }}
            data-ocid="mobile.header.primary_button"
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
