import { BookOpen } from "lucide-react";
import { SiInstagram, SiTelegram, SiYoutube } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-[#2B2F36] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-lg">CETPrepPro</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              India's most comprehensive MAH-MCA-CET exam preparation platform.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Exam Prep */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">
              Exam Prep
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Practice Tests
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Mock Exams
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Syllabus
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Performance
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">
              Subjects
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span>Mathematics</span>
              </li>
              <li>
                <span>Computer Concepts</span>
              </li>
              <li>
                <span>Logical Reasoning</span>
              </li>
              <li>
                <span>English Comprehension</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span>Study Notes</span>
              </li>
              <li>
                <span>Formula Sheets</span>
              </li>
              <li>
                <span>Video Lectures</span>
              </li>
              <li>
                <span>Exam Tips</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
