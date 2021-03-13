var threeSum = function (nums) {
  let l = nums.length;
  if (l < 3) {
    return []
  }
  let list = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < l; i++) { // <=

    if (nums[i] === nums[i - 1]) { // 重复则跳过
      continue
    }

    let left = i + 1;
    let right = l - 1;
    while (left < right) {
      if (right === i) {
        right--
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) { // 重复
          left++
        }
        left++

        while (nums[right] === nums[right - 1]) { // 重复
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return list
};