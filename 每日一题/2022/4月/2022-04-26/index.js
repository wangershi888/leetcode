/**
 * https://leetcode.cn/problems/projection-area-of-3d-shapes/
 * @param {number[][]} grid
 * @return {number}
 */

 var projectionArea = function(grid) {
  let x = 0;
  let y = 0;
  let z = 0;
  // 储存一行的最大值
  let max = {}
  grid.forEach((item, index) => {
    y += Math.max.apply(Array, item)
    item.forEach((i, j) => {
      if(i) x += 1
      if(!max[j]) max[j] = 0
      if(max[j] < i) max[j] = i
    })
  })
  for(let i in max) {
    z += max[i]
  }
  return x + y + z
};


// x 为个数
// y 为数组中最大的
// z 为竖向数组中最大的

let a = [[1,0],[0,2]]
console.log(projectionArea(a))