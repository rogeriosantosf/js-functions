import { flatten } from "./flatten";

test("flattens a multi level array", () => {
  expect(flatten([1, 2, [3, 4, 5, [6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});
