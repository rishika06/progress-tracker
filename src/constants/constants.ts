export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export const difficultyOptions = [
  { key: Difficulty.Easy, value: Difficulty.Easy },
  { key: Difficulty.Medium, value: Difficulty.Medium },
  { key: Difficulty.Hard, value: Difficulty.Hard },
];

export enum Result {
  Happy = "Happy",
  CanDoBetter = "Can do better",
  TryAgain = "Try Again",
  Done = "Done",
}

export const resultOptions = [
  { key: Result.Happy, value: Result.Happy },
  { key: Result.CanDoBetter, value: Result.CanDoBetter },
  { key: Result.TryAgain, value: Result.TryAgain },
  { key: Result.Done, value: Result.Done },
];

export enum ProblemPlatform {
  LeetCode = "LeetCode",
  HackerRank = "HackerRank",
  GeeksforGeeks = "GeeksforGeeks",
  CodeChef = "CodeChef",
  GreatFrontEnd = "GreatFrontEnd",
}

export const problemPlatformOptions = [
  { key: ProblemPlatform.LeetCode, value: ProblemPlatform.LeetCode },
  { key: ProblemPlatform.HackerRank, value: ProblemPlatform.HackerRank },
  { key: ProblemPlatform.GeeksforGeeks, value: ProblemPlatform.GeeksforGeeks },
  { key: ProblemPlatform.CodeChef, value: ProblemPlatform.CodeChef },
  { key: ProblemPlatform.GreatFrontEnd, value: ProblemPlatform.GreatFrontEnd },
];

export type FormDataType = {
  date: string;
  problemLink: string | null;
  problemPlatform: string;
  // result: "Happy" | "Sad" | "Neutral";
  result: string;
  attemptNo: number;
  timeTaken: number;
  problemCategory: string[];
  // difficulty: "Easy" | "Medium" | "Hard";
  difficulty: string;
  problemTitle: string;
};

export const dummyFormData = [
  {
    date: "16-10-2024",
    problemLink: "https://unsplash.com/t/nature",
    problemPlatform: "HackerRank",
    result: "Happy",
    attemptNo: 5,
    timeTaken: 12,
    problemCategory: ["react"],
    difficulty: "Easy",
    problemTitle: "Nature Walk",
  },
  {
    date: "17-10-2024",
    problemLink: "https://unsplash.com/t/technology",
    problemPlatform: "LeetCode",
    result: "Sad",
    attemptNo: 3,
    timeTaken: 15,
    problemCategory: ["javascript"],
    difficulty: "Medium",
    problemTitle: "Tech Challenge",
  },
  {
    date: "18-10-2024",
    problemLink: "https://unsplash.com/t/architecture",
    problemPlatform: "Codewars",
    result: "Neutral",
    attemptNo: 1,
    timeTaken: 8,
    problemCategory: ["html", "css"],
    difficulty: "Easy",
    problemTitle: "Design Layout",
  },
  {
    date: "19-10-2024",
    problemLink: "https://unsplash.com/t/food",
    problemPlatform: "Coderbyte",
    result: "Happy",
    attemptNo: 2,
    timeTaken: 20,
    problemCategory: ["python"],
    difficulty: "Hard",
    problemTitle: "Recipe Analyzer",
  },
  {
    date: "20-10-2024",
    problemLink: "https://unsplash.com/t/travel",
    problemPlatform: "HackerRank",
    result: "Happy",
    attemptNo: 4,
    timeTaken: 25,
    problemCategory: ["javascript", "react"],
    difficulty: "Medium",
    problemTitle: "Travel Planner",
  },
  {
    date: "21-10-2024",
    problemLink: "https://unsplash.com/t/science",
    problemPlatform: "LeetCode",
    result: "Sad",
    attemptNo: 6,
    timeTaken: 18,
    problemCategory: ["data science"],
    difficulty: "Hard",
    problemTitle: "Data Insights",
  },
  {
    date: "22-10-2024",
    problemLink: "https://unsplash.com/t/science",
    problemPlatform: "Codewars",
    result: "Happy",
    attemptNo: 1,
    timeTaken: 10,
    problemCategory: ["data science"],
    difficulty: "Easy",
    problemTitle: "Science Experiment",
  },
  {
    date: "23-10-2024",
    problemLink: "https://unsplash.com/t/coding",
    problemPlatform: "HackerRank",
    result: "Neutral",
    attemptNo: 2,
    timeTaken: 30,
    problemCategory: ["python", "algorithms"],
    difficulty: "Medium",
    problemTitle: "Algorithm Challenge",
  },
  {
    date: "24-10-2024",
    problemLink: "https://unsplash.com/t/fitness",
    problemPlatform: "LeetCode",
    result: "Happy",
    attemptNo: 3,
    timeTaken: 22,
    problemCategory: ["fitness", "wellness"],
    difficulty: "Easy",
    problemTitle: "Fitness Tracker",
  },
  {
    date: "25-10-2024",
    problemLink: "https://unsplash.com/t/music",
    problemPlatform: "Coderbyte",
    result: "Sad",
    attemptNo: 1,
    timeTaken: 5,
    problemCategory: ["music"],
    difficulty: "Hard",
    problemTitle: "Music Playlist",
  },
  {
    date: "26-10-2024",
    problemLink: "https://unsplash.com/t/games",
    problemPlatform: "Codewars",
    result: "Happy",
    attemptNo: 2,
    timeTaken: 14,
    problemCategory: ["gaming"],
    difficulty: "Medium",
    problemTitle: "Game Development",
  },
];
