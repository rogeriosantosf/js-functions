export function findSubArrays(arr) {
  const subArrays = [];
  for (let x = 0; x < arr.length; x++) {
    subArrays.push([arr[x]]);
    for (let y = 1 + x; y < arr.length; y++) {
      subArrays.push([...subArrays[subArrays.length - 1], arr[y]]);
    }
  }
  return subArrays;
}

