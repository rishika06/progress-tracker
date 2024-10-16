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
