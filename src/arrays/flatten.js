// inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
// function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flatten = (array) =>
  array.reduce(
    (flattened, item) =>
      flattened.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
