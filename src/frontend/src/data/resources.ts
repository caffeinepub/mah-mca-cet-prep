export interface LocalResource {
  id: number;
  subject: string;
  title: string;
  description: string;
  type: "notes" | "formula" | "tips" | "video" | "practice";
  url: string;
  icon: string;
}

export const LOCAL_RESOURCES: LocalResource[] = [
  // Mathematics
  {
    id: 1,
    subject: "math",
    title: "Complete Maths Formula Sheet",
    description:
      "All formulas for MAH-MCA-CET: Trigonometry, Algebra, Calculus, Probability, Matrices and more.",
    type: "formula",
    url: "https://www.mathsisfun.com/algebra/index.html",
    icon: "📐",
  },
  {
    id: 2,
    subject: "math",
    title: "Permutations & Combinations Notes",
    description:
      "Comprehensive notes on P&C with 50+ solved examples covering all MAH-MCA-CET patterns.",
    type: "notes",
    url: "https://www.geeksforgeeks.org/permutation-and-combination/",
    icon: "📊",
  },
  {
    id: 3,
    subject: "math",
    title: "Calculus Quick Revision Guide",
    description:
      "Important theorems, differentiation, integration shortcuts and exam tips for last-minute revision.",
    type: "tips",
    url: "https://www.mathsisfun.com/calculus/index.html",
    icon: "📈",
  },
  {
    id: 4,
    subject: "math",
    title: "Probability Problem Set",
    description:
      "100 practice problems on probability ranging from easy to hard with detailed solutions.",
    type: "practice",
    url: "https://www.geeksforgeeks.org/probability-gq/",
    icon: "🎲",
  },
  {
    id: 5,
    subject: "math",
    title: "Matrices & Determinants Video Series",
    description:
      "Step-by-step video explanations by MCA GYAN channel covering all matrix operations.",
    type: "video",
    url: "https://www.youtube.com/results?search_query=matrices+determinants+MCA+CET",
    icon: "🎥",
  },
  {
    id: 22,
    subject: "math",
    title: "Trigonometry Formulas & Practice",
    description:
      "All trig identities, inverse functions, and MAH-MCA-CET level practice problems.",
    type: "formula",
    url: "https://www.mathsisfun.com/algebra/trigonometry.html",
    icon: "📐",
  },
  // Computer Concepts
  {
    id: 6,
    subject: "computerConcepts",
    title: "Data Structures Complete Notes",
    description:
      "Arrays, Stacks, Queues, Trees, Graphs - comprehensive notes with diagrams and code examples.",
    type: "notes",
    url: "https://www.geeksforgeeks.org/data-structures/",
    icon: "🗂️",
  },
  {
    id: 7,
    subject: "computerConcepts",
    title: "DBMS & SQL Cheat Sheet",
    description:
      "Quick reference for SQL commands, normalization rules, ER diagrams and relational algebra.",
    type: "formula",
    url: "https://www.geeksforgeeks.org/dbms/",
    icon: "🗄️",
  },
  {
    id: 8,
    subject: "computerConcepts",
    title: "Operating System Key Concepts",
    description:
      "Top Operating System questions for MAH-MCA-CET: scheduling, memory management, deadlocks.",
    type: "tips",
    url: "https://www.geeksforgeeks.org/operating-systems/",
    icon: "💻",
  },
  {
    id: 9,
    subject: "computerConcepts",
    title: "Number Systems Conversion Guide",
    description:
      "Binary, Octal, Hexadecimal conversion methods with tricks for fast calculation.",
    type: "formula",
    url: "https://www.geeksforgeeks.org/number-system-and-base-conversions/",
    icon: "🔢",
  },
  {
    id: 10,
    subject: "computerConcepts",
    title: "Computer Networks OSI & TCP/IP",
    description:
      "Complete guide to OSI model layers, TCP/IP protocols, routing and network security.",
    type: "notes",
    url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    icon: "🌐",
  },
  {
    id: 11,
    subject: "computerConcepts",
    title: "Algorithm Complexity Analysis",
    description:
      "Big-O notation, time and space complexity analysis with real exam question patterns.",
    type: "tips",
    url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
    icon: "⚡",
  },
  {
    id: 23,
    subject: "computerConcepts",
    title: "C Programming Fundamentals",
    description:
      "Core C programming concepts: pointers, arrays, functions, structures tested in MAH-MCA-CET.",
    type: "notes",
    url: "https://www.geeksforgeeks.org/c-programming-language/",
    icon: "💾",
  },
  // Logical Reasoning
  {
    id: 12,
    subject: "logicalReasoning",
    title: "Logical Reasoning Strategy Guide",
    description:
      "Proven strategies to solve LR questions in under 2 minutes each with shortcut methods.",
    type: "tips",
    url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
    icon: "🧠",
  },
  {
    id: 13,
    subject: "logicalReasoning",
    title: "Syllogism Shortcut Methods",
    description:
      "Venn diagram approach and shortcut rules to solve all types of syllogisms quickly.",
    type: "formula",
    url: "https://www.indiabix.com/logical-reasoning/syllogism/",
    icon: "🔮",
  },
  {
    id: 14,
    subject: "logicalReasoning",
    title: "Seating Arrangement Practice Set",
    description:
      "50 seating arrangement problems (linear, circular) with step-by-step solutions.",
    type: "practice",
    url: "https://www.indiabix.com/logical-reasoning/seating-arrangement/",
    icon: "💺",
  },
  {
    id: 15,
    subject: "logicalReasoning",
    title: "Coding-Decoding Pattern Guide",
    description:
      "All types of coding patterns with examples: letter shift, reverse, position-based.",
    type: "notes",
    url: "https://www.indiabix.com/logical-reasoning/coding-decoding/",
    icon: "🔐",
  },
  {
    id: 16,
    subject: "logicalReasoning",
    title: "Blood Relations Tricks",
    description:
      "Family tree approach and shortcut symbols to solve blood relation problems instantly.",
    type: "tips",
    url: "https://www.indiabix.com/logical-reasoning/blood-relation-test/",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: 24,
    subject: "logicalReasoning",
    title: "Number Series & Analogies",
    description:
      "Patterns, missing numbers, analogies and classification problems for MAH-MCA-CET.",
    type: "practice",
    url: "https://www.indiabix.com/logical-reasoning/number-series/",
    icon: "🔢",
  },
  // English
  {
    id: 17,
    subject: "english",
    title: "High-Frequency Vocabulary for MCA-CET",
    description:
      "500 most important words for MAH-MCA-CET with meanings, synonyms, antonyms and usage.",
    type: "notes",
    url: "https://www.indiabix.com/verbal-ability/synonyms/",
    icon: "📚",
  },
  {
    id: 18,
    subject: "english",
    title: "Grammar Rules Quick Reference",
    description:
      "Subject-verb agreement, tenses, articles, prepositions and common error types with examples.",
    type: "formula",
    url: "https://www.indiabix.com/verbal-ability/spotting-errors/",
    icon: "✏️",
  },
  {
    id: 19,
    subject: "english",
    title: "Reading Comprehension Strategy",
    description:
      "Skim & Scan technique, para identification methods and answer mapping for RC passages.",
    type: "tips",
    url: "https://www.indiabix.com/verbal-ability/comprehension/",
    icon: "👁️",
  },
  {
    id: 20,
    subject: "english",
    title: "Common Idioms and Phrases List",
    description:
      "200+ idioms and phrases frequently tested in MAH-MCA-CET with meanings and example sentences.",
    type: "notes",
    url: "https://www.indiabix.com/verbal-ability/idioms-and-phrases/",
    icon: "💬",
  },
  {
    id: 21,
    subject: "english",
    title: "Para Jumbles Practice Set",
    description:
      "40 para jumble exercises with increasing difficulty, all based on actual exam patterns.",
    type: "practice",
    url: "https://www.indiabix.com/verbal-ability/sentence-arrangement/",
    icon: "🔀",
  },
];
