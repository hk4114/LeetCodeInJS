// 冒泡
var sortArray = function(nums) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[j]<nums[i]) {
                [nums[i],nums[j]] = [nums[j],nums[i]]
            }
        }
    }
    return nums
};

// 快排

// 选择排序

// 插入排序