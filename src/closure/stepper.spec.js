import { stepper } from "./stepper";

test("flattens a multi level array", () => {
  expect(stepper()).toEqual(1);
  expect(stepper()).toEqual(2);
  expect(stepper()).toEqual(3);
  expect(stepper()).toEqual(1);
});
