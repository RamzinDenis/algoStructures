function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      console.log(swapIdx, i, start, arr);
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, swapIdx, start);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivIdx = pivot(arr, left, right);
    quickSort(arr, left, pivIdx - 1);
    quickSort(arr, pivIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([3, 4, 5, 1, 2, 8]));
