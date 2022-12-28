/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/linked-list-components/
 */
var numComponents = function (head, nums) {
  let res = 0
  let flag = false
  // 遍历链表，根据nums的包含情况判断
  for (let i = 0; i < head.length; i++) {
    if (nums.includes(head[i])) {
      // 如果包含，将flag置为true，标志有起始点
      if (!flag) {
        flag = true
        res++
      }
    } else {
      // 如果不包含，直接 ++ ，结束之前计数的标志
      res++
      flah = false
    }
  }
  // let set = new Set(nums)
  // while(head !== null) {
  //   if(set.has(head.val)) {
  //     if(!flag) {
  //       flag = true
  //       res ++
  //     }else {
  //       res ++
  //       flag = false
  //     }
  //   }
  //   head = head.next
  // }
  return res
};
// var numComponents = function(head, nums) {
//   let ans = 0
//   const set = new Set(nums)
//   while (head != null) {
//       if (set.has(head.val)) {
//           while (head != null && set.has(head.val)) head = head.next
//           ans++
//       } else {
//           head = head.next
//       }
//   }
//   return ans
// };

let head = [0, 1, 2, 3, 4]
let nums = [0, 3, 1, 4]
console.log(numComponents(head, nums))