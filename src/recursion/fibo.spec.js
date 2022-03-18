import { fibo } from "./fibo";

test("returns the fifth position in the Fibonacci Sequence", () => {
  expect(fibo(4)).toEqual(3);
  expect(fibo(5)).toEqual(5);
  expect(fibo(6)).toEqual(8);
});

test("returns the fifth position in the Fibonacci Sequence", () => {
  expect(fibo(100)).toEqual(354224848179262000000);
}, 5000);
