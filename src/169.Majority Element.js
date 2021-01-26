/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cache = {};
    for(let i=0;i<nums.length;i++) {
        if(cache[nums[i]]) {
            cache[nums[i]] += 1;
        }else {
            cache[nums[i]] = 1
        }
    }
    let max = 0;
    let r = 0;
    for(let i of Object.keys(cache)) {
        if(cache[i]>max) {
            max = cache[i];
            r = i
        }
    }
    return r
};
// the best practice Boyer-Moore
var majorityElement = function(nums) {
    let count = 0;
    let majority = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count ++;
        } else {
            count --;
        }
    }
    return majority;
};
// Boyer-Moore 算法的本质和方法四中的分治十分类似。我们首先给出 Boyer-Moore 算法的详细步骤：

// 我们维护一个候选众数 candidate 和它出现的次数 count。初始时 candidate 可以为任意值，count 为 0；

// 我们遍历数组 nums 中的所有元素，对于每个元素 x，在判断 x 之前，如果 count 的值为 0，我们先将 x 的值赋予 candidate，随后我们判断 x：

// 如果 x 与 candidate 相等，那么计数器 count 的值增加 1；

// 如果 x 与 candidate 不等，那么计数器 count 的值减少 1。

// 在遍历完成后，candidate 即为整个数组的众数。
