function twoSum(nums, target) {
  const l = nums.length;
  let map = {};
  for (let i = 0; i < l; i++) {
    const r = target - nums[i];
    const find = map[r]
    if (find !== undefined) {
      return [find, i]
    } else {
      map[nums[i]] = i
    }
  }
  return []
}