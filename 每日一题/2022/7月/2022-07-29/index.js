/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  let x1, x2, x3 = 0
  // 随便找一个点作为基准
  // 分别计算这个点到其他三个点的距离
  x1 = getDestience(p1, p2)
  x2 = getDestience(p1, p3)
  x3 = getDestience(p1, p4)
  if (isSamePoint(p1, p2) || isSamePoint(p2, p3) || isSamePoint(p3, p4) || isSamePoint(p4, p1) || isSamePoint(p2, p4) || isSamePoint(p3, p1)) {
    return false
  }
  console.log(x1, x2, x3);
  if(x1 === x2 && x1=== x3) return false;
  return Math.abs(x1 - x2) === 0 || Math.abs(x1 - x2) === x3
};
function getDestience(p1, p2) {
  // 必定有一个边为一样的
  return Math.pow(Math.abs(p1[0] - p2[0]), 2) + Math.pow(Math.abs(p1[1] - p2[1]), 2)
}
function isSamePoint(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}


// p1 = [2,5]
// p2 = [3,2]
// p3 = [2,1]
// p4 = [4,7]
let p1 = [0, 0], p2 = [5, 0], p3 = [5, 4], p4 = [0, 4]

console.log(validSquare(p1, p2, p3, p4))