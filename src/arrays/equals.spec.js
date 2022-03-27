import { compareArrays } from "./equals";

test.only("compare two arryas", () => {
  expect(compareArrays([1, 2], [1, 2])).toBeTruthy();
  expect(compareArrays([1, 2], [2, 3])).toBeFalsy();
});
