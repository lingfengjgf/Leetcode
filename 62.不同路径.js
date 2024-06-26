/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1 ||n === 1) return 1;
  let dp = [];
  for (let i = 0; i < m; i++) {
      if (!dp[i]) dp[i] = [1];
      for (let j = 0; j < n; j++) {
          if (j === 0 || i === 0) {
              dp[i][j] = 1;
          } else {
              dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
          }
      }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

