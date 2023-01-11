function maxSubArraySum2(arr, n) {
  let left = 0;
  let right = left + n;
  let sum = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[left];

    if (right === left) {
      currentSum = currentSum - arr[left - n];
      right++;
    }

    sum = Math.max(currentSum, sum);

    left++;
  }

  return sum;
}

function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (n > arr.length) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
