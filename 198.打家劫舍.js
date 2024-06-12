/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  let x = 0;
  let y = nums[0];
  let t = 0;
  for (let i = 1; i < len; i++) {
      t = Math.max(y, x + nums[i]);
      x = y;
      y = t;
  }
  return y;
};
// @lc code=end

