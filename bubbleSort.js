function bubbleSort(arr) {
  let noSwaps = true;

  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([3, 1, 8, 4, 27, -3]));
