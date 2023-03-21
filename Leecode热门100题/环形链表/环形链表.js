/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * https://leetcode.cn/problems/linked-list-cycle/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  // 遍历，如果有标记，则说明有环
  while (head) {
    if (head.tag) return true;
    head.tag = true;
    head = head.next;
  }
  return false;
};

// head = [3,2,0,-4], pos = 1
// true
