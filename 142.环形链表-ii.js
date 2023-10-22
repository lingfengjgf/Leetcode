/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  let p = head;
  let q = head;
  while (q) {
    p = p.next;
    if (q.next) {
      q = q.next.next;
    } else {
      return null;
    }
    if (p == q) {
      let prt = head;
      while (prt != p) {
        prt = prt.next;
        p = p.next;
      }
      return prt;
    }
  }
  return null;
};
// @lc code=end
