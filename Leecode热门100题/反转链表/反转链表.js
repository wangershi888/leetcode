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
var reverseList = function (head) {
  let [p, c] = [null, head];
  while (c) [c.next, p, c] = [p, c, c.next];
  return p;
};

let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: undefined,
      },
    },
  },
};

console.log(reverseList(node));
