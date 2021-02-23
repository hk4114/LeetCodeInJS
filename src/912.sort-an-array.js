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
function qSort(compare) {
    var swap = (p1, p2) => {
        var tmp = this[p1];
        this[p1] = this[p2];
        this[p2] = tmp; 
    }
    var sortRange = (start, end) => {
        var midValue = this[start];
        var p1 = start, p2 = end - 1;
        while(p1 < p2) {
            swap(p1, p1 + 1);
            while(compare(this[p1], midValue) <= 0 && p1 < p2) {
                swap(p1, p2--);
            }
            p1 ++;
        }
        if(start < p1 - 1) 
            sortRange(start, p1);
        if(p1 < end - 1) 
            sortRange(p1, end);
        
    }
    sortRange(0, this.length);
    return this;
}
console.log(qSort.call([6, 1, 2, 7, 9, 3, 4, 5, 10, 8], (a, b) => b - a))