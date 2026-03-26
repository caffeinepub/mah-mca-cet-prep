export interface SyllabusTopic {
  name: string;
  subject: string;
}

export interface SyllabusSubject {
  id: string;
  name: string;
  color: string;
  topics: SyllabusTopic[];
}

export const SYLLABUS_DATA: SyllabusSubject[] = [
  {
    id: "math",
    name: "Mathematics",
    color: "#1E63D6",
    topics: [
      { name: "Sets, Relations and Functions", subject: "math" },
      { name: "Logarithms", subject: "math" },
      { name: "Permutations and Combinations", subject: "math" },
      { name: "Probability", subject: "math" },
      { name: "Polynomials and Quadratic Equations", subject: "math" },
      { name: "Binomial Theorem", subject: "math" },
      { name: "Matrices and Determinants", subject: "math" },
      { name: "Coordinate Geometry", subject: "math" },
      { name: "Trigonometry", subject: "math" },
      { name: "Limits and Continuity", subject: "math" },
      { name: "Differentiation", subject: "math" },
      { name: "Integration", subject: "math" },
      { name: "Statistics", subject: "math" },
      { name: "Mathematical Logic", subject: "math" },
    ],
  },
  {
    id: "computerConcepts",
    name: "Computer Concepts",
    color: "#0891B2",
    topics: [
      {
        name: "Number Systems (Binary, Octal, Hex)",
        subject: "computerConcepts",
      },
      { name: "Data Representation", subject: "computerConcepts" },
      {
        name: "Computer Architecture (ALU, CPU, Memory)",
        subject: "computerConcepts",
      },
      { name: "Operating Systems Concepts", subject: "computerConcepts" },
      { name: "Process Management", subject: "computerConcepts" },
      { name: "Memory Management", subject: "computerConcepts" },
      { name: "Arrays and Strings", subject: "computerConcepts" },
      { name: "Stack and Queue", subject: "computerConcepts" },
      { name: "Trees and Graphs", subject: "computerConcepts" },
      { name: "Searching and Sorting Algorithms", subject: "computerConcepts" },
      { name: "Algorithm Complexity (Big-O)", subject: "computerConcepts" },
      { name: "DBMS and ER Model", subject: "computerConcepts" },
      { name: "SQL and Normalization", subject: "computerConcepts" },
      { name: "Computer Networks and OSI Model", subject: "computerConcepts" },
      { name: "TCP/IP and Network Protocols", subject: "computerConcepts" },
      { name: "C and C++ Programming Basics", subject: "computerConcepts" },
      { name: "Object-Oriented Programming", subject: "computerConcepts" },
      { name: "Software Engineering", subject: "computerConcepts" },
    ],
  },
  {
    id: "logicalReasoning",
    name: "Logical Reasoning",
    color: "#7C3AED",
    topics: [
      {
        name: "Series Completion (Number & Letter)",
        subject: "logicalReasoning",
      },
      { name: "Coding and Decoding", subject: "logicalReasoning" },
      { name: "Blood Relations", subject: "logicalReasoning" },
      { name: "Direction Sense Test", subject: "logicalReasoning" },
      { name: "Syllogisms", subject: "logicalReasoning" },
      { name: "Analogies (Verbal & Non-verbal)", subject: "logicalReasoning" },
      { name: "Data Sufficiency", subject: "logicalReasoning" },
      { name: "Visual and Pattern Reasoning", subject: "logicalReasoning" },
      { name: "Seating Arrangements", subject: "logicalReasoning" },
      { name: "Puzzles and Logical Problems", subject: "logicalReasoning" },
      { name: "Statement and Conclusions", subject: "logicalReasoning" },
      { name: "Statement and Assumptions", subject: "logicalReasoning" },
    ],
  },
  {
    id: "english",
    name: "English Comprehension",
    color: "#D97706",
    topics: [
      { name: "Reading Comprehension", subject: "english" },
      { name: "Fill in the Blanks", subject: "english" },
      { name: "Synonyms and Antonyms", subject: "english" },
      { name: "Sentence Correction", subject: "english" },
      { name: "Error Detection", subject: "english" },
      { name: "Para Jumbles", subject: "english" },
      { name: "Idioms and Phrases", subject: "english" },
      { name: "Vocabulary and Word Meanings", subject: "english" },
      { name: "One Word Substitution", subject: "english" },
      { name: "Active and Passive Voice", subject: "english" },
    ],
  },
];
