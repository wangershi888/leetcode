/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * https://leetcode.cn/problems/zero-matrix-lcci/submissions/
 */
var setZeroes = function (matrix) {
  let zeroList = new Set()
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      // 找这一行的0
      matrix[i].forEach((j, f) => {
        j === 0 && zeroList.add(f)
      })
      matrix[i] = new Array(matrix[i].length).fill(0)
    }
  }
  zeroList = [...zeroList]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < zeroList.length; j++) {
      matrix[i][zeroList[j]] = 0
    }
  }
  return matrix
};

let a =
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
console.log(setZeroes(a))