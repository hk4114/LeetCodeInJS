/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 直接合并排序
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1
};

var merge = function (nums1, m, nums2, n) {
  let arr = [];
  for (let i = 0, j = 0; i < m && j < n;) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if (n1 > n2) {
      arr.push(n2)
    } else {
      arr.push(n1)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
  return arr
};

// 双指针
var merge = function (nums1, m, nums2, n) {
  let arr = new Array(m + n).fill(0);
  let cur;
  for (let i = 0, j = 0; i < m || j < n;) {
    if (j === n) {
      cur = nums1[i++]
    } else if (i === m) {
      cur = nums2[j++]
    } else if (nums1[i] > nums2[j]) {
      cur = nums2[j++]
    } else {
      cur = nums1[i++]
    }
    arr[i + j - 1] = cur
  }
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
  return nums1
};

// 尾双指针
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let tail = m + n + 1;
  while (tail >= 0) {
    nums1[tail] = num1[i] > nums2[j] ? num1[i--] : nums2[j--];
    tail--
  }
  return nums1
};