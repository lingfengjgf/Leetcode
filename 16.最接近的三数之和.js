/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  let res = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b );
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    while ( left < right ) {
      const sum = nums[i] + nums[left] + nums[right];
      if ( Math.abs( target - sum ) < Math.abs( target - res )  ) {
        res = sum;
      }
      if ( sum < target ) {
        left++;
      }else if ( sum > target ) {
        right--;
      } else {
        return sum
      }
    }
  }
  return res;
};
// @lc code=end

