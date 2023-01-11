function countUniqueValues(nums) {
  let count = 0;
  let left = 0;
  let right = left + 1;

  while (right < nums.length + 1) {
    if (nums[left] !== nums[right]) {
      count++;
      left = right;
    }

    right++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1])); // 1
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
