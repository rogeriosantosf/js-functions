import { compareArrays } from "./equals";
import { findSubArrays } from "./find-sub-arrays";

test("finds all possible sub arrays for a given array", () => {
  const subArrays = findSubArrays([1, 2, 3, 4]);
  const expectedSubArrays = [
    [1],
    [2],
    [3],
    [4],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2, 3],
    [2, 3, 4],
    [1, 2, 3, 4],
  ];

  for (const subArray of expectedSubArrays) {
    expect(subArrays.find((n) => compareArrays(n, subArray))).toBeDefined();
  }
});
