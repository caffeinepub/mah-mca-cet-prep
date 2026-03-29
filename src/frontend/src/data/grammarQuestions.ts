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
