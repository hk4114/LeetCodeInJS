/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left < right) {
        const area = Math.abs(right-left) * Math.min(height[left],height[right]);
        if(area > max) {
            max = area
        }
        if(height[left]<height[right]) {
            left++
        }else {
            right--
        }
    }
    return max
};