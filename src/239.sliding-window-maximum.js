/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  //分块与预处理
  //左右分块
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i % k === 0) {
      right[i] = nums[i];
    } else {
      right[i] = Math.max(right[i - 1], nums[i]);
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i + 1 === n || (i + 1) % k === 0) {
      left[i] = nums[i];
    } else {
      left[i] = Math.max(left[i + 1], nums[i]);
    }
  }

  for (let i = 0; i <= n - k; i++) {
    res.push(Math.max(left[i], right[i + k - 1]));
  }
  return res;
};


// 双端队列
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  if (n < 2 || k === 1) return nums

  const ans = new Array(n - k + 1)
  const q = []
  for (let i = 0; i < n; i++) {
    // 保证从大到小 如果前面数小则需要依次弹出，直至满足要求
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop()
    }
    q.push(i) // 添加当前值对应的数组下标
    if (q[0] <= i - k) {
      q.shift()
    }
    if (i + 1 >= k) {
      ans[i + 1 - k] = nums[q[0]]
    }
  }
  return ans
};