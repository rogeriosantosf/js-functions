import { fibo } from "./fibo";

test("returns the seventh number in Fibonacci Sequence", () => {
  expect(fibo(6)).toEqual(8);
});
