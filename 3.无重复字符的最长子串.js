/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }

  let left = 0;
  let right = 1;
  let max = 0;
  let str = '';
  while (right < s.length) {
    str = s.slice(left, right);
    const strHasSIndex = str.indexOf(s.charAt(right));
    if (strHasSIndex > -1) {
      left+=strHasSIndex + 1;
    } else {
      right++;
    }

    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};
// @lc code=end

