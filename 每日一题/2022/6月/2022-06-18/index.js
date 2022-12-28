/**
 * // Definition for a Node.
 * https://leetcode.cn/problems/4ueAj6/submissions/
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {
  const insertNode = new Node(insertVal);
  if (!head) {
     insertNode.next = insertNode;
     return insertNode;
  };
  const map = new Map();
  let tempHead = head;
  let prev;
  while (tempHead) {
      if ((prev && insertVal <= tempHead.val && (prev.val <= insertVal || tempHead.val < prev.val)) ||
      (prev && tempHead.val < prev.val && insertVal >= prev.val) || map.has(tempHead)) {
          prev.next = insertNode;
          insertNode.next = tempHead;
          break;
      }
      map.set(tempHead, 1);
      prev = tempHead;
      tempHead = tempHead.next;
  }
  return head;
};