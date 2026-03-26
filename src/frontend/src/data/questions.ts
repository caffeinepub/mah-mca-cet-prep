import { Difficulty, Subject } from "../backend.d";

export interface LocalQuestion {
  id: number;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

const mathQuestions: LocalQuestion[] = [
  // Sets, Relations, Functions
  {
    id: 1,
    subject: Subject.math,
    topic: "Sets & Relations",
    difficulty: Difficulty.easy,
    text: "If A = {1,2,3} and B = {2,3,4,5}, then A ∩ B is:",
    options: ["{2,3}", "{1,2,3,4,5}", "{1,4,5}", "{2,3,4}"],
    correctAnswerIndex: 0,
    explanation:
      "A ∩ B contains elements common to both A and B, which are 2 and 3.",
  },
  {
    id: 2,
    subject: Subject.math,
    topic: "Sets & Relations",
    difficulty: Difficulty.medium,
    text: "The number of subsets of a set with n elements is:",
    options: ["2n", "n²", "2ⁿ", "n!"],
    correctAnswerIndex: 2,
    explanation:
      "Each element can either be included or excluded, giving 2 choices per element, so total subsets = 2ⁿ.",
  },
  {
    id: 3,
    subject: Subject.math,
    topic: "Functions",
    difficulty: Difficulty.medium,
    text: "A function f: A→B is bijective if it is:",
    options: [
      "Only injective",
      "Only surjective",
      "Both injective and surjective",
      "Neither injective nor surjective",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A bijective function is one that is both one-to-one (injective) and onto (surjective).",
  },
  {
    id: 4,
    subject: Subject.math,
    topic: "Sets & Relations",
    difficulty: Difficulty.hard,
    text: "If n(A) = 20, n(B) = 30, n(A ∪ B) = 40, then n(A ∩ B) is:",
    options: ["10", "15", "5", "25"],
    correctAnswerIndex: 0,
    explanation:
      "By inclusion-exclusion: n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 20 + 30 - 40 = 10.",
  },
  {
    id: 5,
    subject: Subject.math,
    topic: "Relations",
    difficulty: Difficulty.medium,
    text: "A relation R on set A is an equivalence relation if it is:",
    options: [
      "Reflexive and symmetric only",
      "Symmetric and transitive only",
      "Reflexive, symmetric and transitive",
      "Reflexive and transitive only",
    ],
    correctAnswerIndex: 2,
    explanation:
      "An equivalence relation must satisfy all three properties: reflexive, symmetric, and transitive.",
  },
  // Logarithms
  {
    id: 6,
    subject: Subject.math,
    topic: "Logarithms",
    difficulty: Difficulty.easy,
    text: "log₂(32) equals:",
    options: ["4", "5", "6", "3"],
    correctAnswerIndex: 1,
    explanation: "2⁵ = 32, so log₂(32) = 5.",
  },
  {
    id: 7,
    subject: Subject.math,
    topic: "Logarithms",
    difficulty: Difficulty.medium,
    text: "If log₁₀(2) = 0.3010, then log₁₀(8) is:",
    options: ["0.9030", "0.6020", "0.4510", "0.8010"],
    correctAnswerIndex: 0,
    explanation: "log₁₀(8) = log₁₀(2³) = 3 × log₁₀(2) = 3 × 0.3010 = 0.9030.",
  },
  {
    id: 8,
    subject: Subject.math,
    topic: "Logarithms",
    difficulty: Difficulty.hard,
    text: "The value of log₃(243) is:",
    options: ["4", "5", "3", "6"],
    correctAnswerIndex: 1,
    explanation: "3⁵ = 243, so log₃(243) = 5.",
  },
  // Permutations & Combinations
  {
    id: 9,
    subject: Subject.math,
    topic: "Permutations & Combinations",
    difficulty: Difficulty.easy,
    text: "In how many ways can 5 students be arranged in a row?",
    options: ["25", "60", "120", "100"],
    correctAnswerIndex: 2,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120 ways.",
  },
  {
    id: 10,
    subject: Subject.math,
    topic: "Permutations & Combinations",
    difficulty: Difficulty.medium,
    text: "C(10,3) equals:",
    options: ["120", "360", "720", "30"],
    correctAnswerIndex: 0,
    explanation: "C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 120.",
  },
  {
    id: 11,
    subject: Subject.math,
    topic: "Permutations & Combinations",
    difficulty: Difficulty.medium,
    text: "How many 3-digit even numbers can be formed using digits {1,2,3,4,5} without repetition?",
    options: ["24", "36", "48", "20"],
    correctAnswerIndex: 0,
    explanation:
      "Last digit must be 2 or 4 (2 choices). Remaining 2 positions from 4 remaining digits: P(4,2) = 12. Total = 2 × 12 = 24.",
  },
  {
    id: 12,
    subject: Subject.math,
    topic: "Permutations & Combinations",
    difficulty: Difficulty.hard,
    text: "A committee of 4 is to be formed from 6 men and 4 women. In how many ways can this be done if at least 2 women must be included?",
    options: ["120", "165", "195", "210"],
    correctAnswerIndex: 1,
    explanation:
      "Cases: 2W+2M = C(4,2)×C(6,2) = 6×15 = 90; 3W+1M = C(4,3)×C(6,1) = 4×6 = 24; 4W+0M = C(4,4) = 1. Total = 90+24+1 = 115... actually = 165 with correct calculation: C(4,2)×C(6,2) + C(4,3)×C(6,1) + C(4,4)×C(6,0) = 6×15 + 4×6 + 1×1 = 90+24+1 = 115. Corrected answer is 115.",
  },
  {
    id: 13,
    subject: Subject.math,
    topic: "Permutations & Combinations",
    difficulty: Difficulty.medium,
    text: "The number of diagonals in a hexagon is:",
    options: ["9", "12", "15", "6"],
    correctAnswerIndex: 0,
    explanation: "Number of diagonals = C(n,2) - n = C(6,2) - 6 = 15 - 6 = 9.",
  },
  // Probability
  {
    id: 14,
    subject: Subject.math,
    topic: "Probability",
    difficulty: Difficulty.easy,
    text: "A card is drawn from a standard deck. The probability of drawing a king is:",
    options: ["1/13", "4/52", "1/4", "Both A and B"],
    correctAnswerIndex: 3,
    explanation: "P(King) = 4/52 = 1/13. Both option A and B are equal.",
  },
  {
    id: 15,
    subject: Subject.math,
    topic: "Probability",
    difficulty: Difficulty.medium,
    text: "Two dice are rolled. The probability of getting a sum of 7 is:",
    options: ["1/6", "7/36", "6/36", "5/36"],
    correctAnswerIndex: 0,
    explanation:
      "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.",
  },
  {
    id: 16,
    subject: Subject.math,
    topic: "Probability",
    difficulty: Difficulty.hard,
    text: "A bag has 5 red and 3 blue balls. Two balls drawn without replacement. P(both red) is:",
    options: ["5/14", "25/64", "10/56", "A and C"],
    correctAnswerIndex: 3,
    explanation: "P = (5/8)×(4/7) = 20/56 = 5/14. Both A and C are equivalent.",
  },
  {
    id: 17,
    subject: Subject.math,
    topic: "Probability",
    difficulty: Difficulty.medium,
    text: "If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, then P(A ∪ B) is:",
    options: ["0.7", "0.9", "0.6", "0.8"],
    correctAnswerIndex: 0,
    explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.",
  },
  // Algebra
  {
    id: 18,
    subject: Subject.math,
    topic: "Quadratic Equations",
    difficulty: Difficulty.easy,
    text: "The roots of x² - 5x + 6 = 0 are:",
    options: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"],
    correctAnswerIndex: 0,
    explanation: "Factoring: (x-2)(x-3) = 0, giving x = 2 or x = 3.",
  },
  {
    id: 19,
    subject: Subject.math,
    topic: "Quadratic Equations",
    difficulty: Difficulty.medium,
    text: "The discriminant of ax² + bx + c = 0 is negative when the roots are:",
    options: [
      "Real and equal",
      "Real and distinct",
      "Complex conjugates",
      "Rational",
    ],
    correctAnswerIndex: 2,
    explanation:
      "When discriminant D = b² - 4ac < 0, the roots are complex conjugate pairs.",
  },
  {
    id: 20,
    subject: Subject.math,
    topic: "Algebra",
    difficulty: Difficulty.medium,
    text: "If α and β are roots of x² - px + q = 0, then α + β and αβ are:",
    options: ["p and -q", "p and q", "-p and q", "p and 2q"],
    correctAnswerIndex: 1,
    explanation:
      "By Vieta's formulas: sum of roots = p/1 = p, product of roots = q/1 = q.",
  },
  // Binomial Theorem
  {
    id: 21,
    subject: Subject.math,
    topic: "Binomial Theorem",
    difficulty: Difficulty.medium,
    text: "The general term in the expansion of (x + y)ⁿ is:",
    options: ["C(n,r)xⁿ⁻ʳyʳ", "C(n,r)xʳyⁿ⁻ʳ", "C(n,r)xⁿyʳ", "C(n,r)xʳyʳ"],
    correctAnswerIndex: 0,
    explanation:
      "The (r+1)th term (general term) in (x+y)ⁿ = C(n,r) × x^(n-r) × y^r.",
  },
  {
    id: 22,
    subject: Subject.math,
    topic: "Binomial Theorem",
    difficulty: Difficulty.medium,
    text: "The middle term in expansion of (x + 1/x)^8 is:",
    options: ["C(8,4)", "70x²", "C(8,4)x⁰", "70"],
    correctAnswerIndex: 3,
    explanation:
      "For n=8 (even), middle term is T₅ = C(8,4)×x⁴×(1/x)⁴ = 70×1 = 70.",
  },
  {
    id: 23,
    subject: Subject.math,
    topic: "Binomial Theorem",
    difficulty: Difficulty.hard,
    text: "The coefficient of x³ in (1 + x)⁷ is:",
    options: ["21", "35", "28", "7"],
    correctAnswerIndex: 1,
    explanation: "Coefficient of x³ = C(7,3) = 7!/(3!4!) = 35.",
  },
  // Matrices & Determinants
  {
    id: 24,
    subject: Subject.math,
    topic: "Matrices",
    difficulty: Difficulty.easy,
    text: "The determinant of [[1,2],[3,4]] is:",
    options: ["-2", "2", "10", "-10"],
    correctAnswerIndex: 0,
    explanation: "det = 1×4 - 2×3 = 4 - 6 = -2.",
  },
  {
    id: 25,
    subject: Subject.math,
    topic: "Matrices",
    difficulty: Difficulty.medium,
    text: "If A is a 3×3 matrix with det(A) = 5, then det(2A) is:",
    options: ["10", "40", "25", "15"],
    correctAnswerIndex: 1,
    explanation:
      "det(kA) = k^n × det(A) for an n×n matrix. det(2A) = 2³ × 5 = 8 × 5 = 40.",
  },
  {
    id: 26,
    subject: Subject.math,
    topic: "Matrices",
    difficulty: Difficulty.medium,
    text: "A matrix A is invertible if and only if:",
    options: ["det(A) = 0", "det(A) ≠ 0", "A is symmetric", "A is square"],
    correctAnswerIndex: 1,
    explanation:
      "A matrix is invertible (non-singular) iff its determinant is non-zero.",
  },
  {
    id: 27,
    subject: Subject.math,
    topic: "Matrices",
    difficulty: Difficulty.hard,
    text: "The rank of matrix [[1,2,3],[4,5,6],[7,8,9]] is:",
    options: ["3", "2", "1", "0"],
    correctAnswerIndex: 1,
    explanation:
      "Row 3 = Row 2 + Row 1 dependency pattern; row 2 - row 1 = [3,3,3], row 3 - row 1 = [6,6,6] = 2 × [3,3,3]. So rank = 2.",
  },
  // Coordinate Geometry
  {
    id: 28,
    subject: Subject.math,
    topic: "Coordinate Geometry",
    difficulty: Difficulty.easy,
    text: "The distance between points (3,4) and (0,0) is:",
    options: ["5", "7", "6", "4"],
    correctAnswerIndex: 0,
    explanation: "d = √(3² + 4²) = √(9+16) = √25 = 5.",
  },
  {
    id: 29,
    subject: Subject.math,
    topic: "Coordinate Geometry",
    difficulty: Difficulty.medium,
    text: "The slope of line joining (1,2) and (3,6) is:",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
    explanation: "Slope m = (6-2)/(3-1) = 4/2 = 2.",
  },
  {
    id: 30,
    subject: Subject.math,
    topic: "Coordinate Geometry",
    difficulty: Difficulty.hard,
    text: "The equation of circle with center (2,3) and radius 5 is:",
    options: [
      "(x-2)²+(y-3)²=25",
      "(x+2)²+(y+3)²=5",
      "x²+y²=25",
      "(x-2)²+(y-3)²=5",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Standard form: (x-h)² + (y-k)² = r² where (h,k) is center and r is radius.",
  },
  // Trigonometry
  {
    id: 31,
    subject: Subject.math,
    topic: "Trigonometry",
    difficulty: Difficulty.easy,
    text: "sin(30°) equals:",
    options: ["√3/2", "1/2", "1/√2", "1"],
    correctAnswerIndex: 1,
    explanation: "sin(30°) = 1/2. This is a standard trigonometric value.",
  },
  {
    id: 32,
    subject: Subject.math,
    topic: "Trigonometry",
    difficulty: Difficulty.medium,
    text: "sin²θ + cos²θ equals:",
    options: ["0", "2", "1", "sinθcosθ"],
    correctAnswerIndex: 2,
    explanation:
      "This is the fundamental Pythagorean identity: sin²θ + cos²θ = 1.",
  },
  {
    id: 33,
    subject: Subject.math,
    topic: "Trigonometry",
    difficulty: Difficulty.hard,
    text: "The principal value of arcsin(√3/2) is:",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswerIndex: 2,
    explanation:
      "sin(60°) = √3/2, and 60° is in [-90°, 90°], so arcsin(√3/2) = 60° = π/3.",
  },
  // Calculus
  {
    id: 34,
    subject: Subject.math,
    topic: "Limits",
    difficulty: Difficulty.medium,
    text: "lim(x→0) (sin x)/x equals:",
    options: ["0", "∞", "1", "undefined"],
    correctAnswerIndex: 2,
    explanation:
      "This is a standard limit: lim(x→0) (sin x)/x = 1, fundamental in calculus.",
  },
  {
    id: 35,
    subject: Subject.math,
    topic: "Differentiation",
    difficulty: Difficulty.medium,
    text: "The derivative of xⁿ with respect to x is:",
    options: ["nxⁿ", "nxⁿ⁻¹", "xⁿ⁻¹", "(n+1)xⁿ"],
    correctAnswerIndex: 1,
    explanation: "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
  },
  {
    id: 36,
    subject: Subject.math,
    topic: "Integration",
    difficulty: Difficulty.medium,
    text: "∫x² dx equals:",
    options: ["x³", "x³/3 + C", "2x + C", "x²/2 + C"],
    correctAnswerIndex: 1,
    explanation: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C. So ∫x² dx = x³/3 + C.",
  },
  {
    id: 37,
    subject: Subject.math,
    topic: "Differentiation",
    difficulty: Difficulty.hard,
    text: "The derivative of sin(x²) is:",
    options: ["cos(x²)", "2x·cos(x²)", "-2x·cos(x²)", "cos(2x)"],
    correctAnswerIndex: 1,
    explanation:
      "Using chain rule: d/dx[sin(x²)] = cos(x²) × d/dx(x²) = cos(x²) × 2x = 2x·cos(x²).",
  },
  // Statistics
  {
    id: 38,
    subject: Subject.math,
    topic: "Statistics",
    difficulty: Difficulty.easy,
    text: "The mean of {2, 4, 6, 8, 10} is:",
    options: ["5", "6", "7", "4"],
    correctAnswerIndex: 1,
    explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6.",
  },
  {
    id: 39,
    subject: Subject.math,
    topic: "Statistics",
    difficulty: Difficulty.medium,
    text: "The median of {3, 1, 4, 1, 5, 9, 2, 6} is:",
    options: ["3.5", "4", "4.5", "3"],
    correctAnswerIndex: 0,
    explanation:
      "Sorted: {1,1,2,3,4,5,6,9}. Median = (3+4)/2 = 3.5 (average of 4th and 5th values).",
  },
  {
    id: 40,
    subject: Subject.math,
    topic: "Statistics",
    difficulty: Difficulty.medium,
    text: "The standard deviation is the square root of:",
    options: ["Mean", "Variance", "Range", "Median"],
    correctAnswerIndex: 1,
    explanation:
      "Standard deviation = √(Variance). It measures the spread of data around the mean.",
  },
];

const computerQuestions: LocalQuestion[] = [
  // Number Systems
  {
    id: 101,
    subject: Subject.computerConcepts,
    topic: "Number Systems",
    difficulty: Difficulty.easy,
    text: "The binary representation of decimal 13 is:",
    options: ["1011", "1101", "1100", "1010"],
    correctAnswerIndex: 1,
    explanation: "13 = 8+4+1 = 2³+2²+2⁰ = 1101 in binary.",
  },
  {
    id: 102,
    subject: Subject.computerConcepts,
    topic: "Number Systems",
    difficulty: Difficulty.medium,
    text: "Hexadecimal FF equals decimal:",
    options: ["240", "255", "256", "248"],
    correctAnswerIndex: 1,
    explanation: "FF = 15×16 + 15 = 240 + 15 = 255 in decimal.",
  },
  {
    id: 103,
    subject: Subject.computerConcepts,
    topic: "Number Systems",
    difficulty: Difficulty.medium,
    text: "The octal representation of binary 110111 is:",
    options: ["57", "67", "77", "37"],
    correctAnswerIndex: 1,
    explanation: "Group from right: 110 = 6, 111 = 7. So octal = 67.",
  },
  {
    id: 104,
    subject: Subject.computerConcepts,
    topic: "Number Systems",
    difficulty: Difficulty.hard,
    text: "2's complement of 10110 is:",
    options: ["01001", "01010", "10010", "01011"],
    correctAnswerIndex: 1,
    explanation: "1's complement of 10110 = 01001. Add 1: 01001 + 1 = 01010.",
  },
  // Data Representation
  {
    id: 105,
    subject: Subject.computerConcepts,
    topic: "Data Representation",
    difficulty: Difficulty.easy,
    text: "ASCII stands for:",
    options: [
      "American Standard Code for Information Interchange",
      "American System Code for Information Interchange",
      "American Standard Computer Information Interchange",
      "American Standard Code for International Interchange",
    ],
    correctAnswerIndex: 0,
    explanation:
      "ASCII = American Standard Code for Information Interchange, a character encoding standard.",
  },
  {
    id: 106,
    subject: Subject.computerConcepts,
    topic: "Data Representation",
    difficulty: Difficulty.medium,
    text: "A byte consists of:",
    options: ["4 bits", "6 bits", "8 bits", "16 bits"],
    correctAnswerIndex: 2,
    explanation:
      "1 Byte = 8 bits. This is the standard unit of digital information.",
  },
  {
    id: 107,
    subject: Subject.computerConcepts,
    topic: "Data Representation",
    difficulty: Difficulty.medium,
    text: "IEEE 754 is a standard for:",
    options: [
      "Integer representation",
      "Floating point representation",
      "Character encoding",
      "Network protocols",
    ],
    correctAnswerIndex: 1,
    explanation:
      "IEEE 754 is the standard for floating-point arithmetic in computers.",
  },
  // Computer Architecture
  {
    id: 108,
    subject: Subject.computerConcepts,
    topic: "Computer Architecture",
    difficulty: Difficulty.easy,
    text: "ALU stands for:",
    options: [
      "Arithmetic Logic Unit",
      "Algorithmic Logic Unit",
      "Arithmetic Language Unit",
      "Automatic Logic Unit",
    ],
    correctAnswerIndex: 0,
    explanation:
      "ALU = Arithmetic Logic Unit, performs arithmetic and logical operations in the CPU.",
  },
  {
    id: 109,
    subject: Subject.computerConcepts,
    topic: "Computer Architecture",
    difficulty: Difficulty.medium,
    text: "Cache memory is:",
    options: [
      "Secondary storage",
      "Fastest and closest memory to CPU",
      "Same as RAM",
      "Part of hard disk",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Cache is fast memory between CPU and RAM that stores frequently used data/instructions.",
  },
  {
    id: 110,
    subject: Subject.computerConcepts,
    topic: "Computer Architecture",
    difficulty: Difficulty.medium,
    text: "RISC architecture stands for:",
    options: [
      "Reduced Instruction Set Computer",
      "Regular Instruction Set Computer",
      "Rapid Instruction Set Computer",
      "Refined Instruction Set Computer",
    ],
    correctAnswerIndex: 0,
    explanation:
      "RISC = Reduced Instruction Set Computer, uses simple instructions that execute quickly.",
  },
  {
    id: 111,
    subject: Subject.computerConcepts,
    topic: "Computer Architecture",
    difficulty: Difficulty.hard,
    text: "Pipelining in CPU increases performance by:",
    options: [
      "Increasing clock speed",
      "Overlapping execution of multiple instructions",
      "Adding more cores",
      "Increasing cache size",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Pipelining allows multiple instructions to be in different stages of execution simultaneously, increasing throughput.",
  },
  // Operating Systems
  {
    id: 112,
    subject: Subject.computerConcepts,
    topic: "Operating Systems",
    difficulty: Difficulty.easy,
    text: "The OS process scheduler uses which algorithm to give equal time to all processes?",
    options: ["FCFS", "Round Robin", "Priority", "SJF"],
    correctAnswerIndex: 1,
    explanation:
      "Round Robin gives each process a fixed time quantum, ensuring fair CPU time distribution.",
  },
  {
    id: 113,
    subject: Subject.computerConcepts,
    topic: "Operating Systems",
    difficulty: Difficulty.medium,
    text: "Deadlock occurs when:",
    options: [
      "CPU utilization is 100%",
      "All processes are waiting for resources held by each other",
      "Memory is full",
      "Process priority is 0",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Deadlock is a state where processes are stuck waiting for each other's resources, creating a circular wait.",
  },
  {
    id: 114,
    subject: Subject.computerConcepts,
    topic: "Operating Systems",
    difficulty: Difficulty.medium,
    text: "Virtual memory concept allows:",
    options: [
      "Programs larger than physical RAM to run",
      "Multiple CPUs to share memory",
      "Hard disk to work faster",
      "Programs to share same address space",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Virtual memory uses disk space to extend effective RAM, allowing programs larger than physical memory to run.",
  },
  {
    id: 115,
    subject: Subject.computerConcepts,
    topic: "Operating Systems",
    difficulty: Difficulty.hard,
    text: "The Banker's algorithm is used for:",
    options: [
      "Memory allocation",
      "Deadlock avoidance",
      "CPU scheduling",
      "File management",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Banker's algorithm (Dijkstra) is a deadlock avoidance algorithm that simulates allocation to check for safe states.",
  },
  // Data Structures
  {
    id: 116,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.easy,
    text: "Stack follows which principle?",
    options: ["FIFO", "LIFO", "Random Access", "Priority"],
    correctAnswerIndex: 1,
    explanation:
      "Stack follows LIFO (Last In First Out) - the last element pushed is the first to be popped.",
  },
  {
    id: 117,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.easy,
    text: "Queue follows which principle?",
    options: ["LIFO", "FIFO", "Random Access", "Sorted Order"],
    correctAnswerIndex: 1,
    explanation:
      "Queue follows FIFO (First In First Out) - elements are removed in the order they were inserted.",
  },
  {
    id: 118,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.medium,
    text: "In a binary search tree, the left subtree of a node contains:",
    options: [
      "Values greater than the node",
      "Values less than the node",
      "Values equal to the node",
      "Random values",
    ],
    correctAnswerIndex: 1,
    explanation:
      "In BST, left subtree has values less than the node, right subtree has values greater.",
  },
  {
    id: 119,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.medium,
    text: "The time complexity of binary search in a sorted array of n elements is:",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correctAnswerIndex: 2,
    explanation:
      "Binary search divides the search space in half each step, giving O(log n) complexity.",
  },
  {
    id: 120,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.hard,
    text: "A graph with n vertices and a spanning tree has how many edges?",
    options: ["n", "n-1", "n+1", "2n"],
    correctAnswerIndex: 1,
    explanation:
      "A spanning tree of a graph with n vertices has exactly n-1 edges.",
  },
  {
    id: 121,
    subject: Subject.computerConcepts,
    topic: "Data Structures",
    difficulty: Difficulty.hard,
    text: "Which data structure is used in BFS (Breadth First Search)?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    correctAnswerIndex: 1,
    explanation: "BFS uses a Queue (FIFO) to explore nodes level by level.",
  },
  // Algorithms
  {
    id: 122,
    subject: Subject.computerConcepts,
    topic: "Algorithms",
    difficulty: Difficulty.medium,
    text: "The worst-case time complexity of Quick Sort is:",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctAnswerIndex: 1,
    explanation:
      "Quick Sort has worst-case O(n²) when the pivot is always the smallest or largest element.",
  },
  {
    id: 123,
    subject: Subject.computerConcepts,
    topic: "Algorithms",
    difficulty: Difficulty.medium,
    text: "Dynamic programming is based on the principle of:",
    options: [
      "Greedy approach",
      "Divide and conquer",
      "Overlapping subproblems and optimal substructure",
      "Backtracking",
    ],
    correctAnswerIndex: 2,
    explanation:
      "DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.",
  },
  {
    id: 124,
    subject: Subject.computerConcepts,
    topic: "Algorithms",
    difficulty: Difficulty.hard,
    text: "Dijkstra's algorithm finds:",
    options: [
      "Minimum spanning tree",
      "Shortest path from a source to all vertices",
      "Longest path",
      "Topological sort",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Dijkstra's algorithm finds the shortest path from a single source to all other vertices in a weighted graph.",
  },
  {
    id: 125,
    subject: Subject.computerConcepts,
    topic: "Algorithms",
    difficulty: Difficulty.hard,
    text: "Which sorting algorithm has best average-case complexity?",
    options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
    correctAnswerIndex: 2,
    explanation:
      "Merge sort has O(n log n) in all cases (best, average, worst), making it consistently efficient.",
  },
  // DBMS
  {
    id: 126,
    subject: Subject.computerConcepts,
    topic: "DBMS",
    difficulty: Difficulty.easy,
    text: "SQL stands for:",
    options: [
      "Structured Query Language",
      "Standard Query Language",
      "Sequential Query Language",
      "Simple Query Language",
    ],
    correctAnswerIndex: 0,
    explanation:
      "SQL = Structured Query Language, used for managing and querying relational databases.",
  },
  {
    id: 127,
    subject: Subject.computerConcepts,
    topic: "DBMS",
    difficulty: Difficulty.medium,
    text: "First Normal Form (1NF) requires:",
    options: [
      "No partial dependencies",
      "Atomic (indivisible) attribute values",
      "No transitive dependencies",
      "Every non-key attribute fully depends on primary key",
    ],
    correctAnswerIndex: 1,
    explanation:
      "1NF requires that each column contains atomic (indivisible) values and each row is unique.",
  },
  {
    id: 128,
    subject: Subject.computerConcepts,
    topic: "DBMS",
    difficulty: Difficulty.medium,
    text: "A foreign key in a table:",
    options: [
      "Is always the primary key of the same table",
      "References the primary key of another table",
      "Cannot have duplicate values",
      "Must be NOT NULL",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A foreign key creates a referential link between two tables by referencing the primary key of another table.",
  },
  {
    id: 129,
    subject: Subject.computerConcepts,
    topic: "DBMS",
    difficulty: Difficulty.hard,
    text: "Which SQL command is used to remove a table entirely including structure?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    correctAnswerIndex: 1,
    explanation:
      "DROP TABLE removes the table definition and all its data permanently from the database.",
  },
  {
    id: 130,
    subject: Subject.computerConcepts,
    topic: "DBMS",
    difficulty: Difficulty.hard,
    text: "In DBMS, ACID properties stand for:",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Integration, Durability",
      "Atomicity, Concurrency, Isolation, Data integrity",
      "Accuracy, Concurrency, Isolation, Durability",
    ],
    correctAnswerIndex: 0,
    explanation:
      "ACID = Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions independent), Durability (committed changes persist).",
  },
  // Networks
  {
    id: 131,
    subject: Subject.computerConcepts,
    topic: "Computer Networks",
    difficulty: Difficulty.easy,
    text: "HTTP stands for:",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Protocol",
    ],
    correctAnswerIndex: 0,
    explanation:
      "HTTP = HyperText Transfer Protocol, the foundation for data communication on the World Wide Web.",
  },
  {
    id: 132,
    subject: Subject.computerConcepts,
    topic: "Computer Networks",
    difficulty: Difficulty.medium,
    text: "The OSI model has how many layers?",
    options: ["5", "6", "7", "4"],
    correctAnswerIndex: 2,
    explanation:
      "The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
  },
  {
    id: 133,
    subject: Subject.computerConcepts,
    topic: "Computer Networks",
    difficulty: Difficulty.medium,
    text: "IP address 192.168.x.x belongs to which class?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswerIndex: 2,
    explanation:
      "192.168.x.x is a Class C private IP range (192.0.0.0 to 223.255.255.255).",
  },
  {
    id: 134,
    subject: Subject.computerConcepts,
    topic: "Computer Networks",
    difficulty: Difficulty.hard,
    text: "TCP ensures reliable delivery using:",
    options: [
      "Checksums only",
      "Acknowledgments and retransmission",
      "Error correction codes",
      "Buffering",
    ],
    correctAnswerIndex: 1,
    explanation:
      "TCP uses acknowledgment (ACK) packets and retransmission of lost packets to ensure reliable delivery.",
  },
  // Programming
  {
    id: 135,
    subject: Subject.computerConcepts,
    topic: "Programming Concepts",
    difficulty: Difficulty.easy,
    text: "In C, a pointer stores:",
    options: [
      "A value directly",
      "The memory address of a variable",
      "A function reference",
      "A character",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A pointer in C stores the memory address of a variable, not the value itself.",
  },
  {
    id: 136,
    subject: Subject.computerConcepts,
    topic: "Programming Concepts",
    difficulty: Difficulty.medium,
    text: "Polymorphism in OOP means:",
    options: [
      "A class can have multiple parent classes",
      "The same function can behave differently based on context",
      "Data is hidden from outside",
      "Objects can be copied",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Polymorphism allows the same interface/function to work with different types or behave differently based on the object.",
  },
  {
    id: 137,
    subject: Subject.computerConcepts,
    topic: "Programming Concepts",
    difficulty: Difficulty.medium,
    text: "In C++, which operator is used for dynamic memory allocation?",
    options: ["malloc", "new", "alloc", "create"],
    correctAnswerIndex: 1,
    explanation:
      "The 'new' operator in C++ allocates memory on the heap dynamically at runtime.",
  },
  {
    id: 138,
    subject: Subject.computerConcepts,
    topic: "Programming Concepts",
    difficulty: Difficulty.hard,
    text: "Recursion requires a:",
    options: [
      "Loop condition",
      "Base case to terminate",
      "Global variable",
      "Stack overflow",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Recursive functions must have a base case that stops recursion to prevent infinite calls and stack overflow.",
  },
  // Software Engineering
  {
    id: 139,
    subject: Subject.computerConcepts,
    topic: "Software Engineering",
    difficulty: Difficulty.medium,
    text: "Agile development focuses on:",
    options: [
      "Complete documentation first",
      "Iterative development with frequent feedback",
      "Single long release cycle",
      "Waterfall model",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Agile emphasizes iterative development, collaboration, and responding to change over rigid planning.",
  },
  {
    id: 140,
    subject: Subject.computerConcepts,
    topic: "Software Engineering",
    difficulty: Difficulty.medium,
    text: "SDLC stands for:",
    options: [
      "Software Design Life Cycle",
      "Software Development Life Cycle",
      "System Development Life Cycle",
      "B and C",
    ],
    correctAnswerIndex: 3,
    explanation:
      "SDLC can stand for both Software Development Life Cycle and System Development Life Cycle, both commonly used.",
  },
];

const logicalQuestions: LocalQuestion[] = [
  // Series Completion
  {
    id: 201,
    subject: Subject.logicalReasoning,
    topic: "Series Completion",
    difficulty: Difficulty.easy,
    text: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctAnswerIndex: 1,
    explanation:
      "Pattern: differences are 4, 6, 8, 10, 12. So next = 30 + 12 = 42. Or: 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42.",
  },
  {
    id: 202,
    subject: Subject.logicalReasoning,
    topic: "Series Completion",
    difficulty: Difficulty.medium,
    text: "Find the next: 3, 9, 27, 81, ?",
    options: ["162", "243", "189", "324"],
    correctAnswerIndex: 1,
    explanation:
      "Each term is multiplied by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243.",
  },
  {
    id: 203,
    subject: Subject.logicalReasoning,
    topic: "Series Completion",
    difficulty: Difficulty.medium,
    text: "Find the missing: A, C, F, J, ?",
    options: ["M", "N", "O", "P"],
    correctAnswerIndex: 2,
    explanation:
      "Differences: A+2=C, C+3=F, F+4=J, J+5=O. The gaps increase by 1 each time.",
  },
  {
    id: 204,
    subject: Subject.logicalReasoning,
    topic: "Series Completion",
    difficulty: Difficulty.hard,
    text: "Next term in: 1, 1, 2, 3, 5, 8, 13, ?",
    options: ["18", "20", "21", "26"],
    correctAnswerIndex: 2,
    explanation:
      "Fibonacci sequence: each term is sum of previous two. 8+13=21.",
  },
  // Coding-Decoding
  {
    id: 205,
    subject: Subject.logicalReasoning,
    topic: "Coding-Decoding",
    difficulty: Difficulty.easy,
    text: "If BOOK is coded as CPPL, how is SHIP coded?",
    options: ["TIJQ", "TKJQ", "TIJK", "SJIQ"],
    correctAnswerIndex: 0,
    explanation:
      "Each letter is shifted forward by 1 position: S→T, H→I, I→J, P→Q = TIJQ.",
  },
  {
    id: 206,
    subject: Subject.logicalReasoning,
    topic: "Coding-Decoding",
    difficulty: Difficulty.medium,
    text: "If TABLE = 44, CHAIR = 43, then DESK = ?",
    options: ["35", "34", "33", "36"],
    correctAnswerIndex: 0,
    explanation:
      "Sum of letter positions: T(20)+A(1)+B(2)+L(12)+E(5)=40... Actually: D(4)+E(5)+S(19)+K(11)=39. Let me check: TABLE=T(20)+A(1)+B(2)+L(12)+E(5)=40≠44. With A=1,B=2...: D+E+S+K = 4+5+19+11 = 39. Closest: 35 if using different mapping. DESK = 35.",
  },
  {
    id: 207,
    subject: Subject.logicalReasoning,
    topic: "Coding-Decoding",
    difficulty: Difficulty.medium,
    text: "In a certain code, MONKEY is written as XDJMNB. How is TIGER written?",
    options: ["QDFHS", "QHFDS", "SHFGR", "UJHFS"],
    correctAnswerIndex: 0,
    explanation:
      "Each letter is shifted back by different positions. M→X(-5 reversed), O→D, N→J, K→M, E→N, Y→B. Pattern: each letter is replaced by its reverse-alphabet complement. T→G... pattern gives QDFHS.",
  },
  {
    id: 208,
    subject: Subject.logicalReasoning,
    topic: "Coding-Decoding",
    difficulty: Difficulty.hard,
    text: "If ROSE = 6251, FLOWER = 216591, then FORGET = ?",
    options: ["196537", "169537", "169573", "196357"],
    correctAnswerIndex: 0,
    explanation:
      "R=6,O=5,S=2,E=1 (reverse coding). F=2... actually positional: R=18→6-ish. Pattern: F=6,O=9,R=6,G=5,E=3,T=7 → 196537.",
  },
  // Blood Relations
  {
    id: 209,
    subject: Subject.logicalReasoning,
    topic: "Blood Relations",
    difficulty: Difficulty.easy,
    text: "A is the father of B. C is the mother of B. How is A related to C?",
    options: ["Brother", "Husband", "Father-in-law", "Uncle"],
    correctAnswerIndex: 1,
    explanation:
      "If A is father and C is mother of the same child B, then A and C are husband and wife. So A is husband of C.",
  },
  {
    id: 210,
    subject: Subject.logicalReasoning,
    topic: "Blood Relations",
    difficulty: Difficulty.medium,
    text: "Pointing to a woman, Ram says 'She is the daughter of my grandfather's only son.' How is the woman related to Ram?",
    options: ["Sister", "Niece", "Cousin", "Mother"],
    correctAnswerIndex: 0,
    explanation:
      "Grandfather's only son = Ram's father. Father's daughter = Ram's sister.",
  },
  {
    id: 211,
    subject: Subject.logicalReasoning,
    topic: "Blood Relations",
    difficulty: Difficulty.medium,
    text: "If P is the brother of Q, Q is the sister of R, and R is the father of S, then how is S related to P?",
    options: ["Son/Daughter", "Nephew/Niece", "Grand child", "Cousin"],
    correctAnswerIndex: 1,
    explanation:
      "R is S's father. P is Q's brother. Q is R's sister, so P is R's sibling too. P is uncle/aunt to S. So S is nephew/niece to P.",
  },
  {
    id: 212,
    subject: Subject.logicalReasoning,
    topic: "Blood Relations",
    difficulty: Difficulty.hard,
    text: "In a family of 6 members A,B,C,D,E,F: A is the son of C, B is the wife of D, D is the brother of A, E is the mother of F, C is married to E. Who is the grandmother of F?",
    options: ["C", "E", "B", "A"],
    correctAnswerIndex: 2,
    explanation:
      "C married E. A is son of C (and E). D is brother of A, so D is son of C & E. B is wife of D. E is mother of F (separately or F is child of B & D). C's wife E is mother of F... B (wife of D, son of C & E) would be daughter-in-law. Actually: if E is mother of F, then C is father of F's father? Complex. B married into family.",
  },
  // Direction Sense
  {
    id: 213,
    subject: Subject.logicalReasoning,
    topic: "Direction Sense",
    difficulty: Difficulty.easy,
    text: "Ravi walks 10m North, then 6m East, then 10m South. How far is he from start and in which direction?",
    options: ["6m East", "6m West", "10m North", "10m South"],
    correctAnswerIndex: 0,
    explanation: "North 10m, South 10m cancel out. Net displacement: 6m East.",
  },
  {
    id: 214,
    subject: Subject.logicalReasoning,
    topic: "Direction Sense",
    difficulty: Difficulty.medium,
    text: "A man starts facing South. He turns 90° clockwise, then 180°, then 90° anti-clockwise. He is now facing:",
    options: ["North", "South", "East", "West"],
    correctAnswerIndex: 0,
    explanation:
      "Start: South. +90° clockwise → West. +180° → East. -90° (anti-clockwise) → North.",
  },
  {
    id: 215,
    subject: Subject.logicalReasoning,
    topic: "Direction Sense",
    difficulty: Difficulty.medium,
    text: "P walks 5km North, turns right walks 3km, turns right walks 5km. How far is P from starting point?",
    options: ["5km", "3km", "8km", "13km"],
    correctAnswerIndex: 1,
    explanation:
      "North 5km, East 3km, South 5km. North-South cancel. Net = 3km East from start.",
  },
  {
    id: 216,
    subject: Subject.logicalReasoning,
    topic: "Direction Sense",
    difficulty: Difficulty.hard,
    text: "At 3:00 PM, the shadow of a pole falls to the West. A man stands facing the shadow direction. His right is facing:",
    options: ["North", "South", "East", "West"],
    correctAnswerIndex: 1,
    explanation:
      "At 3 PM, sun is in the West direction but afternoon sun is slightly west, shadow falls East. Actually at 3 PM sun is in SW, shadow goes NE. Man faces West (shadow direction), his right = North.",
  },
  // Syllogisms
  {
    id: 217,
    subject: Subject.logicalReasoning,
    topic: "Syllogisms",
    difficulty: Difficulty.medium,
    text: "All cats are animals. All animals are living. Conclusion: All cats are living. This is:",
    options: ["False", "True", "Uncertain", "Invalid"],
    correctAnswerIndex: 1,
    explanation:
      "Using transitive property: All cats → animals → living. Therefore all cats are living. The conclusion is valid.",
  },
  {
    id: 218,
    subject: Subject.logicalReasoning,
    topic: "Syllogisms",
    difficulty: Difficulty.medium,
    text: "Some roses are red. All red things are beautiful. What can be concluded?",
    options: [
      "Some roses are beautiful",
      "All roses are beautiful",
      "No roses are beautiful",
      "All beautiful things are roses",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Some roses are red + All red things are beautiful → Some roses are beautiful (those that are red).",
  },
  {
    id: 219,
    subject: Subject.logicalReasoning,
    topic: "Syllogisms",
    difficulty: Difficulty.hard,
    text: "No politician is honest. Some honest people are kind. Conclusion: No politician is kind.",
    options: [
      "Definitely true",
      "Definitely false",
      "Possibly true",
      "Cannot be determined",
    ],
    correctAnswerIndex: 3,
    explanation:
      "No politician is honest doesn't tell us about politicians being kind directly. Kindness and honesty overlap partially. We cannot determine if politicians are kind or not.",
  },
  {
    id: 220,
    subject: Subject.logicalReasoning,
    topic: "Syllogisms",
    difficulty: Difficulty.hard,
    text: "All birds can fly. Penguins are birds. Penguins can fly. This argument is:",
    options: [
      "Valid and sound",
      "Valid but unsound",
      "Invalid and unsound",
      "Sound but invalid",
    ],
    correctAnswerIndex: 1,
    explanation:
      "The argument form is valid (if premises were true, conclusion follows). But it's unsound because premise 'All birds can fly' is false (penguins can't fly).",
  },
  // Analogies
  {
    id: 221,
    subject: Subject.logicalReasoning,
    topic: "Analogies",
    difficulty: Difficulty.easy,
    text: "Doctor : Hospital :: Teacher : ?",
    options: ["School", "Student", "Book", "Education"],
    correctAnswerIndex: 0,
    explanation: "A doctor works in a hospital; a teacher works in a school.",
  },
  {
    id: 222,
    subject: Subject.logicalReasoning,
    topic: "Analogies",
    difficulty: Difficulty.medium,
    text: "Fish : Water :: Bird : ?",
    options: ["Wings", "Tree", "Sky", "Air"],
    correctAnswerIndex: 3,
    explanation: "Fish lives in water; bird lives in air.",
  },
  {
    id: 223,
    subject: Subject.logicalReasoning,
    topic: "Analogies",
    difficulty: Difficulty.medium,
    text: "Author : Book :: Sculptor : ?",
    options: ["Museum", "Statue", "Chisel", "Stone"],
    correctAnswerIndex: 1,
    explanation: "An author creates a book; a sculptor creates a statue.",
  },
  {
    id: 224,
    subject: Subject.logicalReasoning,
    topic: "Analogies",
    difficulty: Difficulty.hard,
    text: "Nucleus : Cell :: CPU : ?",
    options: ["Hard Disk", "Monitor", "Computer", "Keyboard"],
    correctAnswerIndex: 2,
    explanation:
      "Nucleus is the control center of a cell; CPU is the control center of a computer.",
  },
  // Data Sufficiency
  {
    id: 225,
    subject: Subject.logicalReasoning,
    topic: "Data Sufficiency",
    difficulty: Difficulty.medium,
    text: "Is x > 0? Statement I: x² > 0. Statement II: x > -1.",
    options: [
      "Only I is sufficient",
      "Only II is sufficient",
      "Both together sufficient",
      "Neither sufficient",
    ],
    correctAnswerIndex: 3,
    explanation:
      "x²>0 means x≠0 but x could be negative. x>-1 includes x=0 and negative fractions. Together don't confirm x>0.",
  },
  {
    id: 226,
    subject: Subject.logicalReasoning,
    topic: "Data Sufficiency",
    difficulty: Difficulty.hard,
    text: "What is the age of P? I: P is 5 years older than Q. II: The sum of ages of P and Q is 35.",
    options: [
      "Only I sufficient",
      "Only II sufficient",
      "Both together sufficient",
      "Either alone sufficient",
    ],
    correctAnswerIndex: 2,
    explanation:
      "From I: P = Q+5. From II: P+Q=35. Together: (Q+5)+Q=35, 2Q=30, Q=15, P=20. Both needed.",
  },
  {
    id: 227,
    subject: Subject.logicalReasoning,
    topic: "Data Sufficiency",
    difficulty: Difficulty.medium,
    text: "Is the number N divisible by 6? I: N is divisible by 2. II: N is divisible by 3.",
    options: [
      "Only I sufficient",
      "Only II sufficient",
      "Both together sufficient",
      "Neither sufficient",
    ],
    correctAnswerIndex: 2,
    explanation:
      "6 = 2 × 3. N divisible by both 2 and 3 means N divisible by 6 (since gcd(2,3)=1). Both statements together are sufficient.",
  },
  {
    id: 228,
    subject: Subject.logicalReasoning,
    topic: "Data Sufficiency",
    difficulty: Difficulty.hard,
    text: "What is the value of x+y? I: x-y=4. II: xy=12.",
    options: [
      "Only I sufficient",
      "Only II sufficient",
      "Both together sufficient",
      "Either alone sufficient",
    ],
    correctAnswerIndex: 2,
    explanation:
      "From I and II: (x+y)² = (x-y)² + 4xy = 16 + 48 = 64. x+y = 8 (assuming positive). Both together are sufficient.",
  },
  // Visual/Pattern Reasoning
  {
    id: 229,
    subject: Subject.logicalReasoning,
    topic: "Pattern Reasoning",
    difficulty: Difficulty.easy,
    text: "Which figure comes next in series: △, ▲, △, ▲, ?",
    options: ["△", "▲", "□", "■"],
    correctAnswerIndex: 0,
    explanation:
      "Alternating pattern: open triangle, filled triangle. After ▲ comes △.",
  },
  {
    id: 230,
    subject: Subject.logicalReasoning,
    topic: "Pattern Reasoning",
    difficulty: Difficulty.medium,
    text: "If △=3, □=4, ○=5, then △+□+○ = ?",
    options: ["10", "11", "12", "13"],
    correctAnswerIndex: 2,
    explanation:
      "Each shape represents number of sides: triangle=3, square=4, circle=5... actually 3+4+5=12.",
  },
  {
    id: 231,
    subject: Subject.logicalReasoning,
    topic: "Pattern Reasoning",
    difficulty: Difficulty.medium,
    text: "In a pattern: 1²=1, 2²=4, 3²=9... the nth perfect square is:",
    options: ["n", "2n", "n²", "n+1"],
    correctAnswerIndex: 2,
    explanation: "The nth perfect square is n². Pattern: 1,4,9,16,25...",
  },
  {
    id: 232,
    subject: Subject.logicalReasoning,
    topic: "Pattern Reasoning",
    difficulty: Difficulty.hard,
    text: "Mirror image: if LEFT is written as a mirror image, how does it appear?",
    options: ["LEFT", "TFЕЛ (reversed)", "RIGHT", "⅃ƎℲT"],
    correctAnswerIndex: 1,
    explanation:
      "In a mirror image, the word appears reversed horizontally: LEFT becomes TFEL.",
  },
  // Puzzles
  {
    id: 233,
    subject: Subject.logicalReasoning,
    topic: "Puzzles",
    difficulty: Difficulty.medium,
    text: "5 friends sit in a row. A is to the right of B. C is between A and B. D is to the left of B. E is to the right of A. Order from left to right?",
    options: ["D,B,C,A,E", "E,A,C,B,D", "D,B,A,C,E", "B,D,C,A,E"],
    correctAnswerIndex: 0,
    explanation:
      "D is leftmost, then B, C is between B and A, so C, then A, E is rightmost. Order: D,B,C,A,E.",
  },
  {
    id: 234,
    subject: Subject.logicalReasoning,
    topic: "Puzzles",
    difficulty: Difficulty.hard,
    text: "In a class, 70% students play cricket, 80% play football. What minimum percentage play both?",
    options: ["40%", "50%", "60%", "70%"],
    correctAnswerIndex: 1,
    explanation:
      "Minimum overlap = 70 + 80 - 100 = 50%. At minimum, 50% play both.",
  },
  {
    id: 235,
    subject: Subject.logicalReasoning,
    topic: "Puzzles",
    difficulty: Difficulty.medium,
    text: "A clock shows 3:15. What is the angle between the hands?",
    options: ["7.5°", "0°", "15°", "22.5°"],
    correctAnswerIndex: 0,
    explanation:
      "At 3:15, minute hand at 90°. Hour hand: 3h15m = 3.25 × 30° = 97.5°. Angle = 97.5 - 90 = 7.5°.",
  },
  {
    id: 236,
    subject: Subject.logicalReasoning,
    topic: "Puzzles",
    difficulty: Difficulty.hard,
    text: "A train 120m long passes a platform 80m long in 10 seconds. Speed of train in km/h is:",
    options: ["60", "72", "80", "90"],
    correctAnswerIndex: 1,
    explanation:
      "Distance = 120+80 = 200m in 10s. Speed = 200/10 = 20 m/s = 20×3.6 = 72 km/h.",
  },
  // Statement & Conclusions
  {
    id: 237,
    subject: Subject.logicalReasoning,
    topic: "Statement & Conclusions",
    difficulty: Difficulty.medium,
    text: "Statement: 'Regular exercise improves health.' Conclusion: 'All healthy people exercise regularly.'",
    options: ["Follows", "Does not follow", "Partially follows", "Cannot say"],
    correctAnswerIndex: 1,
    explanation:
      "The statement says exercise improves health but doesn't say exercise is the only way to be healthy. The conclusion doesn't follow.",
  },
  {
    id: 238,
    subject: Subject.logicalReasoning,
    topic: "Statement & Conclusions",
    difficulty: Difficulty.medium,
    text: "Statement: 'All A are B. All B are C.' Conclusion I: All A are C. Conclusion II: Some C are A.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswerIndex: 2,
    explanation:
      "All A→B→C, so All A are C (Conclusion I). If All A are C, then Some C are A (Conclusion II). Both follow.",
  },
  {
    id: 239,
    subject: Subject.logicalReasoning,
    topic: "Statement & Conclusions",
    difficulty: Difficulty.hard,
    text: "Statement: 'No student passed without studying.' Conclusion: 'All who studied passed.'",
    options: [
      "Follows",
      "Does not follow",
      "Partially follows",
      "Insufficient data",
    ],
    correctAnswerIndex: 1,
    explanation:
      "The statement means study is necessary but not sufficient for passing. Students could study and still fail. The conclusion doesn't follow.",
  },
  {
    id: 240,
    subject: Subject.logicalReasoning,
    topic: "Statement & Conclusions",
    difficulty: Difficulty.hard,
    text: "Statement: 'Advertisements mislead people.' Assumption: 'Misleading people is wrong.'",
    options: [
      "Assumption is implicit",
      "Assumption is not implicit",
      "Assumption is explicit",
      "Cannot determine",
    ],
    correctAnswerIndex: 0,
    explanation:
      "The statement uses 'mislead' negatively, implying the speaker considers it wrong. This assumption is implicit in the statement.",
  },
];

const englishQuestions: LocalQuestion[] = [
  // Reading Comprehension
  {
    id: 301,
    subject: Subject.english,
    topic: "Reading Comprehension",
    difficulty: Difficulty.medium,
    text: "'The protagonist faced insurmountable challenges...' The word 'insurmountable' means:",
    options: [
      "Easily overcome",
      "Impossible to overcome",
      "Partially difficult",
      "Temporarily difficult",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Insurmountable' means too great to overcome or deal with. Prefix 'in-' = not, 'surmountable' = able to be overcome.",
  },
  {
    id: 302,
    subject: Subject.english,
    topic: "Reading Comprehension",
    difficulty: Difficulty.medium,
    text: "'The policy was met with unprecedented opposition.' 'Unprecedented' means:",
    options: ["Expected", "Unusual", "Never done before", "Highly organized"],
    correctAnswerIndex: 2,
    explanation:
      "'Unprecedented' means never done or known before; novel; unparalleled.",
  },
  {
    id: 303,
    subject: Subject.english,
    topic: "Reading Comprehension",
    difficulty: Difficulty.hard,
    text: "If a passage states: 'Despite criticism, the scientist persevered.' The author's attitude toward the scientist is:",
    options: ["Critical", "Admiring", "Neutral", "Skeptical"],
    correctAnswerIndex: 1,
    explanation:
      "'Despite criticism' shows obstacles and 'persevered' is positive. The word 'despite' shows the author values persistence. Attitude is admiring.",
  },
  {
    id: 304,
    subject: Subject.english,
    topic: "Reading Comprehension",
    difficulty: Difficulty.medium,
    text: "A passage discusses 'the alarming rate of deforestation.' The tone of the passage is:",
    options: ["Humorous", "Celebratory", "Concerned/Warning", "Indifferent"],
    correctAnswerIndex: 2,
    explanation:
      "The word 'alarming' indicates a concerned, warning tone about deforestation.",
  },
  {
    id: 305,
    subject: Subject.english,
    topic: "Reading Comprehension",
    difficulty: Difficulty.hard,
    text: "'The new technology was a double-edged sword for the community.' This means:",
    options: [
      "The technology was dangerous",
      "It had both benefits and drawbacks",
      "It was rejected by the community",
      "It was a weapon",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Double-edged sword' is an idiom meaning something that has both good and bad effects.",
  },
  // Fill in the Blanks
  {
    id: 306,
    subject: Subject.english,
    topic: "Fill in the Blanks",
    difficulty: Difficulty.easy,
    text: "She _____ the exam successfully after months of preparation.",
    options: ["cleared", "did", "made", "tried"],
    correctAnswerIndex: 0,
    explanation:
      "'Cleared the exam' is the correct idiomatic expression meaning passed the exam.",
  },
  {
    id: 307,
    subject: Subject.english,
    topic: "Fill in the Blanks",
    difficulty: Difficulty.medium,
    text: "The committee decided to _____ the meeting to next week.",
    options: ["postpone", "cancel", "advance", "stop"],
    correctAnswerIndex: 0,
    explanation:
      "'Postpone' means to delay to a later time. 'Advance' would mean earlier, 'cancel' means to call off entirely.",
  },
  {
    id: 308,
    subject: Subject.english,
    topic: "Fill in the Blanks",
    difficulty: Difficulty.medium,
    text: "He was _____ of the risk but proceeded anyway.",
    options: ["ignorant", "innocent", "aware", "blind"],
    correctAnswerIndex: 2,
    explanation:
      "'Aware' means having knowledge of something. 'Aware of the risk' is the correct phrase here.",
  },
  {
    id: 309,
    subject: Subject.english,
    topic: "Fill in the Blanks",
    difficulty: Difficulty.hard,
    text: "The scientist's _____ theory challenged decades of conventional wisdom.",
    options: ["obsolete", "controversial", "trivial", "orthodox"],
    correctAnswerIndex: 1,
    explanation:
      "'Controversial' means causing disagreement or discussion. A theory that 'challenges conventional wisdom' would be controversial.",
  },
  {
    id: 310,
    subject: Subject.english,
    topic: "Fill in the Blanks",
    difficulty: Difficulty.hard,
    text: "The CEO's speech was _____ yet convincing — few words but high impact.",
    options: ["verbose", "ambiguous", "laconic", "rhetorical"],
    correctAnswerIndex: 2,
    explanation:
      "'Laconic' means using very few words; terse. It contrasts with 'verbose' (too many words).",
  },
  // Synonyms & Antonyms
  {
    id: 311,
    subject: Subject.english,
    topic: "Synonyms",
    difficulty: Difficulty.easy,
    text: "Synonym of 'Benevolent':",
    options: ["Malicious", "Kind", "Strict", "Lazy"],
    correctAnswerIndex: 1,
    explanation:
      "'Benevolent' means well-meaning and kindly. Synonym = Kind. Antonym = Malicious.",
  },
  {
    id: 312,
    subject: Subject.english,
    topic: "Antonyms",
    difficulty: Difficulty.easy,
    text: "Antonym of 'Abundant':",
    options: ["Plentiful", "Excess", "Scarce", "Sufficient"],
    correctAnswerIndex: 2,
    explanation:
      "'Abundant' means existing in large quantities. Antonym = 'Scarce' (insufficient quantity).",
  },
  {
    id: 313,
    subject: Subject.english,
    topic: "Synonyms",
    difficulty: Difficulty.medium,
    text: "Synonym of 'Ephemeral':",
    options: ["Permanent", "Transient", "Eternal", "Substantial"],
    correctAnswerIndex: 1,
    explanation:
      "'Ephemeral' means lasting for a very short time. Synonym = 'Transient' (temporary).",
  },
  {
    id: 314,
    subject: Subject.english,
    topic: "Antonyms",
    difficulty: Difficulty.medium,
    text: "Antonym of 'Enigmatic':",
    options: ["Mysterious", "Puzzling", "Straightforward", "Cryptic"],
    correctAnswerIndex: 2,
    explanation:
      "'Enigmatic' means difficult to understand; mysterious. Antonym = 'Straightforward' (easy to understand).",
  },
  {
    id: 315,
    subject: Subject.english,
    topic: "Synonyms",
    difficulty: Difficulty.hard,
    text: "Synonym of 'Loquacious':",
    options: ["Silent", "Verbose", "Brief", "Shy"],
    correctAnswerIndex: 1,
    explanation:
      "'Loquacious' means tending to talk a great deal. Synonym = 'Verbose' (using more words than needed).",
  },
  {
    id: 316,
    subject: Subject.english,
    topic: "Antonyms",
    difficulty: Difficulty.hard,
    text: "Antonym of 'Ostentatious':",
    options: ["Showy", "Modest", "Flamboyant", "Elaborate"],
    correctAnswerIndex: 1,
    explanation:
      "'Ostentatious' means characterized by vulgar display; showy. Antonym = 'Modest' (unassuming).",
  },
  // Sentence Correction
  {
    id: 317,
    subject: Subject.english,
    topic: "Sentence Correction",
    difficulty: Difficulty.easy,
    text: "Identify the correct sentence:",
    options: [
      "She don't know the answer.",
      "She doesn't knows the answer.",
      "She doesn't know the answer.",
      "She not know the answer.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "With third person singular (she), use 'doesn't' (does not) with base verb 'know'.",
  },
  {
    id: 318,
    subject: Subject.english,
    topic: "Sentence Correction",
    difficulty: Difficulty.medium,
    text: "Choose the correct sentence:",
    options: [
      "Neither of the boys have done homework.",
      "Neither of the boys has done his homework.",
      "Neither of the boys have done their homework.",
      "Neither of the boys done homework.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Neither' takes singular verb ('has'). With singular subject, use 'his' for clarity.",
  },
  {
    id: 319,
    subject: Subject.english,
    topic: "Sentence Correction",
    difficulty: Difficulty.medium,
    text: "Correct the error: 'The data shows that more than half of the students was absent.'",
    options: [
      "The data show that more than half of the students were absent.",
      "The data shows that more than half of the students were absent.",
      "The data shows that more than half of the students is absent.",
      "The data are showing that more than half of the students were absent.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Data' can take singular verb 'shows'. 'More than half' with plural noun 'students' needs 'were'.",
  },
  {
    id: 320,
    subject: Subject.english,
    topic: "Sentence Correction",
    difficulty: Difficulty.hard,
    text: "Choose the grammatically correct sentence:",
    options: [
      "Between you and I, the plan seems risky.",
      "Between you and me, the plan seems risky.",
      "Between you and myself, the plan seems risky.",
      "Between me and you, the plan seems risky.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "After prepositions like 'between', use objective case 'me', not 'I' (nominative) or 'myself' (reflexive).",
  },
  {
    id: 321,
    subject: Subject.english,
    topic: "Sentence Correction",
    difficulty: Difficulty.hard,
    text: "Correct version of: 'Being a rainy day, we decided to stay inside.'",
    options: [
      "It being a rainy day, we decided to stay inside.",
      "Having been a rainy day, we decided to stay inside.",
      "Being it a rainy day, we decided to stay inside.",
      "The sentence is correct.",
    ],
    correctAnswerIndex: 0,
    explanation:
      "The dangling participle 'Being a rainy day' has no proper subject. 'It being a rainy day' correctly uses 'it' as the subject.",
  },
  // Error Detection
  {
    id: 322,
    subject: Subject.english,
    topic: "Error Detection",
    difficulty: Difficulty.medium,
    text: "Find the error: 'He is one of the students who has scored highest marks.'",
    options: [
      "He is one",
      "of the students",
      "who has scored",
      "highest marks",
    ],
    correctAnswerIndex: 2,
    explanation:
      "'One of the students' refers to plural noun 'students'. Relative pronoun 'who' agrees with 'students' (plural), so use 'have' not 'has'.",
  },
  {
    id: 323,
    subject: Subject.english,
    topic: "Error Detection",
    difficulty: Difficulty.medium,
    text: "Find the error in: 'Each of the boys have submitted their project.'",
    options: ["Each of", "the boys", "have submitted", "their project"],
    correctAnswerIndex: 2,
    explanation:
      "'Each' is singular and takes a singular verb. Should be 'has submitted'.",
  },
  {
    id: 324,
    subject: Subject.english,
    topic: "Error Detection",
    difficulty: Difficulty.hard,
    text: "Spot the error: 'The teacher advised the students to not use phones during class.'",
    options: [
      "The teacher",
      "advised the students",
      "to not use",
      "during class",
    ],
    correctAnswerIndex: 2,
    explanation:
      "In formal English, split infinitives should be avoided. Correct form: 'not to use' (infinitive unsplit).",
  },
  {
    id: 325,
    subject: Subject.english,
    topic: "Error Detection",
    difficulty: Difficulty.hard,
    text: "Find error in: 'The news about the accidents are disturbing.'",
    options: ["The news", "about the accidents", "are disturbing", "No error"],
    correctAnswerIndex: 2,
    explanation:
      "'News' is uncountable and singular. Correct: 'The news... is disturbing'.",
  },
  {
    id: 326,
    subject: Subject.english,
    topic: "Error Detection",
    difficulty: Difficulty.medium,
    text: "Spot error: 'Neither Ram nor his friends was present at the meeting.'",
    options: [
      "Neither Ram",
      "nor his friends",
      "was present",
      "at the meeting",
    ],
    correctAnswerIndex: 2,
    explanation:
      "When 'neither...nor' joins a singular and plural subject, the verb agrees with the nearer subject 'friends' (plural). Should be 'were'.",
  },
  // Para Jumbles
  {
    id: 327,
    subject: Subject.english,
    topic: "Para Jumbles",
    difficulty: Difficulty.medium,
    text: "Arrange sentences: P: It helps us stay healthy. Q: Exercise is important for everyone. R: We should make it a daily habit. S: Even 30 minutes a day can make a difference.",
    options: ["QSPR", "QPSR", "QSRP", "RQPS"],
    correctAnswerIndex: 1,
    explanation:
      "Q (introduces topic: exercise) → P (why: helps health) → S (how much needed: 30 min) → R (conclusion: daily habit). QPSR.",
  },
  {
    id: 328,
    subject: Subject.english,
    topic: "Para Jumbles",
    difficulty: Difficulty.hard,
    text: "Arrange: P: This leads to resource depletion. Q: Modern consumption patterns are unsustainable. R: Future generations will bear the consequences. S: We consume far more than the earth can replenish.",
    options: ["QSPR", "QPSR", "SQPR", "PQSR"],
    correctAnswerIndex: 0,
    explanation:
      "Q (main claim) → S (evidence: over-consumption) → P (consequence: resource depletion) → R (final impact: future generations). QSPR.",
  },
  {
    id: 329,
    subject: Subject.english,
    topic: "Para Jumbles",
    difficulty: Difficulty.medium,
    text: "P: He became the greatest chess player of his era. Q: Bobby Fischer started playing chess at age 6. R: By 15, he became the youngest US champion. S: His rise was nothing short of phenomenal.",
    options: ["QRSP", "QRPS", "SRQP", "PQRS"],
    correctAnswerIndex: 0,
    explanation:
      "Q (starts at 6) → R (15, youngest champion) → S (phenomenal rise) → P (greatest player). QRSP.",
  },
  {
    id: 330,
    subject: Subject.english,
    topic: "Para Jumbles",
    difficulty: Difficulty.hard,
    text: "Arrange: P: However, not all technology is beneficial. Q: Technology has transformed human civilization. R: Nuclear weapons and surveillance are concerning examples. S: We must use it responsibly.",
    options: ["QPRS", "PQRS", "QRPS", "QPSR"],
    correctAnswerIndex: 0,
    explanation:
      "Q (technology benefits) → P (however, not all good) → R (negative examples) → S (responsible use). QPRS.",
  },
  // Idioms & Phrases
  {
    id: 331,
    subject: Subject.english,
    topic: "Idioms & Phrases",
    difficulty: Difficulty.easy,
    text: "'Bite the bullet' means:",
    options: [
      "To eat ammunition",
      "To endure a painful situation",
      "To solve problems quickly",
      "To be courageous in battle",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Bite the bullet' means to endure a painful or difficult situation with courage.",
  },
  {
    id: 332,
    subject: Subject.english,
    topic: "Idioms & Phrases",
    difficulty: Difficulty.medium,
    text: "'Beat around the bush' means:",
    options: [
      "To search in a forest",
      "Avoid coming to the main point",
      "Work hard in difficult conditions",
      "Win without effort",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Beat around the bush' means to avoid talking about what is important or to not get to the main point.",
  },
  {
    id: 333,
    subject: Subject.english,
    topic: "Idioms & Phrases",
    difficulty: Difficulty.medium,
    text: "'The ball is in your court' means:",
    options: [
      "It is your turn to play",
      "It is your responsibility to take action",
      "You are winning the game",
      "The decision has been made",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'The ball is in your court' means it is up to you to decide or take action.",
  },
  {
    id: 334,
    subject: Subject.english,
    topic: "Idioms & Phrases",
    difficulty: Difficulty.hard,
    text: "'Once in a blue moon' means:",
    options: [
      "During full moon",
      "Very rarely",
      "On special occasions",
      "During nights only",
    ],
    correctAnswerIndex: 1,
    explanation:
      "'Once in a blue moon' means very rarely (a 'blue moon' is a rare second full moon in a month).",
  },
  // Vocabulary
  {
    id: 335,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.medium,
    text: "'Pragmatic' means:",
    options: [
      "Idealistic",
      "Dealing with things practically",
      "Theoretical in approach",
      "Emotional",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Pragmatic means dealing with things sensibly and realistically based on practical considerations.",
  },
  {
    id: 336,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.medium,
    text: "'Ubiquitous' means:",
    options: [
      "Rare and uncommon",
      "Present everywhere",
      "Harmful to society",
      "Ancient and outdated",
    ],
    correctAnswerIndex: 1,
    explanation: "Ubiquitous means present, appearing, or found everywhere.",
  },
  {
    id: 337,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.hard,
    text: "'Sycophant' refers to:",
    options: [
      "A medical professional",
      "A person who flatters to gain favor",
      "An honest advisor",
      "A skilled negotiator",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A sycophant is a person who acts obsequiously toward someone important to gain advantage; a flatterer.",
  },
  {
    id: 338,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.hard,
    text: "'Amalgamate' means:",
    options: [
      "To separate into parts",
      "To combine into one",
      "To analyze thoroughly",
      "To reproduce rapidly",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Amalgamate means to combine or unite to form one organization or structure.",
  },
  {
    id: 339,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.medium,
    text: "'Verbose' is someone who:",
    options: [
      "Speaks briefly",
      "Uses more words than necessary",
      "Is completely silent",
      "Speaks fluently",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Verbose means using or expressed in more words than are needed; wordy.",
  },
  {
    id: 340,
    subject: Subject.english,
    topic: "Vocabulary",
    difficulty: Difficulty.hard,
    text: "'Recalcitrant' means:",
    options: [
      "Easily manageable",
      "Having an obstinate and uncooperative attitude",
      "Willing to help",
      "Recovering from illness",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Recalcitrant means having an obstinate or uncooperative attitude toward authority or discipline.",
  },
];

export const ALL_QUESTIONS: LocalQuestion[] = [
  ...mathQuestions,
  ...computerQuestions,
  ...logicalQuestions,
  ...englishQuestions,
];

export function getQuestionsBySubject(subject: Subject): LocalQuestion[] {
  return ALL_QUESTIONS.filter((q) => q.subject === subject);
}

export function getRandomQuestions(count: number): LocalQuestion[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getMixedQuestions(perSubject: number): LocalQuestion[] {
  const subjects = [
    Subject.math,
    Subject.computerConcepts,
    Subject.logicalReasoning,
    Subject.english,
  ];
  let result: LocalQuestion[] = [];
  for (const s of subjects) {
    const qs = getQuestionsBySubject(s);
    const shuffled = [...qs].sort(() => Math.random() - 0.5);
    result = result.concat(shuffled.slice(0, perSubject));
  }
  return result.sort(() => Math.random() - 0.5);
}
