import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

interface DummyData {
  date: string;
  problemLink: string;
  problemPlatform: string;
  result: string;
  attemptNo: number;
  timeTaken: number;
  problemCategory: string[];
  difficulty: string;
  problemTitle: string;
}

const useDummyData = (numEntries: number = 50): DummyData[] => {
  const resultOptions = ["Happy", "CanDoBetter", "TryAgain", "Done"];
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const problemPlatformOptions = [
    "LeetCode",
    "HackerRank",
    "GeeksforGeeks",
    "CodeChef",
    "GreatFrontEnd",
  ];
  const problemCategoryOptions = [
    "backtracking",
    "binary_indexed_tree",
    "binary_search",
    "binary_search_tree",
    "binary_tree",
    "bit_manipulation",
    "bitmask",
    "breadth_first_search",
    "brainteaser",
    "bucket_sort",
    "counting",
    "counting_sort",
    "concurrency",
    "combinatorics",
    "data_stream",
    "database",
    "depth_first_search",
    "design",
    "divide_and_conquer",
    "doubly_linked_list",
    "dynamic_programming",
    "enumeration",
    "eulerian_circuit",
    "geometry",
    "game_theory",
    "graph",
    "greedy",
    "hash_function",
    "hash_table",
    "heap_priority_queue",
    "interactive",
    "iterator",
    "linked_list",
    "line_sweep",
    "matrix",
    "merge_sort",
    "memoization",
    "minimum_spanning_tree",
    "monotonic_queue",
    "monotonic_stack",
    "number_theory",
    "ordered_set",
    "prefix_sum",
    "probability_and_statistics",
    "quickselect",
    "recursion",
    "reservoir_sampling",
    "rolling_hash",
    "shortest_path",
    "shell",
    "simulation",
    "sliding_window",
    "stack",
    "strongly_connected_component",
    "suffix_array",
    "topological_sort",
    "trie",
    "tree",
    "two_pointers",
    "union_find",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const generateDummyData = (): DummyData[] => {
      return Array.from({ length: numEntries }, () => ({
        date: faker.date.recent(365).toLocaleDateString("en-GB"),
        problemLink: faker.internet.url(),
        problemPlatform: faker.helpers.arrayElement(problemPlatformOptions),
        result: faker.helpers.arrayElement(resultOptions),
        attemptNo: faker.number.int({ min: 1, max: 10 }),
        timeTaken: faker.number.int({ min: 1, max: 120 }),
        problemCategory: faker.helpers.arrayElements(
          problemCategoryOptions,
          faker.number.int({ min: 1, max: 3 })
        ),
        difficulty: faker.helpers.arrayElement(difficultyOptions),
        problemTitle: faker.lorem.words(3),
      }));
    };

    setData(generateDummyData());
  }, [numEntries]);

  return data;
};

export default useDummyData;
