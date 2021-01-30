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
var sortArray = function(nums) {
    if( nums.length <= 1 ) return nums
    let left = []
    let right = []
    let pivotIndex  = Math.floor(nums.length / 2)
    let pivotValue =  nums.splice(pivotIndex,1)[0]
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] > pivotValue){
            right.push(nums[i])
        }else{
            left.push(nums[i])
        }
    }
    return sortArray(left).concat(pivotValue,sortArray(right))
};
