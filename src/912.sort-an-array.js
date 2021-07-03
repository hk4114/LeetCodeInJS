// 冒泡
var sortArray = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums;
};


// 选择
var sortArray = function (nums) {
  const length = nums.length
  let minIndex = 0
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i; j < length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
  }
  return nums
};

// 快排
var sortArray = function (nums) {
  const quickSort = (start, end) => {
    if (start >= end) {
      return
    }
    let left = start, right = end, p = nums[start];
    while (left < right) {
      while (left < right && nums[right] >= p) {
        right--
      }
      nums[left] = nums[right];
      while (left < right && nums[left] <= p) {
        left++
      }
      nums[right] = nums[left]
    }
    nums[left] = p;
    quickSort(start, left - 1);
    quickSort(left + 1, end)
  }
  quickSort(0, nums.length - 1)
  return nums
}

// 归并排序
var sortArray = function (nums) {
  // If array is empty or consists of one element then return this array since it is sorted.
  if (nums.length <= 1) {
    return nums;
  }
  // Split array on two halves.
  const middleIndex = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, middleIndex);
  const rightArray = nums.slice(middleIndex, nums.length);
  // Sort two halves of split array
  const leftSortedArray = sortArray(leftArray);
  const rightSortedArray = sortArray(rightArray);
  // Merge two sorted arrays into one.
  return mergeSort(leftSortedArray, rightSortedArray);
};

function mergeSort(leftArray, rightArray) {
  const sortedArray = [];
  // Use array pointers to exclude old elements after they have been added to the sorted array.
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let minElement = null;
    // Find the minimum element between the left and right array.
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      minElement = leftArray[leftIndex];
      // Increment index pointer to the right
      leftIndex += 1;
    } else {
      minElement = rightArray[rightIndex];
      // Increment index pointer to the right
      rightIndex += 1;
    }
    // Add the minimum element to the sorted array.
    sortedArray.push(minElement);
  }
  // There will be elements remaining from either the left OR the right
  // Concatenate the remaining elements into the sorted array
  return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}