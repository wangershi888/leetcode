/**
 * @param {number[][]} grid
 * @return {boolean}
 * https://leetcode.cn/problems/check-if-matrix-is-x-matrix/
 */
var checkXMatrix = function (grid) {
  let x = grid[0].length;
  let y = grid.length;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (i === j || i + j === x - 1) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};

const grid = [
  [5, 7, 0],
  [0, 3, 1],
  [0, 5, 0],
];

console.log(checkXMatrix(grid));
