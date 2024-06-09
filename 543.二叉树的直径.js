/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
let res = 0;
var diameterOfBinaryTree = function(root) {
    res = 0;
    help(root);
    return res;
};

var help = function(root) {
    if (!root) return 0;
    var leftDepth = help(root.left);
    var rightDepth = help(root.right);
    var sum = leftDepth + rightDepth;
    res = Math.max(res, sum);
    return Math.max(leftDepth, rightDepth) + 1;
}
// @lc code=end

