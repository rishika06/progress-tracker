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

export const problemCategoryOptions = [
  { key: "Backtracking", value: "backtracking" },
  { key: "Binary Indexed Tree", value: "binary_indexed_tree" },
  { key: "Binary Search", value: "binary_search" },
  { key: "Binary Search Tree", value: "binary_search_tree" },
  { key: "Binary Tree", value: "binary_tree" },
  { key: "Bit Manipulation", value: "bit_manipulation" },
  { key: "Bitmask", value: "bitmask" },
  { key: "Breadth-First Search", value: "breadth_first_search" },
  { key: "Brainteaser", value: "brainteaser" },
  { key: "Bucket Sort", value: "bucket_sort" },
  { key: "Counting", value: "counting" },
  { key: "Counting Sort", value: "counting_sort" },
  { key: "Concurrency", value: "concurrency" },
  { key: "Combinatorics", value: "combinatorics" },
  { key: "Data Stream", value: "data_stream" },
  { key: "Database", value: "database" },
  { key: "Depth-First Search", value: "depth_first_search" },
  { key: "Design", value: "design" },
  { key: "Divide and Conquer", value: "divide_and_conquer" },
  { key: "Doubly-Linked List", value: "doubly_linked_list" },
  { key: "Dynamic Programming", value: "dynamic_programming" },
  { key: "Enumeration", value: "enumeration" },
  { key: "Eulerian Circuit", value: "eulerian_circuit" },
  { key: "Geometry", value: "geometry" },
  { key: "Game Theory", value: "game_theory" },
  { key: "Graph", value: "graph" },
  { key: "Greedy", value: "greedy" },
  { key: "Hash Function", value: "hash_function" },
  { key: "Hash Table", value: "hash_table" },
  { key: "Heap (Priority Queue)", value: "heap_priority_queue" },
  { key: "Interactive", value: "interactive" },
  { key: "Iterator", value: "iterator" },
  { key: "Linked List", value: "linked_list" },
  { key: "Line Sweep", value: "line_sweep" },
  { key: "Matrix", value: "matrix" },
  { key: "Merge Sort", value: "merge_sort" },
  { key: "Memoization", value: "memoization" },
  { key: "Minimum Spanning Tree", value: "minimum_spanning_tree" },
  { key: "Monotonic Queue", value: "monotonic_queue" },
  { key: "Monotonic Stack", value: "monotonic_stack" },
  { key: "Number Theory", value: "number_theory" },
  { key: "Ordered Set", value: "ordered_set" },
  { key: "Prefix Sum", value: "prefix_sum" },
  { key: "Probability and Statistics", value: "probability_and_statistics" },
  { key: "Quickselect", value: "quickselect" },
  { key: "Recursion", value: "recursion" },
  { key: "Reservoir Sampling", value: "reservoir_sampling" },
  { key: "Rolling Hash", value: "rolling_hash" },
  { key: "Shortest Path ", value: "shortest_path" },
  { key: "Shell ", value: "shell" },
  { key: "Simulation ", value: "simulation" },
  { key: "Sliding Window ", value: "sliding_window" },
  { key: "Stack ", value: "stack" },
  {
    key: "Strongly Connected Component ",
    value: "strongly_connected_component",
  },
  { key: "Suffix Array ", value: "suffix_array" },
  { key: "Topological Sort ", value: "topological_sort" },
  { key: "Trie ", value: "trie" },
  { key: "Tree ", value: "tree" },
  { key: "Two Pointers ", value: "two_pointers" },
  { key: "Union Find ", value: "union_find" },
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
