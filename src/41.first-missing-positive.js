function firstMissingPositive(nums) {
  let count = 1;
  const filterNums = nums.sort((a, b) => a - b).filter(v => v > 0);
  for (let i = 0; i <= filterNums.length; i++) {
    if (count == filterNums[i]) {
      count++
    } else if (filterNums[i] > count) {
      break
    }
  }
  return count
};

var firstMissingPositive = function (nums) {
  var len = nums.length;
  var rect = {};
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    if (num > len || num <= 0) continue;
    rect[num] = true;
  }
  for (let i = 0; i <= len; i++) {
    if (rect[i + 1]) continue;
    return i + 1;
  }
  return 1;
};