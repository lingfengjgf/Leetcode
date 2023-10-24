/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  let len = dictionary.length;
  let sIndex = 0;
  let dIndex = 0;
  let res = '';
  for (let i = 0; i < len; i++) {
    sIndex = 0;
    dIndex = 0;
    let str = dictionary[i];
    while (sIndex < s.length && dIndex < str.length) {
      if (s.charAt(sIndex) === str.charAt(dIndex)) {
        dIndex++;
      }

      if (str.length === dIndex){
        if (str.length > res.length || (str.length === res.length && str < res)) {
          res = str;
        }
      }

      sIndex++;
    }
  }
  return res;
};
// @lc code=end

