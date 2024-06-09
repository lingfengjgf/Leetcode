/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var obj = { depth: 0 }
  depth = preOrder(root, 0, obj);
  return obj.depth;
};

var preOrder = function(root, currentDepth, obj) {
    if (!root) return;
    currentDepth += 1;
    if (currentDepth > obj.depth) {
        obj.depth = currentDepth;
    }
    preOrder(root.left, currentDepth, obj);
    preOrder(root.right, currentDepth, obj);
}


var maxDepth2 = function(root) {
  if (!root) return 0;
  let leftDepth = maxDepth2(root.left);
  let rightDepth = maxDepth2(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};
// @lc code=end

