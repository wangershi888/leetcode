/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let i = 0;
  let j = head.length - 1;
  let a;
  while(!(i >= j)) {
    a = head[i]
    head[i] = head[j]
    head[j] = a
    i ++
    j --
  }
  return head
};

var head = [1,2,3,4,5]
console.log(reverseList(head))