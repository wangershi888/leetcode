/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { head } = require("lodash");

/**
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
   return head.splice(head.indexOf(node), 1);
};


console.log(deleteNode(node))
// head = [4,5,1,9], node = 1
// 输出：[4,5,9]