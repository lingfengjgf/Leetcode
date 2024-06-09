/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let map = {};
var buildTree = function(preorder, inorder) {
    map = {};
    for(let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function build (preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) return null;

    let leftRoot = preorder[preStart];
    let index = map[leftRoot];
    let leftLength = index - inStart;
    let leftTree = build(preorder, preStart + 1, preStart + leftLength, inorder, inStart, index - 1);
    let rightTree = build(preorder, preStart + leftLength + 1, preEnd, inorder, index + 1, inEnd);

    return new TreeNode(leftRoot, leftTree, rightTree);
}
// @lc code=end

