/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''))
  let result = []
  while (sum) {
    result.push(sum % 10)
    sum = parseInt(sum / 10)
  }
  return result
};

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]
console.log('asdf', addTwoNumbers(l1, l2))