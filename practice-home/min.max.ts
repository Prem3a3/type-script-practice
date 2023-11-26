function minMax(arr: number[]) {
  const sortedNumbers = arr.sort();
  let min = 0;
  let max = 0;
  for (let i = 0; i < sortedNumbers.length - 2; i++) {
    min = min + sortedNumbers[i];
  }
  for (let i = sortedNumbers.length - 1; i >= 1; i--) {
    max = max + sortedNumbers[i];
  }
  console.log(max + " " + min);
}

minMax([1, 2, 3, 4,5]);
