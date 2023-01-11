function merge(arrLeft, arrRight) {
  const result = [];
  let left = 0;
  let right = 0;

  while (left < arrLeft.length && right < arrRight.length) {
    if (arrLeft[left] < arrRight[right]) {
      result.push(arrLeft[left]);
      left++;
    } else {
      result.push(arrRight[right]);
      right++;
    }
  }

  return result.concat(arrLeft.slice(left)).concat(arrRight.slice(right));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 2, 3, 99]));
