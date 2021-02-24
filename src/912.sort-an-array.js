// 冒泡
var sortArray = function(nums) {
    for (let i = nums.length - 1; i >= 0 ; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums;
};

// 选择
var sortArray = function(nums) {
    const length = nums.length
    let minIndex = 0
    for(let i = 0; i < length - 1; i++){
        minIndex = i
        for(let j = i; j < length; j++){
            if(nums[minIndex] > nums[j]){
                minIndex = j
            }
        }
        if(i !== minIndex){
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums
};

// 插入
var sortArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (temp >= nums[j]) break;
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = temp;
    }
    return nums;
};

// 快排
var sortArray = function(arr) {
    const swap = (p1, p2) => [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
    const sortRange = (start, end) => {
        let pivot = arr[start]
        let left = start;
        let right = end-1;
        while(left < right) {
            swap(left, left+1)
            while(pivot < arr[left]  && left < right){
                swap(left, right--);
            }
            left++
        }
        if(start < left-1) {
            sortRange(start, left)
        }
        if(left < end-1) {
            sortRange(left, end)
        }
    }
    sortRange(0, arr.length);
    return arr;
};

var sortArray = function(nums) {
    function quick (f, t) {
        if (f >= t) {
            return
        }
        let i = f
        let j = t
        let cur = nums[f]
        while (i < j) {
            while (nums[j] >= cur && i < j) {
                j --
            }
            nums[i] = nums[j]
            while (nums[i] <= cur && i < j) {
                i ++
            }
            nums[j] = nums[i]
        }
        nums[i] = cur
        quick(f, i - 1)
        quick(i + 1, t)
    }
    quick(0, nums.length - 1)
    return nums
};