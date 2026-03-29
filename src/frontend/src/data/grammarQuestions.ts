export interface GrammarQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = [
  // --- HIGH-FREQUENCY VOCABULARY (Q1–25) ---
  {
    id: 1,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'AMELIORATE'.",
    options: ["Worsen", "Improve", "Ignore", "Delay"],
    correctIndex: 1,
    explanation:
      "'Ameliorate' means to make something bad or unsatisfactory better. Antonym: worsen.",
  },
  {
    id: 2,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'PERSPICACIOUS'.",
    options: ["Confused", "Arrogant", "Shrewd", "Timid"],
    correctIndex: 2,
    explanation:
      "'Perspicacious' means having a ready insight into things; shrewdly perceptive.",
  },
  {
    id: 3,
    topic: "Vocabulary",
    question: "Select the antonym of 'LOQUACIOUS'.",
    options: ["Talkative", "Reticent", "Verbose", "Eloquent"],
    correctIndex: 1,
    explanation:
      "'Loquacious' means very talkative; its antonym is 'reticent' (not revealing one's thoughts).",
  },
  {
    id: 4,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'EPHEMERAL'.",
    options: ["Permanent", "Transient", "Strong", "Detailed"],
    correctIndex: 1,
    explanation: "'Ephemeral' means lasting for a very short time — transient.",
  },
  {
    id: 5,
    topic: "Vocabulary",
    question: "Select the antonym of 'BENEVOLENT'.",
    options: ["Generous", "Kind", "Malevolent", "Charitable"],
    correctIndex: 2,
    explanation:
      "'Benevolent' means well-meaning and kindly; its antonym is 'malevolent' (having evil intent).",
  },
  {
    id: 6,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'VERBOSE'.",
    options: ["Brief", "Wordy", "Clear", "Silent"],
    correctIndex: 1,
    explanation:
      "'Verbose' means using or expressed in more words than are needed — wordy.",
  },
  {
    id: 7,
    topic: "Vocabulary",
    question: "Select the antonym of 'FRUGAL'.",
    options: ["Thrifty", "Economical", "Extravagant", "Careful"],
    correctIndex: 2,
    explanation:
      "'Frugal' means sparing or economical; antonym is 'extravagant' (spending excessively).",
  },
  {
    id: 8,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'ACRIMONIOUS'.",
    options: ["Bitter", "Sweet", "Calm", "Polite"],
    correctIndex: 0,
    explanation:
      "'Acrimonious' means typically of speech or manner, angry and bitter — synonymous with bitter.",
  },
  {
    id: 9,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'COGENT'.",
    options: ["Weak", "Convincing", "Vague", "Simple"],
    correctIndex: 1,
    explanation: "'Cogent' means clear, logical, and convincing.",
  },
  {
    id: 10,
    topic: "Vocabulary",
    question: "Select the antonym of 'DILIGENT'.",
    options: ["Hardworking", "Careful", "Lazy", "Punctual"],
    correctIndex: 2,
    explanation:
      "'Diligent' means having or showing care in one's work; antonym is 'lazy'.",
  },
  {
    id: 11,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'PAUCITY'.",
    options: ["Abundance", "Scarcity", "Excess", "Plenty"],
    correctIndex: 1,
    explanation:
      "'Paucity' means the presence of something in only small or insufficient quantities — scarcity.",
  },
  {
    id: 12,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'TENACIOUS'.",
    options: ["Weak", "Persistent", "Flexible", "Careless"],
    correctIndex: 1,
    explanation:
      "'Tenacious' means tending to keep a firm hold of something; persistent.",
  },
  {
    id: 13,
    topic: "Vocabulary",
    question: "Select the antonym of 'CANDID'.",
    options: ["Frank", "Honest", "Evasive", "Open"],
    correctIndex: 2,
    explanation:
      "'Candid' means truthful and straightforward; antonym is 'evasive'.",
  },
  {
    id: 14,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'INTREPID'.",
    options: ["Fearful", "Cowardly", "Brave", "Nervous"],
    correctIndex: 2,
    explanation: "'Intrepid' means fearless; adventurously courageous — brave.",
  },
  {
    id: 15,
    topic: "Vocabulary",
    question: "Select the antonym of 'OPAQUE'.",
    options: ["Dark", "Transparent", "Dense", "Thick"],
    correctIndex: 1,
    explanation:
      "'Opaque' means not able to be seen through; antonym is 'transparent'.",
  },
  {
    id: 16,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'PRUDENT'.",
    options: ["Reckless", "Wise", "Impulsive", "Dull"],
    correctIndex: 1,
    explanation:
      "'Prudent' means acting with or showing care and thought for the future — wise.",
  },
  {
    id: 17,
    topic: "Vocabulary",
    question: "Select the antonym of 'TRIVIAL'.",
    options: ["Minor", "Unimportant", "Significant", "Common"],
    correctIndex: 2,
    explanation:
      "'Trivial' means of little value or importance; antonym is 'significant'.",
  },
  {
    id: 18,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'ZEAL'.",
    options: ["Apathy", "Enthusiasm", "Calm", "Laziness"],
    correctIndex: 1,
    explanation:
      "'Zeal' means great energy or enthusiasm in pursuit of a cause — enthusiasm.",
  },
  {
    id: 19,
    topic: "Vocabulary",
    question: "Select the antonym of 'OBSCURE'.",
    options: ["Hidden", "Vague", "Clear", "Dark"],
    correctIndex: 2,
    explanation:
      "'Obscure' means not discovered or known about; antonym is 'clear'.",
  },
  {
    id: 20,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'DEBILITATE'.",
    options: ["Strengthen", "Weaken", "Energize", "Motivate"],
    correctIndex: 1,
    explanation: "'Debilitate' means to make someone weak and infirm — weaken.",
  },
  {
    id: 21,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'MAGNANIMOUS'.",
    options: ["Petty", "Generous", "Cruel", "Selfish"],
    correctIndex: 1,
    explanation:
      "'Magnanimous' means generous or forgiving, especially towards a rival — generous.",
  },
  {
    id: 22,
    topic: "Vocabulary",
    question: "Select the antonym of 'GARRULOUS'.",
    options: ["Talkative", "Chatty", "Taciturn", "Verbose"],
    correctIndex: 2,
    explanation:
      "'Garrulous' means excessively talkative; antonym is 'taciturn' (reserved in speech).",
  },
  {
    id: 23,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'INSOLENT'.",
    options: ["Respectful", "Rude", "Timid", "Polite"],
    correctIndex: 1,
    explanation:
      "'Insolent' means showing a rude and arrogant lack of respect — rude.",
  },
  {
    id: 24,
    topic: "Vocabulary",
    question: "Select the antonym of 'IMPEDE'.",
    options: ["Block", "Hinder", "Facilitate", "Obstruct"],
    correctIndex: 2,
    explanation:
      "'Impede' means to delay or prevent; antonym is 'facilitate' (make easy).",
  },
  {
    id: 25,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'AMBIGUOUS'.",
    options: ["Clear", "Definite", "Equivocal", "Specific"],
    correctIndex: 2,
    explanation:
      "'Ambiguous' means open to more than one interpretation — equivocal.",
  },

  // --- GRAMMAR (Q26–55) ---
  {
    id: 26,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "Neither the students nor the teacher were present.",
      "Neither the students nor the teacher was present.",
      "Neither the students nor the teacher are present.",
      "Neither the students nor the teacher is present.",
    ],
    correctIndex: 1,
    explanation:
      "When 'neither…nor' is used, the verb agrees with the noun closest to it. 'Teacher' is singular, so 'was' is correct.",
  },
  {
    id: 27,
    topic: "Grammar",
    question:
      "Identify the error: 'She is one of those students who works hard.'",
    options: ["She is", "one of those", "students who", "works hard"],
    correctIndex: 3,
    explanation:
      "The antecedent of 'who' is 'students' (plural), so the verb should be 'work', not 'works'.",
  },
  {
    id: 28,
    topic: "Grammar",
    question: "Fill in the blank: 'He has been working here ___ 2010.'",
    options: ["for", "since", "from", "during"],
    correctIndex: 1,
    explanation:
      "'Since' is used with a specific point in time (2010); 'for' is used with a duration.",
  },
  {
    id: 29,
    topic: "Grammar",
    question:
      "Choose the correct passive form of: 'They are building a new bridge.'",
    options: [
      "A new bridge has been built.",
      "A new bridge is being built.",
      "A new bridge was being built.",
      "A new bridge will be built.",
    ],
    correctIndex: 1,
    explanation:
      "Present continuous active → passive = 'is/are being + past participle'.",
  },
  {
    id: 30,
    topic: "Grammar",
    question: "Identify the correct sentence.",
    options: [
      "The committee have reached their decision.",
      "The committee has reached their decision.",
      "The committee has reached its decision.",
      "The committee have reached its decision.",
    ],
    correctIndex: 2,
    explanation:
      "'Committee' is a collective noun treated as singular in formal usage; 'has' and 'its' are correct.",
  },
  {
    id: 31,
    topic: "Grammar",
    question: "Fill in: 'If I ___ a bird, I would fly high.'",
    options: ["am", "was", "were", "is"],
    correctIndex: 2,
    explanation:
      "Hypothetical/unreal conditions use 'were' (subjunctive) for all persons.",
  },
  {
    id: 32,
    topic: "Grammar",
    question:
      "Identify the part with an error: 'The price of these commodities have risen sharply.'",
    options: ["The price", "of these commodities", "have risen", "sharply"],
    correctIndex: 2,
    explanation:
      "The subject is 'price' (singular), so the verb should be 'has risen' not 'have risen'.",
  },
  {
    id: 33,
    topic: "Grammar",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "Its a sunny day.",
      "It's a sunny day.",
      "Its' a sunny day.",
      "It' s a sunny day.",
    ],
    correctIndex: 1,
    explanation:
      "'It's' is the contraction of 'it is'. 'Its' is the possessive pronoun.",
  },
  {
    id: 34,
    topic: "Grammar",
    question:
      "Select the correct indirect speech: 'He said, \"I will come tomorrow.\"'",
    options: [
      "He said that he will come the next day.",
      "He said that he would come the next day.",
      "He said that he will come tomorrow.",
      "He said that I would come the next day.",
    ],
    correctIndex: 1,
    explanation:
      "In indirect speech, 'will' changes to 'would', and 'tomorrow' changes to 'the next day'.",
  },
  {
    id: 35,
    topic: "Grammar",
    question: "Fill in: 'She was tired, ___ she continued to work.'",
    options: ["so", "because", "yet", "for"],
    correctIndex: 2,
    explanation:
      "'Yet' is used as a coordinating conjunction to show contrast — similar to 'but'.",
  },
  {
    id: 36,
    topic: "Grammar",
    question:
      "Choose the correct form: 'By the time he arrives, we ___ dinner.'",
    options: ["will finish", "will have finished", "have finished", "finished"],
    correctIndex: 1,
    explanation:
      "Future perfect tense is used for an action that will be completed before a future point.",
  },
  {
    id: 37,
    topic: "Grammar",
    question: "Identify the error: 'He plays cricket good.'",
    options: ["He", "plays", "cricket", "good"],
    correctIndex: 3,
    explanation:
      "'Good' is an adjective; the adverb 'well' should be used to modify the verb 'plays'.",
  },
  {
    id: 38,
    topic: "Grammar",
    question: "Choose the correct preposition: 'She is allergic ___ dust.'",
    options: ["from", "with", "to", "by"],
    correctIndex: 2,
    explanation: "The correct collocation is 'allergic to'.",
  },
  {
    id: 39,
    topic: "Grammar",
    question: "Identify the correct sentence.",
    options: [
      "Each of the boys have completed the task.",
      "Each of the boys has completed the task.",
      "Each of the boys completed the task together.",
      "Each of the boys have been completing the task.",
    ],
    correctIndex: 1,
    explanation: "'Each' takes a singular verb — 'has'.",
  },
  {
    id: 40,
    topic: "Grammar",
    question: "Fill in: 'I would rather you ___ silent.'",
    options: ["remain", "remained", "have remained", "will remain"],
    correctIndex: 1,
    explanation:
      "After 'would rather', the subjunctive past is used: 'remained'.",
  },
  {
    id: 41,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "He gave me an useful advice.",
      "He gave me a useful advice.",
      "He gave me useful advice.",
      "He gave me the useful advices.",
    ],
    correctIndex: 2,
    explanation:
      "'Advice' is an uncountable noun — no article or plural form. Correct: 'useful advice'.",
  },
  {
    id: 42,
    topic: "Grammar",
    question: "Identify the sentence with a dangling modifier.",
    options: [
      "Walking through the park, the birds sang.",
      "Walking through the park, she heard birds sing.",
      "She was walking through the park while birds sang.",
      "As she walked, she heard birds sing.",
    ],
    correctIndex: 0,
    explanation:
      "In option A, 'walking through the park' refers to 'the birds', which doesn't make sense — dangling modifier.",
  },
  {
    id: 43,
    topic: "Grammar",
    question: "Fill in: 'No sooner had she left ___ it started raining.'",
    options: ["when", "then", "than", "that"],
    correctIndex: 2,
    explanation: "The correct idiom is 'No sooner… than'.",
  },
  {
    id: 44,
    topic: "Grammar",
    question: "Identify the voice: 'The cake was eaten by the children.'",
    options: ["Active Voice", "Passive Voice", "Interrogative", "Imperative"],
    correctIndex: 1,
    explanation:
      "The subject 'cake' receives the action — this is passive voice.",
  },
  {
    id: 45,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "The news are shocking.",
      "The news is shocking.",
      "The news were shocking.",
      "The news have shocked.",
    ],
    correctIndex: 1,
    explanation:
      "'News' is an uncountable noun that takes a singular verb — 'is'.",
  },
  {
    id: 46,
    topic: "Grammar",
    question: "Fill in: 'The letter ___ yesterday.'",
    options: ["was sent", "is sent", "sent", "will send"],
    correctIndex: 0,
    explanation:
      "'Yesterday' indicates simple past; passive form is 'was sent'.",
  },
  {
    id: 47,
    topic: "Grammar",
    question: "Identify the error: 'He is more smarter than his brother.'",
    options: ["He is", "more smarter", "than his", "brother"],
    correctIndex: 1,
    explanation:
      "Double comparatives are incorrect. 'Smarter' already is comparative; 'more' is redundant.",
  },
  {
    id: 48,
    topic: "Grammar",
    question: "Choose the correct form of question tag: 'She can swim, ___?'",
    options: ["can she", "can't she", "couldn't she", "isn't she"],
    correctIndex: 1,
    explanation:
      "Positive statement → negative question tag: 'can' → 'can't she'.",
  },
  {
    id: 49,
    topic: "Grammar",
    question: "Fill in: 'I look forward to ___ from you.'",
    options: ["hear", "heard", "hearing", "have heard"],
    correctIndex: 2,
    explanation:
      "'Look forward to' is followed by a gerund (verb+ing) — 'hearing'.",
  },
  {
    id: 50,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "Mathematics are an interesting subject.",
      "Mathematics is an interesting subject.",
      "Mathematics were an interesting subject.",
      "Mathematics have been an interesting subject.",
    ],
    correctIndex: 1,
    explanation:
      "Subjects ending in -ics (Mathematics, Physics, etc.) take singular verbs.",
  },
  {
    id: 51,
    topic: "Grammar",
    question: "Identify the tense: 'She had been studying for three hours.'",
    options: [
      "Past Perfect",
      "Past Continuous",
      "Past Perfect Continuous",
      "Simple Past",
    ],
    correctIndex: 2,
    explanation:
      "Had + been + V-ing = Past Perfect Continuous, showing ongoing action before a past point.",
  },
  {
    id: 52,
    topic: "Grammar",
    question: "Fill in: 'She is ___ European.'",
    options: ["a", "an", "the", "no article"],
    correctIndex: 0,
    explanation:
      "'European' begins with a consonant sound /j/ (yoo), so use 'a', not 'an'.",
  },
  {
    id: 53,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "Either the boys or the girl have to go.",
      "Either the boys or the girl has to go.",
      "Either the boys or the girl is to go.",
      "Either the boys or the girl are to go.",
    ],
    correctIndex: 1,
    explanation:
      "With 'either…or', the verb agrees with the noun closest to it — 'girl' is singular, so 'has'.",
  },
  {
    id: 54,
    topic: "Grammar",
    question:
      "Identify the correct exclamatory form of: 'It is a very beautiful painting.'",
    options: [
      "What beautiful a painting it is!",
      "What a beautiful painting it is!",
      "How beautiful painting it is!",
      "How a beautiful painting it is!",
    ],
    correctIndex: 1,
    explanation:
      "'What + a/an + adjective + noun' is the correct exclamatory structure.",
  },
  {
    id: 55,
    topic: "Grammar",
    question:
      "Fill in: 'The teacher, along with her students, ___ going on a trip.'",
    options: ["are", "were", "is", "have been"],
    correctIndex: 2,
    explanation:
      "'Along with' is a parenthetical phrase; the subject 'teacher' is singular → 'is'.",
  },

  // --- IDIOMS AND PHRASES (Q56–70) ---
  {
    id: 56,
    topic: "Idioms & Phrases",
    question: "What does 'Bite the bullet' mean?",
    options: [
      "To avoid a problem",
      "To endure a painful situation bravely",
      "To act aggressively",
      "To give up easily",
    ],
    correctIndex: 1,
    explanation:
      "'Bite the bullet' means to endure a painful or difficult situation with courage.",
  },
  {
    id: 57,
    topic: "Idioms & Phrases",
    question: "What does 'Burn the midnight oil' mean?",
    options: [
      "To waste energy",
      "To light a fire at night",
      "To work late into the night",
      "To be careless",
    ],
    correctIndex: 2,
    explanation:
      "'Burn the midnight oil' means to stay up and work late at night.",
  },
  {
    id: 58,
    topic: "Idioms & Phrases",
    question: "What does 'A blessing in disguise' mean?",
    options: [
      "A hidden curse",
      "Something that appears bad but is actually good",
      "A lie told kindly",
      "An unexpected problem",
    ],
    correctIndex: 1,
    explanation:
      "A blessing in disguise = something that seems negative at first but has a positive effect.",
  },
  {
    id: 59,
    topic: "Idioms & Phrases",
    question: "What does 'Hit the nail on the head' mean?",
    options: [
      "To make a mistake",
      "To be exactly right about something",
      "To work hard",
      "To hurt someone",
    ],
    correctIndex: 1,
    explanation:
      "'Hit the nail on the head' means to describe exactly what is causing a situation or problem.",
  },
  {
    id: 60,
    topic: "Idioms & Phrases",
    question: "What does 'Let the cat out of the bag' mean?",
    options: [
      "To cause confusion",
      "To release an animal",
      "To reveal a secret accidentally",
      "To start an argument",
    ],
    correctIndex: 2,
    explanation:
      "'Let the cat out of the bag' means to accidentally disclose a secret.",
  },
  {
    id: 61,
    topic: "Idioms & Phrases",
    question: "What does 'Spill the beans' mean?",
    options: [
      "To make a mess",
      "To reveal secret information",
      "To cook food",
      "To create a problem",
    ],
    correctIndex: 1,
    explanation:
      "'Spill the beans' means to reveal secret or confidential information.",
  },
  {
    id: 62,
    topic: "Idioms & Phrases",
    question: "What does 'Once in a blue moon' mean?",
    options: ["Every day", "At nighttime", "Rarely", "Frequently"],
    correctIndex: 2,
    explanation: "'Once in a blue moon' means very rarely — almost never.",
  },
  {
    id: 63,
    topic: "Idioms & Phrases",
    question: "What does 'Under the weather' mean?",
    options: [
      "Outdoors in rain",
      "Feeling ill or unwell",
      "Being upset about the climate",
      "Being adventurous",
    ],
    correctIndex: 1,
    explanation: "'Under the weather' means feeling slightly ill.",
  },
  {
    id: 64,
    topic: "Idioms & Phrases",
    question: "What does 'Beat around the bush' mean?",
    options: [
      "To discuss clearly",
      "To avoid coming to the main point",
      "To take a walk in the forest",
      "To be aggressive",
    ],
    correctIndex: 1,
    explanation:
      "'Beat around the bush' means to avoid talking about what is important.",
  },
  {
    id: 65,
    topic: "Idioms & Phrases",
    question: "What does 'Break the ice' mean?",
    options: [
      "To physically break something",
      "To begin a conversation in an awkward situation",
      "To cool down anger",
      "To destroy something",
    ],
    correctIndex: 1,
    explanation:
      "'Break the ice' means to do something to ease tension or start conversation in a social setting.",
  },
  {
    id: 66,
    topic: "Idioms & Phrases",
    question: "'Cost an arm and a leg' means:",
    options: [
      "To cause physical harm",
      "To be very expensive",
      "To save money",
      "To work hard",
    ],
    correctIndex: 1,
    explanation:
      "'Cost an arm and a leg' is an idiom meaning something is extremely expensive.",
  },
  {
    id: 67,
    topic: "Idioms & Phrases",
    question: "'Kill two birds with one stone' means:",
    options: [
      "To harm animals",
      "To do one thing that solves two problems",
      "To waste time on two tasks",
      "To be cruel",
    ],
    correctIndex: 1,
    explanation:
      "'Kill two birds with one stone' means to accomplish two things with a single action.",
  },
  {
    id: 68,
    topic: "Idioms & Phrases",
    question: "'Bite off more than you can chew' means:",
    options: [
      "To eat too fast",
      "To take on more responsibility than you can handle",
      "To speak without thinking",
      "To finish a task quickly",
    ],
    correctIndex: 1,
    explanation:
      "This idiom means to take on a commitment that is too much for you to handle.",
  },
  {
    id: 69,
    topic: "Idioms & Phrases",
    question: "'The ball is in your court' means:",
    options: [
      "It is your turn to take action",
      "A sports event is happening",
      "You have no responsibility",
      "Someone else has the power",
    ],
    correctIndex: 0,
    explanation:
      "'The ball is in your court' means it is your decision or responsibility to act next.",
  },
  {
    id: 70,
    topic: "Idioms & Phrases",
    question: "'Hit the sack' means:",
    options: [
      "To attack someone",
      "To go to bed",
      "To start work",
      "To remove something",
    ],
    correctIndex: 1,
    explanation: "'Hit the sack' is an informal idiom meaning to go to sleep.",
  },

  // --- READING COMPREHENSION STRATEGY (Q71–85) ---
  {
    id: 71,
    topic: "RC Strategy",
    question: "In the Skim & Scan technique, 'skimming' is used to:",
    options: [
      "Find specific data like dates and numbers",
      "Get a general overview of the passage",
      "Memorize every word",
      "Read the passage backward",
    ],
    correctIndex: 1,
    explanation:
      "Skimming involves reading quickly to get the main idea or gist of the passage.",
  },
  {
    id: 72,
    topic: "RC Strategy",
    question: "'Scanning' in reading comprehension is primarily used to:",
    options: [
      "Understand the theme of the passage",
      "Read each sentence carefully",
      "Find specific information quickly",
      "Summarize the passage",
    ],
    correctIndex: 2,
    explanation:
      "Scanning means moving your eyes quickly over the text to locate specific information.",
  },
  {
    id: 73,
    topic: "RC Strategy",
    question: "The main idea of a passage is most likely found in:",
    options: [
      "The last sentence of the last paragraph",
      "The topic sentence of the first or last paragraph",
      "The middle sentences of every paragraph",
      "The title alone",
    ],
    correctIndex: 1,
    explanation:
      "The topic sentence, usually at the beginning or end of the first paragraph, carries the main idea.",
  },
  {
    id: 74,
    topic: "RC Strategy",
    question:
      "When the question asks for the 'tone' of the passage, you should look for:",
    options: [
      "Dates and statistics",
      "The author's attitude or emotion toward the subject",
      "The number of paragraphs",
      "Proper nouns",
    ],
    correctIndex: 1,
    explanation:
      "Tone questions require identifying the author's attitude — whether it is critical, appreciative, neutral, etc.",
  },
  {
    id: 75,
    topic: "RC Strategy",
    question: "A 'inferential' question in RC requires you to:",
    options: [
      "Copy the answer directly from the passage",
      "Read between the lines and draw a conclusion",
      "Count sentences",
      "Rewrite the passage",
    ],
    correctIndex: 1,
    explanation:
      "Inferential questions require understanding what is implied but not directly stated.",
  },
  {
    id: 76,
    topic: "RC Strategy",
    question: "Para-identification refers to:",
    options: [
      "Identifying which paragraph answers a specific question",
      "Writing a new paragraph",
      "Finding the number of paragraphs",
      "Checking grammar in a paragraph",
    ],
    correctIndex: 0,
    explanation:
      "Para-identification is a strategy to quickly map which paragraph contains the answer to a given question.",
  },
  {
    id: 77,
    topic: "RC Strategy",
    question: "Answer mapping in RC passages means:",
    options: [
      "Drawing a diagram of the passage",
      "Linking each question to the relevant part of the passage",
      "Writing answers in a map format",
      "Summarizing the passage",
    ],
    correctIndex: 1,
    explanation:
      "Answer mapping involves annotating or mentally noting which parts of the passage correspond to which questions.",
  },
  {
    id: 78,
    topic: "RC Strategy",
    question: "When answering vocabulary-in-context questions, you should:",
    options: [
      "Use the dictionary meaning only",
      "Check how the word is used in context and pick the best fit",
      "Always choose the most common meaning",
      "Skip these questions",
    ],
    correctIndex: 1,
    explanation:
      "Vocabulary-in-context questions require selecting the meaning that best fits the passage's context.",
  },
  {
    id: 79,
    topic: "RC Strategy",
    question:
      "If asked 'The author's primary purpose is...', you are being asked about the:",
    options: [
      "Setting of the passage",
      "Central intention behind writing the passage",
      "Length of the passage",
      "Grammar of the passage",
    ],
    correctIndex: 1,
    explanation:
      "The author's purpose could be to inform, persuade, entertain, or describe — you must identify the central intent.",
  },
  {
    id: 80,
    topic: "RC Strategy",
    question: "A 'global' question in RC asks about:",
    options: [
      "A specific sentence",
      "The passage as a whole — main idea, title, summary",
      "Geographic information",
      "A single word",
    ],
    correctIndex: 1,
    explanation:
      "Global questions test your understanding of the entire passage — its main idea, theme, or best title.",
  },
  {
    id: 81,
    topic: "RC Strategy",
    question: "The best approach before attempting RC questions is to:",
    options: [
      "Read all questions first, then skim the passage",
      "Read the passage deeply word by word before looking at questions",
      "Guess directly from options",
      "Read only the last paragraph",
    ],
    correctIndex: 0,
    explanation:
      "Reading questions first helps you know what to look for while reading, making it more efficient.",
  },
  {
    id: 82,
    topic: "RC Strategy",
    question: "An 'explicit' question in RC has an answer that is:",
    options: [
      "Hidden and must be inferred",
      "Directly stated in the passage",
      "Based on your opinion",
      "Not found in the passage",
    ],
    correctIndex: 1,
    explanation:
      "Explicit questions have answers that are directly and clearly stated in the passage text.",
  },
  {
    id: 83,
    topic: "RC Strategy",
    question: "In RC, a 'critical' or 'evaluative' question asks you to:",
    options: [
      "Copy text from the passage",
      "Assess the strength or validity of the author's argument",
      "Count words",
      "Rewrite the passage",
    ],
    correctIndex: 1,
    explanation:
      "Evaluative questions ask you to judge or critique the author's reasoning, evidence, or claims.",
  },
  {
    id: 84,
    topic: "RC Strategy",
    question: "The 'title' of a passage should best reflect:",
    options: [
      "The first sentence of the passage",
      "The last sentence of the passage",
      "The central idea of the entire passage",
      "A supporting detail",
    ],
    correctIndex: 2,
    explanation:
      "The best title captures the central theme or main idea of the entire passage.",
  },
  {
    id: 85,
    topic: "RC Strategy",
    question: "When a passage uses 'however' or 'nevertheless', it signals:",
    options: [
      "Agreement with the previous point",
      "A contrast or contradiction to what was said before",
      "A factual statement",
      "A conclusion",
    ],
    correctIndex: 1,
    explanation:
      "Transition words like 'however' and 'nevertheless' indicate a shift or contrast in the argument.",
  },

  // --- READING COMPREHENSION PASSAGE (Q86–100) ---
  {
    id: 86,
    topic: "Reading Comprehension",
    question:
      "Read: 'Technology has transformed the way people communicate, making the world more connected. However, many argue that digital communication lacks the depth and warmth of face-to-face interaction. Despite this, its convenience is undeniable.'\n\nWhat is the main idea of the passage?",
    options: [
      "Technology is harmful to society",
      "Technology has improved communication but may lack human depth",
      "Face-to-face communication is obsolete",
      "Digital communication is perfect",
    ],
    correctIndex: 1,
    explanation:
      "The passage acknowledges the benefits (connectivity, convenience) while noting drawbacks (lack of depth) — a balanced view.",
  },
  {
    id: 87,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q86, the word 'undeniable' most closely means:",
    options: ["Questionable", "Debatable", "Unquestionable", "Hidden"],
    correctIndex: 2,
    explanation:
      "'Undeniable' means unable to be denied or disputed — unquestionable.",
  },
  {
    id: 88,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q86, what is the tone of the author?",
    options: [
      "Strongly critical",
      "Strongly supportive",
      "Balanced and objective",
      "Humorous",
    ],
    correctIndex: 2,
    explanation:
      "The author presents both pros and cons without taking a strong stance — the tone is balanced and objective.",
  },
  {
    id: 89,
    topic: "Reading Comprehension",
    question:
      "Read: 'Education is the most powerful weapon which you can use to change the world. It empowers individuals, drives economic growth, and fosters social equality.'\n\nWhich title best fits this passage?",
    options: [
      "Economic Policies",
      "The Power of Education",
      "Weapons and War",
      "Social Problems",
    ],
    correctIndex: 1,
    explanation:
      "The passage discusses how education changes the world — 'The Power of Education' captures this theme.",
  },
  {
    id: 90,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q89, education fosters which of the following?",
    options: ["Violence", "Economic decline", "Social equality", "Ignorance"],
    correctIndex: 2,
    explanation:
      "The passage explicitly states that education 'fosters social equality'.",
  },
  {
    id: 91,
    topic: "Reading Comprehension",
    question:
      "Read: 'Water scarcity is becoming a critical issue worldwide. Rapid population growth, climate change, and poor water management are the primary causes. Without immediate action, millions could face severe water shortages by 2030.'\n\nWhat is the author's purpose?",
    options: [
      "To entertain readers with a story",
      "To inform and warn about the water crisis",
      "To describe the geography of water bodies",
      "To praise water management practices",
    ],
    correctIndex: 1,
    explanation:
      "The author outlines the problem and its causes, ending with a warning — the purpose is to inform and warn.",
  },
  {
    id: 92,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q91, which is NOT mentioned as a cause of water scarcity?",
    options: [
      "Rapid population growth",
      "Climate change",
      "Poor water management",
      "Industrial pollution",
    ],
    correctIndex: 3,
    explanation:
      "The passage mentions population growth, climate change, and poor management — industrial pollution is not mentioned.",
  },
  {
    id: 93,
    topic: "Reading Comprehension",
    question:
      "Read: 'Artificial intelligence is reshaping industries from healthcare to finance. While it promises increased efficiency and innovation, concerns about job displacement and ethical issues remain significant challenges.'\n\nWhat can be inferred from the passage?",
    options: [
      "AI will solve all human problems",
      "AI has both benefits and drawbacks that society must address",
      "AI is only useful in healthcare",
      "Job displacement is not a concern",
    ],
    correctIndex: 1,
    explanation:
      "The passage presents AI as beneficial but also raises concerns — implying society must balance benefits and challenges.",
  },
  {
    id: 94,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q93, the word 'reshaping' most closely means:",
    options: ["Destroying", "Forming again", "Transforming", "Reducing"],
    correctIndex: 2,
    explanation:
      "'Reshaping' in this context means fundamentally transforming the structure of industries.",
  },
  {
    id: 95,
    topic: "Reading Comprehension",
    question:
      "Read: 'Reading regularly improves vocabulary, enhances critical thinking, and reduces stress. Studies show that even 6 minutes of reading can reduce stress levels by 68%.'\n\nWhich statement is directly supported by the passage?",
    options: [
      "Reading for 1 hour eliminates stress completely",
      "Reading has no effect on vocabulary",
      "Six minutes of reading can reduce stress by 68%",
      "Critical thinking is not related to reading",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly states this statistic — it is a directly stated (explicit) fact.",
  },
  {
    id: 96,
    topic: "Reading Comprehension",
    question:
      "Fill in the blank based on standard RC patterns: 'The passage primarily serves to ___ the reader.'",
    options: ["entertain", "mislead", "inform", "confuse"],
    correctIndex: 2,
    explanation:
      "Most academic RC passages in competitive exams are expository — their primary purpose is to inform.",
  },
  {
    id: 97,
    topic: "Reading Comprehension",
    question:
      "Read: 'Despite numerous challenges, India has made remarkable progress in space exploration. ISRO's missions, including Chandrayaan and Mangalyaan, have placed India among leading spacefaring nations.'\n\nThe author's tone is:",
    options: ["Critical", "Proud and appreciative", "Neutral", "Sarcastic"],
    correctIndex: 1,
    explanation:
      "Words like 'remarkable' and 'leading' indicate a proud and appreciative tone toward India's achievements.",
  },
  {
    id: 98,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q97, which missions are mentioned?",
    options: [
      "Gaganyaan and Aditya",
      "Chandrayaan and Mangalyaan",
      "PSLV and GSLV",
      "Mars and Moon Orbiter",
    ],
    correctIndex: 1,
    explanation:
      "The passage explicitly names 'Chandrayaan and Mangalyaan' as ISRO's missions.",
  },
  {
    id: 99,
    topic: "Reading Comprehension",
    question:
      "Read: 'Environmental degradation poses a serious threat to biodiversity. Deforestation, pollution, and climate change are leading to the extinction of thousands of species annually.'\n\nWhich word best summarizes the author's view?",
    options: ["Optimistic", "Alarmist", "Indifferent", "Humorous"],
    correctIndex: 1,
    explanation:
      "Phrases like 'serious threat' and 'extinction' convey urgency and alarm — the author is alarmist.",
  },
  {
    id: 100,
    topic: "Reading Comprehension",
    question:
      "A question asks: 'What can be concluded from the passage?' This is a ___ type of question.",
    options: ["Explicit", "Vocabulary", "Inferential", "Global"],
    correctIndex: 2,
    explanation:
      "'What can be concluded' requires reading between the lines — this is an inferential question.",
  },
];

// ==================== ADDITIONAL VOCABULARY (Q101–Q174) ====================
// These bring Vocabulary total to ~100
export const EXTRA_GRAMMAR_QUESTIONS = [
  {
    id: 101,
    topic: "Vocabulary",
    question: "Choose the synonym of 'COGENT'.",
    options: ["Weak", "Convincing", "Vague", "Irrelevant"],
    correctIndex: 1,
    explanation: "'Cogent' means clear, logical, and convincing.",
  },
  {
    id: 102,
    topic: "Vocabulary",
    question: "Choose the antonym of 'OPULENT'.",
    options: ["Rich", "Destitute", "Lavish", "Wealthy"],
    correctIndex: 1,
    explanation:
      "'Opulent' means rich and luxurious; its antonym is 'destitute' (extremely poor).",
  },
  {
    id: 103,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'LACONIC'.",
    options: ["Verbose", "Brief", "Detailed", "Flowery"],
    correctIndex: 1,
    explanation: "'Laconic' means using very few words — brief and concise.",
  },
  {
    id: 104,
    topic: "Vocabulary",
    question: "Choose the antonym of 'CANDID'.",
    options: ["Frank", "Open", "Evasive", "Sincere"],
    correctIndex: 2,
    explanation:
      "'Candid' means truthful and straightforward; 'evasive' is its antonym.",
  },
  {
    id: 105,
    topic: "Vocabulary",
    question: "Select the synonym of 'MAGNANIMOUS'.",
    options: ["Petty", "Generous", "Selfish", "Narrow-minded"],
    correctIndex: 1,
    explanation: "'Magnanimous' means very generous or forgiving.",
  },
  {
    id: 106,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'PERNICIOUS'.",
    options: ["Harmless", "Harmful", "Helpful", "Neutral"],
    correctIndex: 1,
    explanation:
      "'Pernicious' means having a harmful effect, especially gradually.",
  },
  {
    id: 107,
    topic: "Vocabulary",
    question: "Choose the antonym of 'VERBOSE'.",
    options: ["Wordy", "Talkative", "Concise", "Elaborate"],
    correctIndex: 2,
    explanation:
      "'Verbose' means using more words than needed; antonym is 'concise'.",
  },
  {
    id: 108,
    topic: "Vocabulary",
    question: "Select the synonym of 'ACRIMONIOUS'.",
    options: ["Pleasant", "Bitter", "Sweet", "Mild"],
    correctIndex: 1,
    explanation:
      "'Acrimonious' means angry and bitter — especially in speech or manner.",
  },
  {
    id: 109,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'DILIGENT'.",
    options: ["Lazy", "Careless", "Hardworking", "Idle"],
    correctIndex: 2,
    explanation:
      "'Diligent' means having or showing care and conscientiousness in one's work.",
  },
  {
    id: 110,
    topic: "Vocabulary",
    question: "Select the antonym of 'FRUGAL'.",
    options: ["Thrifty", "Economical", "Wasteful", "Careful"],
    correctIndex: 2,
    explanation: "'Frugal' means economical; its antonym is 'wasteful'.",
  },
  {
    id: 111,
    topic: "Vocabulary",
    question: "One word substitution: A person who talks excessively.",
    options: ["Taciturn", "Loquacious", "Reticent", "Laconic"],
    correctIndex: 1,
    explanation: "'Loquacious' describes a person who talks a great deal.",
  },
  {
    id: 112,
    topic: "Vocabulary",
    question: "Choose the synonym of 'ENIGMATIC'.",
    options: ["Clear", "Obvious", "Mysterious", "Simple"],
    correctIndex: 2,
    explanation:
      "'Enigmatic' means difficult to interpret or understand — mysterious.",
  },
  {
    id: 113,
    topic: "Vocabulary",
    question: "Select the antonym of 'PRUDENT'.",
    options: ["Wise", "Careful", "Reckless", "Thoughtful"],
    correctIndex: 2,
    explanation: "'Prudent' means acting with care; its antonym is 'reckless'.",
  },
  {
    id: 114,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'OSTENTATIOUS'.",
    options: ["Modest", "Showy", "Simple", "Plain"],
    correctIndex: 1,
    explanation:
      "'Ostentatious' means designed to impress or attract notice — showy.",
  },
  {
    id: 115,
    topic: "Vocabulary",
    question: "One word substitution: One who collects coins.",
    options: ["Numismatist", "Philatelist", "Bibliophile", "Ornithologist"],
    correctIndex: 0,
    explanation: "A 'numismatist' collects coins and currency.",
  },
  {
    id: 116,
    topic: "Vocabulary",
    question: "Select the synonym of 'TENACIOUS'.",
    options: ["Weak", "Persistent", "Fragile", "Indifferent"],
    correctIndex: 1,
    explanation: "'Tenacious' means holding firmly to a position — persistent.",
  },
  {
    id: 117,
    topic: "Vocabulary",
    question: "Choose the antonym of 'BENIGN'.",
    options: ["Kind", "Gentle", "Malignant", "Harmless"],
    correctIndex: 2,
    explanation:
      "'Benign' means gentle and kind; 'malignant' is its antonym (harmful).",
  },
  {
    id: 118,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'IMPETUOUS'.",
    options: ["Cautious", "Rash", "Deliberate", "Slow"],
    correctIndex: 1,
    explanation:
      "'Impetuous' means acting or done quickly without thought or care — rash.",
  },
  {
    id: 119,
    topic: "Vocabulary",
    question: "One word substitution: A person who studies birds.",
    options: ["Zoologist", "Ornithologist", "Botanist", "Entomologist"],
    correctIndex: 1,
    explanation: "An 'ornithologist' is a scientist who studies birds.",
  },
  {
    id: 120,
    topic: "Vocabulary",
    question: "Select the antonym of 'ALTRUISTIC'.",
    options: ["Selfless", "Generous", "Selfish", "Charitable"],
    correctIndex: 2,
    explanation:
      "'Altruistic' means selflessly concerned for others; 'selfish' is its antonym.",
  },
  {
    id: 121,
    topic: "Vocabulary",
    question: "Choose the synonym of 'GARRULOUS'.",
    options: ["Silent", "Talkative", "Reserved", "Quiet"],
    correctIndex: 1,
    explanation:
      "'Garrulous' means excessively talkative, especially on trivial matters.",
  },
  {
    id: 122,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'METICULOUS'.",
    options: ["Careless", "Sloppy", "Thorough", "Hasty"],
    correctIndex: 2,
    explanation:
      "'Meticulous' means showing great attention to detail — thorough.",
  },
  {
    id: 123,
    topic: "Vocabulary",
    question:
      "Select the antonym of 'SYCOPHANT' (as an adjective: sycophantic behavior).",
    options: ["Flattering", "Honest", "Obsequious", "Servile"],
    correctIndex: 1,
    explanation:
      "A sycophant uses flattery; the opposite behavior is honest/direct.",
  },
  {
    id: 124,
    topic: "Vocabulary",
    question: "One word substitution: Something that cannot be seen through.",
    options: ["Transparent", "Translucent", "Opaque", "Clear"],
    correctIndex: 2,
    explanation:
      "'Opaque' describes something through which light does not pass.",
  },
  {
    id: 125,
    topic: "Vocabulary",
    question: "Choose the synonym of 'VINDICTIVE'.",
    options: ["Forgiving", "Vengeful", "Kind", "Merciful"],
    correctIndex: 1,
    explanation:
      "'Vindictive' means having a strong desire for revenge — vengeful.",
  },
  // More Vocabulary
  {
    id: 126,
    topic: "Vocabulary",
    question: "Select the antonym of 'LETHARGY'.",
    options: ["Sluggishness", "Laziness", "Vigor", "Apathy"],
    correctIndex: 2,
    explanation:
      "'Lethargy' means lack of energy; 'vigor' (energy and enthusiasm) is its antonym.",
  },
  {
    id: 127,
    topic: "Vocabulary",
    question:
      "Choose the synonym of 'AMELIORATE' (in the context of improving conditions).",
    options: ["Worsen", "Enhance", "Ignore", "Maintain"],
    correctIndex: 1,
    explanation:
      "'Ameliorate' means to make better — enhance is the closest synonym.",
  },
  {
    id: 128,
    topic: "Vocabulary",
    question: "One word substitution: A person who loves books.",
    options: ["Bibliophile", "Numismatist", "Philanthropist", "Misanthrope"],
    correctIndex: 0,
    explanation:
      "A 'bibliophile' is a person who collects or has a great love of books.",
  },
  {
    id: 129,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'ALOOF'.",
    options: ["Friendly", "Distant", "Sociable", "Warm"],
    correctIndex: 1,
    explanation: "'Aloof' means not friendly or forthcoming — distant.",
  },
  {
    id: 130,
    topic: "Vocabulary",
    question: "Select the antonym of 'VERBOSE'.",
    options: ["Wordy", "Long-winded", "Terse", "Rambling"],
    correctIndex: 2,
    explanation:
      "'Verbose' means using too many words; 'terse' (brief) is its antonym.",
  },
  {
    id: 131,
    topic: "Vocabulary",
    question: "Choose the synonym of 'WARY'.",
    options: ["Careless", "Reckless", "Cautious", "Fearless"],
    correctIndex: 2,
    explanation:
      "'Wary' means feeling or showing caution about possible dangers — cautious.",
  },
  {
    id: 132,
    topic: "Vocabulary",
    question: "One word: A place where bees are kept.",
    options: ["Aviary", "Apiary", "Aquarium", "Stable"],
    correctIndex: 1,
    explanation: "An 'apiary' is a place where bees are kept.",
  },
  {
    id: 133,
    topic: "Vocabulary",
    question: "Choose the antonym of 'PRODIGAL'.",
    options: ["Wasteful", "Extravagant", "Thrifty", "Lavish"],
    correctIndex: 2,
    explanation:
      "'Prodigal' means wastefully extravagant; 'thrifty' is its antonym.",
  },
  {
    id: 134,
    topic: "Vocabulary",
    question: "Select the synonym of 'APPEASE'.",
    options: ["Aggravate", "Pacify", "Irritate", "Provoke"],
    correctIndex: 1,
    explanation:
      "'Appease' means to pacify or placate someone by acceding to their demands.",
  },
  {
    id: 135,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'REPUDIATE'.",
    options: ["Approve", "Accept", "Deny", "Embrace"],
    correctIndex: 2,
    explanation:
      "'Repudiate' means to refuse to accept or be associated with — deny.",
  },
  {
    id: 136,
    topic: "Vocabulary",
    question: "One word: Fear of heights.",
    options: ["Claustrophobia", "Hydrophobia", "Acrophobia", "Xenophobia"],
    correctIndex: 2,
    explanation: "'Acrophobia' is an extreme or irrational fear of heights.",
  },
  {
    id: 137,
    topic: "Vocabulary",
    question: "Choose the antonym of 'EXACERBATE'.",
    options: ["Worsen", "Aggravate", "Alleviate", "Intensify"],
    correctIndex: 2,
    explanation:
      "'Exacerbate' means to make worse; 'alleviate' (make less severe) is its antonym.",
  },
  {
    id: 138,
    topic: "Vocabulary",
    question: "Select the synonym of 'INSOLENT'.",
    options: ["Polite", "Arrogant", "Humble", "Respectful"],
    correctIndex: 1,
    explanation:
      "'Insolent' means showing a rude and arrogant lack of respect.",
  },
  {
    id: 139,
    topic: "Vocabulary",
    question: "One word: A person who hates mankind.",
    options: ["Philanthropist", "Misanthrope", "Altruist", "Humanist"],
    correctIndex: 1,
    explanation:
      "A 'misanthrope' is a person who dislikes humankind and avoids human society.",
  },
  {
    id: 140,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'SANGUINE'.",
    options: ["Pessimistic", "Gloomy", "Optimistic", "Depressed"],
    correctIndex: 2,
    explanation:
      "'Sanguine' means optimistic or positive, especially in a difficult situation.",
  },
  {
    id: 141,
    topic: "Vocabulary",
    question: "Select the antonym of 'GREGARIOUS'.",
    options: ["Sociable", "Outgoing", "Reclusive", "Friendly"],
    correctIndex: 2,
    explanation:
      "'Gregarious' means fond of company; 'reclusive' (avoiding company) is its antonym.",
  },
  {
    id: 142,
    topic: "Vocabulary",
    question: "Choose the synonym of 'IMPECCABLE'.",
    options: ["Flawed", "Perfect", "Faulty", "Defective"],
    correctIndex: 1,
    explanation:
      "'Impeccable' means in accordance with the highest standards — perfect.",
  },
  {
    id: 143,
    topic: "Vocabulary",
    question: "One word: One who walks in sleep.",
    options: ["Insomniac", "Somnambulist", "Narcoleptic", "Hypnotist"],
    correctIndex: 1,
    explanation: "A 'somnambulist' is a sleepwalker.",
  },
  {
    id: 144,
    topic: "Vocabulary",
    question: "Choose the antonym of 'AMBIGUOUS'.",
    options: ["Vague", "Unclear", "Explicit", "Confusing"],
    correctIndex: 2,
    explanation:
      "'Ambiguous' means having multiple possible meanings; 'explicit' (clear) is its antonym.",
  },
  {
    id: 145,
    topic: "Vocabulary",
    question: "Select the synonym of 'ARDUOUS'.",
    options: ["Easy", "Simple", "Strenuous", "Effortless"],
    correctIndex: 2,
    explanation:
      "'Arduous' means involving or requiring strenuous effort — strenuous.",
  },
  {
    id: 146,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'CREDULOUS'.",
    options: ["Skeptical", "Gullible", "Critical", "Suspicious"],
    correctIndex: 1,
    explanation:
      "'Credulous' means having too great a readiness to believe things — gullible.",
  },
  {
    id: 147,
    topic: "Vocabulary",
    question: "One word: The study of the origin of words.",
    options: ["Semantics", "Etymology", "Phonology", "Syntax"],
    correctIndex: 1,
    explanation: "'Etymology' is the study of the origin and history of words.",
  },
  {
    id: 148,
    topic: "Vocabulary",
    question: "Choose the antonym of 'INDIGENT'.",
    options: ["Poor", "Needy", "Affluent", "Destitute"],
    correctIndex: 2,
    explanation:
      "'Indigent' means poor and needy; 'affluent' (wealthy) is its antonym.",
  },
  {
    id: 149,
    topic: "Vocabulary",
    question: "Select the synonym of 'NEFARIOUS'.",
    options: ["Virtuous", "Wicked", "Righteous", "Honest"],
    correctIndex: 1,
    explanation: "'Nefarious' means wicked or criminal.",
  },
  {
    id: 150,
    topic: "Vocabulary",
    question: "Choose the word closest in meaning to 'SUPERFLUOUS'.",
    options: ["Necessary", "Essential", "Excessive", "Vital"],
    correctIndex: 2,
    explanation:
      "'Superfluous' means more than what is needed or wanted — excessive.",
  },

  // ==================== ADDITIONAL GRAMMAR (Q151–Q220) ====================
  {
    id: 151,
    topic: "Grammar",
    question: "Choose the correct sentence (subject-verb agreement).",
    options: [
      "The team are playing well.",
      "The team is playing well.",
      "The team were playing well.",
      "The team be playing well.",
    ],
    correctIndex: 1,
    explanation:
      "Collective nouns like 'team' take singular verbs in American English.",
  },
  {
    id: 152,
    topic: "Grammar",
    question:
      "Identify the error: 'He is one of those students who believes in hard work.'",
    options: ["He is", "one of those", "who believes", "in hard work"],
    correctIndex: 2,
    explanation:
      "The antecedent is 'students' (plural), so it should be 'who believe'.",
  },
  {
    id: 153,
    topic: "Grammar",
    question:
      "Choose the correct form: 'Neither the manager nor the employees ___ present.'",
    options: ["was", "were", "is", "be"],
    correctIndex: 1,
    explanation:
      "When 'neither...nor' connects subjects, the verb agrees with the nearest subject ('employees' is plural).",
  },
  {
    id: 154,
    topic: "Grammar",
    question:
      "Identify the correct passive voice of: 'The teacher teaches the students.'",
    options: [
      "The students are taught by the teacher.",
      "The students were taught by the teacher.",
      "The students had taught by the teacher.",
      "The students be taught by the teacher.",
    ],
    correctIndex: 0,
    explanation:
      "Present simple active → Present simple passive: 'are + past participle + by'.",
  },
  {
    id: 155,
    topic: "Grammar",
    question:
      "Choose the correct article: '___ honest man is always respected.'",
    options: ["A", "An", "The", "No article"],
    correctIndex: 1,
    explanation:
      "'Honest' begins with a silent 'h', so 'an' is used (vowel sound /ɒ/).",
  },
  {
    id: 156,
    topic: "Grammar",
    question: "Select the correct preposition: 'She is good ___ mathematics.'",
    options: ["in", "at", "for", "with"],
    correctIndex: 1,
    explanation: "The correct collocation is 'good at' a subject.",
  },
  {
    id: 157,
    topic: "Grammar",
    question:
      "Choose the correct tense: 'By the time she arrives, I ___ the report.'",
    options: ["will finish", "finish", "will have finished", "finished"],
    correctIndex: 2,
    explanation:
      "Future perfect ('will have finished') is used for an action that will be completed before a future event.",
  },
  {
    id: 158,
    topic: "Grammar",
    question: "Identify the indirect speech: He said, 'I am working hard.'",
    options: [
      "He said that he was working hard.",
      "He said that he is working hard.",
      "He said that I am working hard.",
      "He told I was working hard.",
    ],
    correctIndex: 0,
    explanation:
      "In indirect speech, present continuous becomes past continuous and pronouns change accordingly.",
  },
  {
    id: 159,
    topic: "Grammar",
    question: "Choose the correct form: 'I wish I ___ a millionaire.'",
    options: ["am", "was", "were", "be"],
    correctIndex: 2,
    explanation:
      "After 'wish', use 'were' (subjunctive mood) for present/future hypothetical situations.",
  },
  {
    id: 160,
    topic: "Grammar",
    question: "Identify the correct sentence.",
    options: [
      "He gave me a very useful advices.",
      "He gave me a very useful advice.",
      "He gave me many useful advice.",
      "He gave me very useful advice.",
    ],
    correctIndex: 3,
    explanation:
      "'Advice' is uncountable; it cannot be preceded by 'a' or 'many'. 'Very useful advice' is correct.",
  },
  {
    id: 161,
    topic: "Grammar",
    question:
      "Select the correct preposition: 'The train arrives ___ 8 o'clock.'",
    options: ["in", "on", "at", "by"],
    correctIndex: 2,
    explanation: "'At' is used with specific times.",
  },
  {
    id: 162,
    topic: "Grammar",
    question:
      "Choose the correct form: 'She suggested that he ___ the doctor.'",
    options: ["sees", "see", "saw", "had seen"],
    correctIndex: 1,
    explanation:
      "After 'suggest that', use bare infinitive (subjunctive): 'he see'.",
  },
  {
    id: 163,
    topic: "Grammar",
    question: "Identify the error: 'He is more smarter than his brother.'",
    options: ["He is", "more smarter", "than", "his brother"],
    correctIndex: 1,
    explanation:
      "'Smarter' is already comparative; 'more' is redundant. Should be 'smarter'.",
  },
  {
    id: 164,
    topic: "Grammar",
    question: "Choose the correct sentence (use of 'since' or 'for').",
    options: [
      "I have lived here since ten years.",
      "I have lived here for 2010.",
      "I have lived here for ten years.",
      "I have lived here since ten years ago.",
    ],
    correctIndex: 2,
    explanation:
      "'For' is used with a duration (ten years); 'since' is used with a point in time.",
  },
  {
    id: 165,
    topic: "Grammar",
    question:
      "Select the active voice of: 'The cake was eaten by the children.'",
    options: [
      "The children had eaten the cake.",
      "The children ate the cake.",
      "The children eat the cake.",
      "The children will eat the cake.",
    ],
    correctIndex: 1,
    explanation:
      "Past simple passive → past simple active: 'The children ate the cake.'",
  },
  {
    id: 166,
    topic: "Grammar",
    question:
      "Choose the correct article: 'She plays ___ piano every evening.'",
    options: ["a", "an", "the", "no article"],
    correctIndex: 2,
    explanation:
      "'The' is used with musical instruments when referring to playing them.",
  },
  {
    id: 167,
    topic: "Grammar",
    question:
      "Identify the correct conditional: 'If I had studied harder, I ___ the exam.'",
    options: ["would pass", "will pass", "would have passed", "had passed"],
    correctIndex: 2,
    explanation:
      "Third conditional (past hypothetical): 'would have + past participle'.",
  },
  {
    id: 168,
    topic: "Grammar",
    question: "Choose the correct form: 'He is used to ___ early.'",
    options: ["wake", "waking", "woke", "have woken"],
    correctIndex: 1,
    explanation:
      "'Used to' (accustomed to) is followed by a gerund (-ing form).",
  },
  {
    id: 169,
    topic: "Grammar",
    question: "Select the correct sentence.",
    options: [
      "Despite of the rain, they played.",
      "Despite the rain, they played.",
      "Despite of the raining, they played.",
      "Inspite the rain, they played.",
    ],
    correctIndex: 1,
    explanation:
      "'Despite' is followed directly by a noun/noun phrase, NOT 'of'. 'In spite of' uses 'of'.",
  },
  {
    id: 170,
    topic: "Grammar",
    question: "Identify the correct question tag: 'She can swim, ___?'",
    options: ["can she", "can't she", "isn't she", "doesn't she"],
    correctIndex: 1,
    explanation: "Positive statement with 'can' → negative tag 'can't she?'",
  },
  {
    id: 171,
    topic: "Grammar",
    question:
      "Choose the correct form: 'He ___ to the market when it started raining.'",
    options: ["went", "was going", "had gone", "goes"],
    correctIndex: 1,
    explanation:
      "Past continuous + simple past: 'was going' (longer action) + 'started' (interruption).",
  },
  {
    id: 172,
    topic: "Grammar",
    question: "Identify the correct sentence.",
    options: [
      "The news are shocking.",
      "The news is shocking.",
      "The news were shocking.",
      "A news is shocking.",
    ],
    correctIndex: 1,
    explanation: "'News' is uncountable and always takes a singular verb.",
  },
  {
    id: 173,
    topic: "Grammar",
    question: "Choose the correct form: 'I would rather you ___ here.'",
    options: ["stay", "stayed", "had stayed", "to stay"],
    correctIndex: 1,
    explanation:
      "After 'would rather' + subject, use past simple (subjunctive): 'you stayed'.",
  },
  {
    id: 174,
    topic: "Grammar",
    question:
      "Select the correct indirect speech: 'She said, \"I will come tomorrow.\"'",
    options: [
      "She said she will come tomorrow.",
      "She said she would come the next day.",
      "She said she came the next day.",
      "She said she would come tomorrow.",
    ],
    correctIndex: 1,
    explanation: "Will → would; tomorrow → the next day in indirect speech.",
  },
  {
    id: 175,
    topic: "Grammar",
    question: "Choose the correct preposition: 'He died ___ malaria.'",
    options: ["from", "of", "due", "by"],
    correctIndex: 1,
    explanation: "The correct expression is 'die of' a disease.",
  },
  {
    id: 176,
    topic: "Grammar",
    question:
      "Identify the error: 'No sooner did he arrived than it started raining.'",
    options: ["No sooner", "did he", "arrived", "than it started"],
    correctIndex: 2,
    explanation: "After 'did', use the base form: 'arrive' not 'arrived'.",
  },
  {
    id: 177,
    topic: "Grammar",
    question: "Choose the correct sentence.",
    options: [
      "Each of the boys have a book.",
      "Each of the boys has a book.",
      "Each of the boys are having a book.",
      "Each of the boys had have a book.",
    ],
    correctIndex: 1,
    explanation: "'Each' is singular and takes a singular verb: 'has'.",
  },
  {
    id: 178,
    topic: "Grammar",
    question: "Select the correct form: 'It is time we ___ home.'",
    options: ["go", "went", "had gone", "to go"],
    correctIndex: 1,
    explanation: "After 'it is time + subject', use past simple: 'we went'.",
  },
  {
    id: 179,
    topic: "Grammar",
    question: "Choose the correct sentence (gerund vs. infinitive).",
    options: [
      "I enjoy to read.",
      "I enjoy reading.",
      "I enjoy read.",
      "I enjoy to reading.",
    ],
    correctIndex: 1,
    explanation: "'Enjoy' is always followed by a gerund (-ing form).",
  },
  {
    id: 180,
    topic: "Grammar",
    question: "Identify the correct question tag: 'Let us go for a walk, ___?'",
    options: ["shall we", "will we", "don't we", "won't we"],
    correctIndex: 0,
    explanation: "After 'let us', the tag question is 'shall we?'",
  },

  // ==================== ADDITIONAL IDIOMS & PHRASES (Q181–Q265) ====================
  {
    id: 181,
    topic: "Idioms & Phrases",
    question: "What does 'bite the bullet' mean?",
    options: [
      "To get shot",
      "To endure a painful situation",
      "To be courageous",
      "To solve a problem fast",
    ],
    correctIndex: 1,
    explanation:
      "'Bite the bullet' means to endure a painful or difficult situation with courage.",
  },
  {
    id: 182,
    topic: "Idioms & Phrases",
    question: "What does 'hit the nail on the head' mean?",
    options: [
      "To hurt someone",
      "To hammer properly",
      "To do or say something exactly right",
      "To miss the point",
    ],
    correctIndex: 2,
    explanation:
      "This idiom means to describe exactly what is causing a problem or situation.",
  },
  {
    id: 183,
    topic: "Idioms & Phrases",
    question: "What does 'let the cat out of the bag' mean?",
    options: [
      "To release an animal",
      "To reveal a secret accidentally",
      "To cause chaos",
      "To surprise someone",
    ],
    correctIndex: 1,
    explanation:
      "'Let the cat out of the bag' means to reveal a secret accidentally.",
  },
  {
    id: 184,
    topic: "Idioms & Phrases",
    question: "What does 'once in a blue moon' mean?",
    options: ["Every night", "During full moon", "Very rarely", "Every month"],
    correctIndex: 2,
    explanation:
      "'Once in a blue moon' means something that happens very rarely.",
  },
  {
    id: 185,
    topic: "Idioms & Phrases",
    question: "What does 'break a leg' mean?",
    options: [
      "To injure yourself",
      "Good luck",
      "To run fast",
      "To dance well",
    ],
    correctIndex: 1,
    explanation:
      "'Break a leg' is an idiom meaning 'good luck', commonly used in theater.",
  },
  {
    id: 186,
    topic: "Idioms & Phrases",
    question: "What does 'cost an arm and a leg' mean?",
    options: [
      "To be dangerous",
      "To be injured",
      "To be very expensive",
      "To be painful",
    ],
    correctIndex: 2,
    explanation: "'Cost an arm and a leg' means to be extremely expensive.",
  },
  {
    id: 187,
    topic: "Idioms & Phrases",
    question: "What does 'spill the beans' mean?",
    options: [
      "To cook beans",
      "To make a mess",
      "To reveal secret information",
      "To be clumsy",
    ],
    correctIndex: 2,
    explanation:
      "'Spill the beans' means to reveal secret information, often unintentionally.",
  },
  {
    id: 188,
    topic: "Idioms & Phrases",
    question: "What does 'under the weather' mean?",
    options: [
      "In rainy weather",
      "Feeling ill",
      "Being outside",
      "Feeling confused",
    ],
    correctIndex: 1,
    explanation: "'Under the weather' means feeling slightly ill or unwell.",
  },
  {
    id: 189,
    topic: "Idioms & Phrases",
    question: "What does 'burn bridges' mean?",
    options: [
      "To set fire",
      "To destroy something permanently",
      "To ruin relationships intentionally",
      "To cross a river",
    ],
    correctIndex: 2,
    explanation:
      "'Burn bridges' means to permanently damage a relationship or possibility.",
  },
  {
    id: 190,
    topic: "Idioms & Phrases",
    question: "What does 'add fuel to the fire' mean?",
    options: [
      "To start a fire",
      "To worsen an already bad situation",
      "To solve a problem",
      "To cook food",
    ],
    correctIndex: 1,
    explanation:
      "'Add fuel to the fire' means to make an already difficult situation worse.",
  },
  {
    id: 191,
    topic: "Idioms & Phrases",
    question: "What does 'a blessing in disguise' mean?",
    options: [
      "A disguised person",
      "A hidden curse",
      "Something good that seemed bad at first",
      "A lucky charm",
    ],
    correctIndex: 2,
    explanation:
      "A 'blessing in disguise' is something that seems bad but turns out to be beneficial.",
  },
  {
    id: 192,
    topic: "Idioms & Phrases",
    question: "What does 'beat around the bush' mean?",
    options: [
      "To search in bushes",
      "To avoid the main topic",
      "To beat a drum",
      "To be direct",
    ],
    correctIndex: 1,
    explanation:
      "'Beat around the bush' means to avoid talking about what is important.",
  },
  {
    id: 193,
    topic: "Idioms & Phrases",
    question: "What does 'the ball is in your court' mean?",
    options: [
      "A sports term",
      "It is now your responsibility to act",
      "You have scored a goal",
      "You should play cricket",
    ],
    correctIndex: 1,
    explanation:
      "'The ball is in your court' means it is now your turn or responsibility to take action.",
  },
  {
    id: 194,
    topic: "Idioms & Phrases",
    question: "What does 'hit the sack' mean?",
    options: [
      "To punch someone",
      "To go to bed",
      "To lift weights",
      "To fail an exam",
    ],
    correctIndex: 1,
    explanation:
      "'Hit the sack' is an informal phrase meaning to go to bed or sleep.",
  },
  {
    id: 195,
    topic: "Idioms & Phrases",
    question: "What does 'bite off more than you can chew' mean?",
    options: [
      "To eat too much",
      "To take on more than you can handle",
      "To be greedy about food",
      "To chew slowly",
    ],
    correctIndex: 1,
    explanation:
      "'Bite off more than you can chew' means to attempt more than one can reasonably do.",
  },
  {
    id: 196,
    topic: "Idioms & Phrases",
    question: "What does 'cut corners' mean?",
    options: [
      "To turn at corners",
      "To do things poorly to save time or money",
      "To be precise",
      "To follow shortcuts safely",
    ],
    correctIndex: 1,
    explanation:
      "'Cut corners' means to do something the easy way, reducing quality or care.",
  },
  {
    id: 197,
    topic: "Idioms & Phrases",
    question: "What does 'get a taste of your own medicine' mean?",
    options: [
      "To take medicines regularly",
      "To experience the same bad treatment you give others",
      "To try something new",
      "To recover from illness",
    ],
    correctIndex: 1,
    explanation:
      "This phrase means to receive the same unpleasant treatment one has given to others.",
  },
  {
    id: 198,
    topic: "Idioms & Phrases",
    question: "What does 'the tip of the iceberg' mean?",
    options: [
      "The coldest part",
      "A small visible part of a larger problem",
      "An ice cream tip",
      "A dangerous situation",
    ],
    correctIndex: 1,
    explanation:
      "'The tip of the iceberg' means a small noticeable problem that is part of a much bigger issue.",
  },
  {
    id: 199,
    topic: "Idioms & Phrases",
    question: "What does 'miss the boat' mean?",
    options: [
      "To miss a ferry",
      "To miss an opportunity",
      "To arrive late at a harbor",
      "To swim instead of boat",
    ],
    correctIndex: 1,
    explanation:
      "'Miss the boat' means to miss an opportunity or be too late to take advantage of something.",
  },
  {
    id: 200,
    topic: "Idioms & Phrases",
    question: "What does 'at the drop of a hat' mean?",
    options: [
      "When someone loses their hat",
      "Immediately, without hesitation",
      "Very slowly",
      "By chance",
    ],
    correctIndex: 1,
    explanation:
      "'At the drop of a hat' means immediately, without any hesitation or delay.",
  },
  {
    id: 201,
    topic: "Idioms & Phrases",
    question: "What does 'kill two birds with one stone' mean?",
    options: [
      "To be cruel to animals",
      "To accomplish two things with one action",
      "To hunt birds",
      "To solve only one problem",
    ],
    correctIndex: 1,
    explanation: "This idiom means to solve two problems with a single action.",
  },
  {
    id: 202,
    topic: "Idioms & Phrases",
    question: "What does 'on the fence' mean?",
    options: [
      "Sitting on a fence",
      "Undecided about something",
      "Very decisive",
      "Supporting one side strongly",
    ],
    correctIndex: 1,
    explanation:
      "'On the fence' means to be neutral or undecided about an issue.",
  },
  {
    id: 203,
    topic: "Idioms & Phrases",
    question: "What does 'turn over a new leaf' mean?",
    options: [
      "To turn pages in a book",
      "To start behaving better",
      "To change seasons",
      "To collect leaves",
    ],
    correctIndex: 1,
    explanation:
      "'Turn over a new leaf' means to start acting more positively.",
  },
  {
    id: 204,
    topic: "Idioms & Phrases",
    question: "What does 'put all your eggs in one basket' mean?",
    options: [
      "To carry eggs carefully",
      "To rely on only one option or plan",
      "To be organized",
      "To invest wisely",
    ],
    correctIndex: 1,
    explanation:
      "'Put all your eggs in one basket' means to rely on a single plan or option, which is risky.",
  },
  {
    id: 205,
    topic: "Idioms & Phrases",
    question: "What does 'the last straw' mean?",
    options: [
      "The final straw used for drinking",
      "The final problem that makes a situation unbearable",
      "A difficult test",
      "A small problem",
    ],
    correctIndex: 1,
    explanation:
      "'The last straw' is the final problem in a series that makes the situation unbearable.",
  },
  {
    id: 206,
    topic: "Idioms & Phrases",
    question: "What does 'speak volumes' mean?",
    options: [
      "To speak very loudly",
      "To tell a lot without words",
      "To give a long speech",
      "To read many books",
    ],
    correctIndex: 1,
    explanation:
      "'Speak volumes' means to convey a great deal of meaning without words.",
  },
  {
    id: 207,
    topic: "Idioms & Phrases",
    question: "What does 'bite the dust' mean?",
    options: [
      "To eat dirt",
      "To fail or die",
      "To clean the floor",
      "To play in mud",
    ],
    correctIndex: 1,
    explanation: "'Bite the dust' means to fail, die, or be defeated.",
  },
  {
    id: 208,
    topic: "Idioms & Phrases",
    question: "What does 'draw the line' mean?",
    options: [
      "To sketch a boundary",
      "To set a limit beyond which you will not go",
      "To paint a picture",
      "To finish a task",
    ],
    correctIndex: 1,
    explanation:
      "'Draw the line' means to establish a limit of what one is not willing to do.",
  },
  {
    id: 209,
    topic: "Idioms & Phrases",
    question: "What does 'hit the books' mean?",
    options: [
      "To throw books",
      "To study hard",
      "To buy books",
      "To close books",
    ],
    correctIndex: 1,
    explanation: "'Hit the books' is an idiom meaning to study intensively.",
  },
  {
    id: 210,
    topic: "Idioms & Phrases",
    question: "What does 'a piece of cake' mean?",
    options: [
      "A slice of cake",
      "Something very easy",
      "A small reward",
      "A treat",
    ],
    correctIndex: 1,
    explanation: "'A piece of cake' means something very easy to accomplish.",
  },
  {
    id: 211,
    topic: "Idioms & Phrases",
    question: "What does 'get out of hand' mean?",
    options: [
      "To leave quickly",
      "To go beyond control",
      "To remove a ring",
      "To finish a task",
    ],
    correctIndex: 1,
    explanation: "'Get out of hand' means to lose control of a situation.",
  },
  {
    id: 212,
    topic: "Idioms & Phrases",
    question: "What does 'play it by ear' mean?",
    options: [
      "To listen carefully",
      "To improvise or deal with a situation as it develops",
      "To play music by ear",
      "To be spontaneous about music",
    ],
    correctIndex: 1,
    explanation:
      "'Play it by ear' means to improvise or make decisions as a situation develops.",
  },
  {
    id: 213,
    topic: "Idioms & Phrases",
    question: "What does 'in a nutshell' mean?",
    options: [
      "Inside a shell",
      "In brief or summary",
      "In a difficult situation",
      "In secret",
    ],
    correctIndex: 1,
    explanation: "'In a nutshell' means in a few words; briefly or concisely.",
  },
  {
    id: 214,
    topic: "Idioms & Phrases",
    question: "What does 'take with a grain of salt' mean?",
    options: [
      "To add salt to food",
      "To be skeptical about something",
      "To accept completely",
      "To season food",
    ],
    correctIndex: 1,
    explanation:
      "'Take with a grain of salt' means to not take something completely seriously.",
  },
  {
    id: 215,
    topic: "Idioms & Phrases",
    question: "What does 'go back to the drawing board' mean?",
    options: [
      "To return to school",
      "To start something over from the beginning",
      "To learn art",
      "To revise a sketch",
    ],
    correctIndex: 1,
    explanation:
      "'Go back to the drawing board' means to start all over again with a new plan.",
  },
  {
    id: 216,
    topic: "Idioms & Phrases",
    question: "What does 'no pain, no gain' mean?",
    options: [
      "Pain is unnecessary",
      "Success requires effort and hardship",
      "Gain comes easily",
      "Nothing is worth the effort",
    ],
    correctIndex: 1,
    explanation:
      "'No pain, no gain' means you must work hard and face difficulties to achieve success.",
  },
  {
    id: 217,
    topic: "Idioms & Phrases",
    question: "What does 'sit on the fence' mean?",
    options: [
      "To literally sit on a fence",
      "To remain neutral or indecisive",
      "To observe from a distance",
      "To guard a fence",
    ],
    correctIndex: 1,
    explanation:
      "'Sit on the fence' means to remain neutral and avoid taking sides in a dispute.",
  },
  {
    id: 218,
    topic: "Idioms & Phrases",
    question: "What does 'keep something at bay' mean?",
    options: [
      "To keep near water",
      "To prevent something from coming too close or causing harm",
      "To store in a bay",
      "To fight actively",
    ],
    correctIndex: 1,
    explanation:
      "'Keep at bay' means to control something so it does not become a problem.",
  },
  {
    id: 219,
    topic: "Idioms & Phrases",
    question: "What does 'burn the midnight oil' mean?",
    options: [
      "To waste resources",
      "To work late into the night",
      "To start a fire",
      "To cause pollution",
    ],
    correctIndex: 1,
    explanation: "'Burn the midnight oil' means to work very late at night.",
  },
  {
    id: 220,
    topic: "Idioms & Phrases",
    question: "What does 'actions speak louder than words' mean?",
    options: [
      "Loud actions are important",
      "What you do is more important than what you say",
      "Words are meaningless",
      "Actions are noisy",
    ],
    correctIndex: 1,
    explanation:
      "This proverb means that doing things is more significant than merely talking about them.",
  },

  // ==================== ADDITIONAL RC STRATEGY (Q221–Q305) ====================
  {
    id: 221,
    topic: "RC Strategy",
    question: "What is 'skimming' in reading?",
    options: [
      "Reading every word carefully",
      "Reading quickly for main ideas",
      "Reading only the last paragraph",
      "Reading randomly",
    ],
    correctIndex: 1,
    explanation:
      "Skimming means reading quickly to get the overall idea without reading every word.",
  },
  {
    id: 222,
    topic: "RC Strategy",
    question: "What is 'scanning' used for in RC?",
    options: [
      "Understanding tone",
      "Finding specific information quickly",
      "Reading every detail",
      "Understanding the author's intent",
    ],
    correctIndex: 1,
    explanation:
      "Scanning is reading quickly to locate specific facts, names, dates, or keywords.",
  },
  {
    id: 223,
    topic: "RC Strategy",
    question:
      "Which type of question asks you to identify what the passage is mainly about?",
    options: [
      "Vocabulary-in-context",
      "Inferential",
      "Central idea/Main purpose",
      "Detail question",
    ],
    correctIndex: 2,
    explanation:
      "Central idea questions ask you to identify the primary theme or purpose of the passage.",
  },
  {
    id: 224,
    topic: "RC Strategy",
    question: "An inferential question requires you to:",
    options: [
      "Find a direct quote from the passage",
      "Read between the lines to draw conclusions",
      "Count the number of paragraphs",
      "Identify grammar mistakes",
    ],
    correctIndex: 1,
    explanation:
      "Inferential questions require you to deduce meaning not explicitly stated in the passage.",
  },
  {
    id: 225,
    topic: "RC Strategy",
    question:
      "When you encounter an unfamiliar word in RC, the best strategy is to:",
    options: [
      "Skip the passage",
      "Use context clues from surrounding sentences",
      "Look it up in a dictionary",
      "Guess randomly",
    ],
    correctIndex: 1,
    explanation:
      "Context clues — nearby words and sentences — often reveal the meaning of unfamiliar words.",
  },
  {
    id: 226,
    topic: "RC Strategy",
    question: "What is 'tone' in a passage?",
    options: [
      "The volume of the writer's voice",
      "The author's attitude toward the subject",
      "The type of vocabulary used",
      "The length of the passage",
    ],
    correctIndex: 1,
    explanation:
      "Tone refers to the author's attitude or feelings toward the topic (e.g., critical, optimistic, sarcastic).",
  },
  {
    id: 227,
    topic: "RC Strategy",
    question: "In a 'vocabulary in context' question, you should:",
    options: [
      "Choose the most common dictionary meaning",
      "Choose the meaning that fits best in the passage",
      "Skip and move on",
      "Choose the longest option",
    ],
    correctIndex: 1,
    explanation:
      "Always choose the meaning that makes sense within the specific context of the passage.",
  },
  {
    id: 228,
    topic: "RC Strategy",
    question: "What does 'para identification' mean?",
    options: [
      "Identifying paragraphs by number",
      "Finding the purpose or main idea of each paragraph",
      "Counting words in each paragraph",
      "Identifying the writer of each paragraph",
    ],
    correctIndex: 1,
    explanation:
      "Para identification means determining the main idea or function of each paragraph in a passage.",
  },
  {
    id: 229,
    topic: "RC Strategy",
    question: "Which strategy helps you answer 'detail questions' in RC?",
    options: [
      "Skimming the full passage",
      "Scanning for the specific information requested",
      "Paraphrasing the question",
      "Reading only the first sentence",
    ],
    correctIndex: 1,
    explanation:
      "Scanning helps you find specific details quickly without re-reading the whole passage.",
  },
  {
    id: 230,
    topic: "RC Strategy",
    question:
      "A passage that presents arguments for and against an issue has ___ structure.",
    options: [
      "Cause-effect",
      "Problem-solution",
      "Compare and contrast",
      "Narrative",
    ],
    correctIndex: 2,
    explanation:
      "A passage presenting both sides of an issue follows a compare-and-contrast structure.",
  },
  {
    id: 231,
    topic: "RC Strategy",
    question: "The first and last sentences of a paragraph usually contain:",
    options: [
      "Examples and statistics",
      "The main idea and conclusion",
      "Transition words only",
      "Author credentials",
    ],
    correctIndex: 1,
    explanation:
      "Topic sentences (main idea) typically appear at the start; conclusions appear at the end of paragraphs.",
  },
  {
    id: 232,
    topic: "RC Strategy",
    question: "In RC, 'inference' means:",
    options: [
      "A direct statement from the passage",
      "Something implied but not explicitly stated",
      "A grammar rule",
      "A type of vocabulary question",
    ],
    correctIndex: 1,
    explanation:
      "Inference involves drawing logical conclusions from information implied in the passage.",
  },
  {
    id: 233,
    topic: "RC Strategy",
    question: "Transition words like 'however', 'nevertheless', 'yet' signal:",
    options: [
      "Agreement or addition",
      "Contrast or contradiction",
      "Cause and effect",
      "Examples",
    ],
    correctIndex: 1,
    explanation:
      "Words like 'however' and 'nevertheless' signal a contrast or shift in argument.",
  },
  {
    id: 234,
    topic: "RC Strategy",
    question: "Words like 'therefore', 'as a result', 'consequently' indicate:",
    options: ["Contrast", "Cause and effect", "Examples", "Sequence"],
    correctIndex: 1,
    explanation:
      "These words signal that a conclusion or result follows from what was previously stated.",
  },
  {
    id: 235,
    topic: "RC Strategy",
    question:
      "If a question asks 'According to the passage...', it is a ___ question.",
    options: [
      "Inference",
      "Critical reasoning",
      "Directly stated (explicit) detail",
      "Vocabulary-in-context",
    ],
    correctIndex: 2,
    explanation:
      "'According to the passage' signals that the answer is directly stated in the text.",
  },
  {
    id: 236,
    topic: "RC Strategy",
    question: "The best way to approach a long RC passage in an exam is to:",
    options: [
      "Read every word first, then answer",
      "Read the questions first, then scan the passage",
      "Answer randomly to save time",
      "Skip long passages entirely",
    ],
    correctIndex: 1,
    explanation:
      "Reading questions first helps you know what to look for, making scanning more efficient.",
  },
  {
    id: 237,
    topic: "RC Strategy",
    question:
      "When the author uses 'I believe' or 'I think', the passage contains:",
    options: ["Facts", "Opinions", "Statistical data", "Historical events"],
    correctIndex: 1,
    explanation:
      "Phrases like 'I believe' or 'I think' signal personal opinions, not verified facts.",
  },
  {
    id: 238,
    topic: "RC Strategy",
    question:
      "Which reading strategy is best for finding a specific date mentioned in a passage?",
    options: ["Skimming", "Detailed reading", "Scanning", "Paraphrasing"],
    correctIndex: 2,
    explanation:
      "Scanning allows you to move your eyes quickly across text to find specific information like dates.",
  },
  {
    id: 239,
    topic: "RC Strategy",
    question:
      "If a question asks for the 'best title' for a passage, you should:",
    options: [
      "Choose the title that covers only one paragraph",
      "Choose the title that reflects the central idea of the entire passage",
      "Choose the most dramatic title",
      "Choose the shortest title",
    ],
    correctIndex: 1,
    explanation:
      "A good title reflects the overall theme or central argument of the entire passage.",
  },
  {
    id: 240,
    topic: "RC Strategy",
    question: "In RC, 'author's purpose' refers to:",
    options: [
      "The author's name and biography",
      "Why the author wrote the passage",
      "The number of facts in the passage",
      "The vocabulary level used",
    ],
    correctIndex: 1,
    explanation:
      "Author's purpose is the reason the passage was written — to inform, persuade, entertain, etc.",
  },
  {
    id: 241,
    topic: "RC Strategy",
    question:
      "A passage describing a sequence of events in time order uses ___ structure.",
    options: [
      "Cause-effect",
      "Chronological",
      "Problem-solution",
      "Definition",
    ],
    correctIndex: 1,
    explanation:
      "Chronological structure organizes events in the order they occurred (time sequence).",
  },
  {
    id: 242,
    topic: "RC Strategy",
    question:
      "Tone words like 'admirable', 'commendable', 'praiseworthy' indicate the author's ___ tone.",
    options: ["Critical", "Neutral", "Appreciative", "Sarcastic"],
    correctIndex: 2,
    explanation:
      "These positive adjectives show the author has an appreciative or laudatory tone.",
  },
  {
    id: 243,
    topic: "RC Strategy",
    question: "The 'supporting detail' in a passage is used to:",
    options: [
      "Contradict the main idea",
      "Reinforce or explain the main idea",
      "Introduce a new topic",
      "End the passage",
    ],
    correctIndex: 1,
    explanation:
      "Supporting details provide evidence, examples, or explanation that back up the main idea.",
  },
  {
    id: 244,
    topic: "RC Strategy",
    question: "If a question uses the word 'EXCEPT', you must:",
    options: [
      "Find the one answer that IS true",
      "Find the one answer that is NOT true",
      "Ignore the question",
      "Choose the first option",
    ],
    correctIndex: 1,
    explanation:
      "'EXCEPT' questions ask you to identify the option that does NOT match the passage.",
  },
  {
    id: 245,
    topic: "RC Strategy",
    question: "What is the purpose of a 'topic sentence'?",
    options: [
      "To end a paragraph",
      "To introduce the main idea of a paragraph",
      "To provide statistics",
      "To list examples",
    ],
    correctIndex: 1,
    explanation:
      "A topic sentence introduces the central idea of a paragraph, usually at the beginning.",
  },
  {
    id: 246,
    topic: "RC Strategy",
    question:
      "When the passage uses 'on the one hand...on the other hand', it is using ___ structure.",
    options: [
      "Narrative",
      "Problem-solution",
      "Cause-effect",
      "Compare-contrast",
    ],
    correctIndex: 3,
    explanation:
      "This phrase signals a compare-contrast structure, presenting two different viewpoints.",
  },
  {
    id: 247,
    topic: "RC Strategy",
    question: "To identify the author's tone, you should look for:",
    options: [
      "Only the first sentence",
      "Word choice, adjectives, and overall attitude",
      "Only the conclusion",
      "Numbers and statistics",
    ],
    correctIndex: 1,
    explanation:
      "Tone is revealed through word choice, adjectives, and the overall emotional attitude of the writing.",
  },
  {
    id: 248,
    topic: "RC Strategy",
    question: "A 'global question' in RC asks about:",
    options: [
      "International topics only",
      "The passage as a whole (main idea, title, purpose)",
      "A specific detail in one paragraph",
      "Vocabulary meaning",
    ],
    correctIndex: 1,
    explanation:
      "Global questions require understanding the entire passage — its overall meaning or purpose.",
  },
  {
    id: 249,
    topic: "RC Strategy",
    question:
      "Transition words like 'for example', 'such as', 'namely' signal:",
    options: ["Contrast", "Cause", "Examples or illustrations", "Conclusion"],
    correctIndex: 2,
    explanation:
      "These phrases introduce specific examples or illustrations of a general statement.",
  },
  {
    id: 250,
    topic: "RC Strategy",
    question: "After reading a passage, which of these is NOT a good strategy?",
    options: [
      "Summarizing key points mentally",
      "Noting the author's tone",
      "Memorizing every word",
      "Identifying the main argument",
    ],
    correctIndex: 2,
    explanation:
      "Memorizing every word is inefficient and unnecessary; focus on key ideas, tone, and structure.",
  },

  // ==================== ADDITIONAL READING COMPREHENSION (Q251–Q350) ====================
  {
    id: 251,
    topic: "Reading Comprehension",
    question:
      "Read: 'Water is essential for life. Every living organism requires water to survive, grow, and reproduce. Without access to clean water, communities face severe health risks.'\n\nWhat is the main idea?",
    options: [
      "Water is rare",
      "Water is essential for life and health",
      "Organisms do not need water",
      "Clean water is only for humans",
    ],
    correctIndex: 1,
    explanation:
      "The passage emphasizes water's critical role for all living organisms and health.",
  },
  {
    id: 252,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q251, 'communities face severe health risks' means:",
    options: [
      "Communities are very healthy",
      "Communities may suffer health problems without clean water",
      "Communities ignore water issues",
      "Health risks are minor",
    ],
    correctIndex: 1,
    explanation:
      "The passage directly states that lack of access to clean water leads to severe health risks.",
  },
  {
    id: 253,
    topic: "Reading Comprehension",
    question:
      "Read: 'Exercise has numerous benefits. It strengthens the heart, builds muscle, improves mood, and boosts energy levels. Regular physical activity is key to a healthy lifestyle.'\n\nThe author's tone is:",
    options: [
      "Sarcastic",
      "Critical",
      "Positive and informative",
      "Indifferent",
    ],
    correctIndex: 2,
    explanation:
      "The passage presents exercise benefits enthusiastically — the tone is positive and informative.",
  },
  {
    id: 254,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q253, which is NOT mentioned as a benefit of exercise?",
    options: [
      "Strengthens the heart",
      "Improves mood",
      "Boosts energy",
      "Improves eyesight",
    ],
    correctIndex: 3,
    explanation:
      "The passage mentions heart, muscle, mood, and energy — eyesight is not mentioned.",
  },
  {
    id: 255,
    topic: "Reading Comprehension",
    question:
      "Read: 'The Internet has transformed how people communicate. Social media, email, and video calls have made it possible to connect with anyone, anywhere, instantly.'\n\nThe word 'transformed' most closely means:",
    options: [
      "Slightly improved",
      "Completely changed",
      "Damaged",
      "Interrupted",
    ],
    correctIndex: 1,
    explanation:
      "'Transformed' means fundamentally changed — matching 'completely changed'.",
  },
  {
    id: 256,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q255, which is listed as a way to communicate?",
    options: ["Television", "Radio", "Video calls", "Newspapers"],
    correctIndex: 2,
    explanation:
      "The passage explicitly mentions social media, email, and video calls.",
  },
  {
    id: 257,
    topic: "Reading Comprehension",
    question:
      "Read: 'Education is the most powerful weapon which you can use to change the world. It empowers individuals, reduces inequality, and drives economic growth.'\n\nThe author believes education:",
    options: [
      "Is optional",
      "Has no impact on society",
      "Is a transformative force",
      "Causes inequality",
    ],
    correctIndex: 2,
    explanation:
      "The author calls education the 'most powerful weapon' for change — it is a transformative force.",
  },
  {
    id: 258,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q257, education 'reduces inequality'. This means:",
    options: [
      "It increases the gap between rich and poor",
      "It helps level the playing field among people",
      "It only benefits the wealthy",
      "It has no economic impact",
    ],
    correctIndex: 1,
    explanation:
      "Reducing inequality means helping to close the gap between different social groups.",
  },
  {
    id: 259,
    topic: "Reading Comprehension",
    question:
      "Read: 'Climate change threatens global biodiversity. Rising temperatures and habitat destruction are leading to the extinction of countless species every year.'\n\nWhich is a cause of extinction, according to the passage?",
    options: [
      "Rainfall increase",
      "Habitat destruction",
      "Ocean cooling",
      "Biodiversity growth",
    ],
    correctIndex: 1,
    explanation:
      "The passage explicitly states 'habitat destruction' as a cause of species extinction.",
  },
  {
    id: 260,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q259, the author's tone is:",
    options: ["Humorous", "Alarmist/Concerned", "Optimistic", "Indifferent"],
    correctIndex: 1,
    explanation:
      "Words like 'threatens' and 'extinction' show concern and alarm about the environment.",
  },
  {
    id: 261,
    topic: "Reading Comprehension",
    question:
      "Read: 'Mahatma Gandhi led India's non-violent independence movement. His philosophy of Ahimsa (non-violence) inspired millions and continues to influence leaders worldwide.'\n\nWhat does 'Ahimsa' mean according to the passage?",
    options: ["Revolution", "Non-violence", "Protest", "Independence"],
    correctIndex: 1,
    explanation:
      "The passage explicitly defines 'Ahimsa' as non-violence in parentheses.",
  },
  {
    id: 262,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q261, Gandhi's philosophy continues to:",
    options: [
      "Be forgotten",
      "Influence leaders worldwide",
      "Be criticized",
      "Apply only in India",
    ],
    correctIndex: 1,
    explanation:
      "The passage states his philosophy 'continues to influence leaders worldwide'.",
  },
  {
    id: 263,
    topic: "Reading Comprehension",
    question:
      "Read: 'Smartphones have become an extension of human identity. People use them for communication, entertainment, navigation, and even health monitoring.'\n\nThe phrase 'extension of human identity' means:",
    options: [
      "Phones make people inhuman",
      "Phones have become central to how people live and define themselves",
      "Phones replace human identity",
      "Phones are purely entertainment devices",
    ],
    correctIndex: 1,
    explanation:
      "'Extension of identity' means these devices have become integrated into how people define and live their lives.",
  },
  {
    id: 264,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q263, which use of smartphones is NOT mentioned?",
    options: [
      "Communication",
      "Navigation",
      "Photography",
      "Health monitoring",
    ],
    correctIndex: 2,
    explanation:
      "The passage mentions communication, entertainment, navigation, and health monitoring — not photography.",
  },
  {
    id: 265,
    topic: "Reading Comprehension",
    question:
      "Read: 'The rainforest is often called the lungs of the Earth. It produces oxygen and absorbs carbon dioxide, playing a crucial role in regulating the planet's climate.'\n\nWhy is the rainforest called 'the lungs of the Earth'?",
    options: [
      "It breathes like humans",
      "It produces oxygen and absorbs CO2",
      "It is shaped like lungs",
      "It is wet and humid",
    ],
    correctIndex: 1,
    explanation:
      "Just as lungs process oxygen and CO2, the rainforest produces oxygen and absorbs carbon dioxide.",
  },
  {
    id: 266,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q265, the rainforest helps regulate:",
    options: [
      "Ocean currents",
      "The planet's climate",
      "Human population",
      "Soil erosion only",
    ],
    correctIndex: 1,
    explanation:
      "The passage states the rainforest plays 'a crucial role in regulating the planet's climate'.",
  },
  {
    id: 267,
    topic: "Reading Comprehension",
    question:
      "Read: 'Technology is a double-edged sword. While it has brought immense progress, it has also created new challenges such as cyber crime, privacy concerns, and digital addiction.'\n\nThe phrase 'double-edged sword' means:",
    options: [
      "A weapon used in combat",
      "Something with both benefits and drawbacks",
      "Something purely harmful",
      "A technological invention",
    ],
    correctIndex: 1,
    explanation:
      "'Double-edged sword' means something that has both positive and negative aspects.",
  },
  {
    id: 268,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q267, which challenge does technology create?",
    options: [
      "Unemployment only",
      "Environmental degradation only",
      "Cyber crime and privacy concerns",
      "Economic recession",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly mentions cyber crime, privacy concerns, and digital addiction as challenges.",
  },
  {
    id: 269,
    topic: "Reading Comprehension",
    question:
      "Read: 'India is a land of diversity. With hundreds of languages, thousands of customs, and a rich cultural heritage, India represents unity in diversity.'\n\nThe phrase 'unity in diversity' means:",
    options: [
      "All people are the same",
      "India has only one culture",
      "People with diverse backgrounds coexist harmoniously",
      "India lacks cultural identity",
    ],
    correctIndex: 2,
    explanation:
      "'Unity in diversity' means people with different backgrounds, languages, and customs live together harmoniously.",
  },
  {
    id: 270,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q269, India is described as having:",
    options: [
      "One official language",
      "Hundreds of languages",
      "No cultural heritage",
      "A uniform culture",
    ],
    correctIndex: 1,
    explanation:
      "The passage explicitly states India has 'hundreds of languages'.",
  },
  {
    id: 271,
    topic: "Reading Comprehension",
    question:
      "Read: 'Sleep is vital for physical and mental health. Lack of sleep impairs concentration, weakens immunity, and increases the risk of chronic diseases.'\n\nAccording to the passage, lack of sleep:",
    options: [
      "Improves concentration",
      "Has no health effects",
      "Impairs concentration and weakens immunity",
      "Only causes mental illness",
    ],
    correctIndex: 2,
    explanation:
      "The passage directly states these two effects of sleep deprivation.",
  },
  {
    id: 272,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q271, the word 'impairs' most likely means:",
    options: [
      "Improves",
      "Reduces the effectiveness of",
      "Increases",
      "Maintains",
    ],
    correctIndex: 1,
    explanation:
      "'Impairs' means to damage or reduce the effectiveness of something.",
  },
  {
    id: 273,
    topic: "Reading Comprehension",
    question:
      "Read: 'Renewable energy sources such as solar and wind power are crucial for sustainable development. They reduce dependence on fossil fuels and lower greenhouse gas emissions.'\n\nWhat are the benefits of renewable energy?",
    options: [
      "They are cheap but polluting",
      "They reduce fossil fuel dependence and lower emissions",
      "They increase greenhouse gas emissions",
      "They have no environmental benefit",
    ],
    correctIndex: 1,
    explanation:
      "The passage directly states these two benefits of renewable energy sources.",
  },
  {
    id: 274,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q273, examples of renewable energy given are:",
    options: [
      "Coal and natural gas",
      "Nuclear and hydro power",
      "Solar and wind power",
      "Oil and biomass",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly gives 'solar and wind power' as examples of renewable energy.",
  },
  {
    id: 275,
    topic: "Reading Comprehension",
    question:
      "Read: 'Mental health is as important as physical health. Depression, anxiety, and stress are widespread but are often stigmatized and ignored in many societies.'\n\nThe passage suggests mental health issues are often:",
    options: [
      "Well-treated",
      "Stigmatized and ignored",
      "Rare and uncommon",
      "Only physical in nature",
    ],
    correctIndex: 1,
    explanation:
      "The passage directly states mental health issues are 'stigmatized and ignored in many societies'.",
  },
  {
    id: 276,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q275, which conditions are mentioned?",
    options: [
      "Cancer and diabetes",
      "Depression, anxiety, and stress",
      "Heart disease and obesity",
      "Flu and fever",
    ],
    correctIndex: 1,
    explanation:
      "The passage explicitly mentions 'depression, anxiety, and stress' as widespread conditions.",
  },
  {
    id: 277,
    topic: "Reading Comprehension",
    question:
      "Read: 'Libraries are temples of knowledge. They provide free access to books, information, and learning resources, making education accessible to all regardless of economic status.'\n\nThe phrase 'temples of knowledge' is an example of:",
    options: ["Simile", "Metaphor", "Alliteration", "Personification"],
    correctIndex: 1,
    explanation:
      "Calling libraries 'temples of knowledge' is a metaphor — a direct comparison without using 'like' or 'as'.",
  },
  {
    id: 278,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q277, libraries help by:",
    options: [
      "Charging high fees for books",
      "Providing free access to information",
      "Excluding poor communities",
      "Replacing schools entirely",
    ],
    correctIndex: 1,
    explanation:
      "The passage states libraries provide 'free access to books, information, and learning resources'.",
  },
  {
    id: 279,
    topic: "Reading Comprehension",
    question:
      "Read: 'Urbanization is growing rapidly. While cities offer employment and infrastructure, they also face challenges like overcrowding, pollution, and inadequate housing.'\n\nWhich challenge is NOT mentioned?",
    options: [
      "Overcrowding",
      "Pollution",
      "Food scarcity",
      "Inadequate housing",
    ],
    correctIndex: 2,
    explanation:
      "The passage mentions overcrowding, pollution, and inadequate housing — food scarcity is not mentioned.",
  },
  {
    id: 280,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q279, the passage structure is:",
    options: [
      "Narrative",
      "Cause-effect only",
      "Problem-solution only",
      "Benefit-challenge (compare-contrast)",
    ],
    correctIndex: 3,
    explanation:
      "The passage presents both benefits (employment, infrastructure) and challenges — a benefit-challenge structure.",
  },
  {
    id: 281,
    topic: "Reading Comprehension",
    question:
      "Read: 'Social media connects people globally but also spreads misinformation rapidly. Critical thinking is essential to distinguish facts from fake news.'\n\nWhat skill does the author recommend?",
    options: [
      "Social media usage",
      "Critical thinking",
      "Speed reading",
      "Content creation",
    ],
    correctIndex: 1,
    explanation:
      "The author explicitly recommends 'critical thinking' to distinguish facts from misinformation.",
  },
  {
    id: 282,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q281, social media is described as:",
    options: [
      "Entirely beneficial",
      "Entirely harmful",
      "Both connecting and spreading misinformation",
      "Irrelevant in modern life",
    ],
    correctIndex: 2,
    explanation:
      "The passage presents both a benefit (connecting people) and a drawback (spreading misinformation).",
  },
  {
    id: 283,
    topic: "Reading Comprehension",
    question:
      "Read: 'The invention of the printing press in the 15th century revolutionized human communication. It made books affordable and spread ideas rapidly across Europe.'\n\nThe word 'revolutionized' means:",
    options: [
      "Slightly improved",
      "Completely transformed",
      "Disrupted negatively",
      "Maintained the same",
    ],
    correctIndex: 1,
    explanation:
      "'Revolutionized' means brought about a radical, fundamental change.",
  },
  {
    id: 284,
    topic: "Reading Comprehension",
    question:
      "Based on the passage in Q283, the printing press was invented in the:",
    options: ["14th century", "15th century", "16th century", "17th century"],
    correctIndex: 1,
    explanation: "The passage explicitly states 'the 15th century'.",
  },
  {
    id: 285,
    topic: "Reading Comprehension",
    question:
      "Read: 'Forests are vital ecosystems. They are home to 80% of the world's land-based species and provide humans with food, medicine, and clean air.'\n\nAccording to the passage, forests are home to:",
    options: [
      "50% of land-based species",
      "70% of land-based species",
      "80% of land-based species",
      "All species on earth",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly states '80% of the world's land-based species'.",
  },
  {
    id: 286,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q285, forests provide humans with:",
    options: [
      "Money and technology",
      "Food, medicine, and clean air",
      "Shelter and clothing only",
      "Water and electricity",
    ],
    correctIndex: 1,
    explanation:
      "The passage directly states forests provide 'food, medicine, and clean air'.",
  },
  {
    id: 287,
    topic: "Reading Comprehension",
    question:
      "Read: 'Honesty is the best policy. Those who are honest build trust and long-term relationships, while dishonesty eventually leads to downfall and isolation.'\n\nThe passage warns that dishonesty leads to:",
    options: [
      "Success and admiration",
      "Short-term gains only",
      "Downfall and isolation",
      "Trust and respect",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly states dishonesty 'eventually leads to downfall and isolation'.",
  },
  {
    id: 288,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q287, honesty helps build:",
    options: ["Wealth", "Power", "Trust and long-term relationships", "Fame"],
    correctIndex: 2,
    explanation:
      "The passage states honest people 'build trust and long-term relationships'.",
  },
  {
    id: 289,
    topic: "Reading Comprehension",
    question:
      "Read: 'The human brain is the most complex organ. It contains approximately 86 billion neurons that communicate through electrical and chemical signals.'\n\nHow many neurons does the human brain have?",
    options: ["86 million", "8.6 billion", "86 billion", "860 billion"],
    correctIndex: 2,
    explanation: "The passage explicitly states '86 billion neurons'.",
  },
  {
    id: 290,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q289, neurons communicate through:",
    options: [
      "Mechanical signals",
      "Light and heat signals",
      "Electrical and chemical signals",
      "Sound waves",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly states neurons communicate through 'electrical and chemical signals'.",
  },
  {
    id: 291,
    topic: "Reading Comprehension",
    question:
      "Read: 'Reading fiction enhances empathy. When readers immerse themselves in characters' perspectives, they develop a deeper understanding of human emotions and experiences.'\n\nAccording to the passage, reading fiction:",
    options: [
      "Reduces empathy",
      "Enhances empathy",
      "Has no effect on emotions",
      "Only benefits children",
    ],
    correctIndex: 1,
    explanation:
      "The passage directly states reading fiction 'enhances empathy'.",
  },
  {
    id: 292,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q291, empathy is developed by:",
    options: [
      "Reading textbooks",
      "Watching movies",
      "Immersing in characters' perspectives",
      "Playing sports",
    ],
    correctIndex: 2,
    explanation:
      "The passage explains that immersing in fictional characters' perspectives develops empathy.",
  },
  {
    id: 293,
    topic: "Reading Comprehension",
    question:
      "Read: 'Yoga, originating in ancient India, is now practiced worldwide. It combines physical postures, breathing techniques, and meditation to promote health and well-being.'\n\nYoga originated in:",
    options: ["China", "Greece", "Ancient India", "Egypt"],
    correctIndex: 2,
    explanation:
      "The passage explicitly states yoga originated in 'ancient India'.",
  },
  {
    id: 294,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q293, yoga combines:",
    options: [
      "Diet, exercise, and sleep",
      "Physical postures, breathing, and meditation",
      "Sports, music, and art",
      "Medicine, science, and philosophy",
    ],
    correctIndex: 1,
    explanation: "The passage explicitly lists these three components of yoga.",
  },
  {
    id: 295,
    topic: "Reading Comprehension",
    question:
      "Read: 'Democracy is a system where citizens choose their leaders through free and fair elections. It protects individual rights and promotes accountability of the government.'\n\nIn a democracy, leaders are chosen by:",
    options: [
      "The military",
      "A single ruling party",
      "Citizens through elections",
      "Religious leaders",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly states 'citizens choose their leaders through free and fair elections'.",
  },
  {
    id: 296,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q295, democracy promotes:",
    options: [
      "Authoritarianism",
      "Accountability of the government",
      "Suppression of rights",
      "Military rule",
    ],
    correctIndex: 1,
    explanation:
      "The passage states democracy 'promotes accountability of the government'.",
  },
  {
    id: 297,
    topic: "Reading Comprehension",
    question:
      "Read: 'Time management is a critical skill. Prioritizing tasks, setting deadlines, and avoiding procrastination help individuals achieve their goals efficiently.'\n\nWhich is listed as a time management strategy?",
    options: [
      "Multi-tasking",
      "Procrastination",
      "Prioritizing tasks",
      "Ignoring deadlines",
    ],
    correctIndex: 2,
    explanation:
      "The passage explicitly lists 'prioritizing tasks' as a time management strategy.",
  },
  {
    id: 298,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q297, procrastination is presented as:",
    options: [
      "A helpful strategy",
      "Something to be avoided",
      "A neutral habit",
      "Beneficial in moderation",
    ],
    correctIndex: 1,
    explanation:
      "The passage says 'avoiding procrastination' helps achieve goals — implying it is negative.",
  },
  {
    id: 299,
    topic: "Reading Comprehension",
    question:
      "Read: 'Space exploration expands human knowledge. Missions like the Moon landing and Mars rover have revealed valuable information about our solar system.'\n\nWhich missions are mentioned?",
    options: [
      "Voyager and Hubble",
      "Moon landing and Mars rover",
      "Apollo and Sputnik",
      "ISRO and NASA missions generally",
    ],
    correctIndex: 1,
    explanation:
      "The passage explicitly mentions 'the Moon landing and Mars rover'.",
  },
  {
    id: 300,
    topic: "Reading Comprehension",
    question: "Based on the passage in Q299, space exploration:",
    options: [
      "Has no scientific value",
      "Expands human knowledge",
      "Is only about finding life",
      "Has stopped in modern times",
    ],
    correctIndex: 1,
    explanation:
      "The passage's opening statement is that space exploration 'expands human knowledge'.",
  },
];

// Combined export used by GrammarPractice
export const ALL_GRAMMAR_QUESTIONS = [
  ...GRAMMAR_QUESTIONS,
  ...EXTRA_GRAMMAR_QUESTIONS,
];
