function binarySearch(nums, searched) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low < high) {
    if (nums[mid] === searched) return mid;

    if (nums[mid] > searched) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = Math.floor((low + high) / 2);
  }

  return nums[mid] ? mid : -1;
}

console.log(binarySearch([1, 4, 8, 9, 12], 12));
console.log(binarySearch([1, 4, 8, 9], 4));
