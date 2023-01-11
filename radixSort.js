function getDigit(num, n) {
  return Math.floor(Math.abs(num) / Math.pow(10, n)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;

  for (let num of arr) {
    max = Math.max(max, digitCount(num));
  }

  return max;
}

function radixSort(nums) {
  let n = mostDigits(nums);

  for (let i = 0; i < n; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      console.log(nums);
      const digit = getDigit(num, i);

      buckets[digit].push(num);
    }

    nums = [].concat(...buckets);
  }

  return nums;
}

console.log(radixSort([1, 3, 0, 44, 4325, 2342]));
