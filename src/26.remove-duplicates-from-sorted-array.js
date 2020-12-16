var removeDuplicates = function(nums) {
    const len = nums.length;
    let slow = 0;
    for(let fast=0;fast<len;fast++) {
        if(nums[fast]!== nums[slow]) {
            slow++;
            nums[slow] = nums[fast]
        }
    }
    return slow+1
};