/**
 * @param {number[][]} matrix
 * @return {number[]}
 * https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  // 逆时针旋转矩阵90度
  let arr = matrix;
  let res = [];
  while (arr.length !== 0) {
    res.push(...arr.splice(0, 1));
    if (!arr.length) {
      return res.flat();
    }
    arr = rote(arr);
  }
};

function rote(arr) {
  let height = arr.length;
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    res.push([]);
  }
  let k = res.length - 1;
  for (let j = 0; j < res.length; j++) {
    for (let i = 0; i < height; i++) {
      // 把每一层的对应元素拿出来
      res[j].push(...[arr[i][k]]);
    }
    k--;
  }
  return res;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));

//[1,2,3,6,9,8,7,4,5]
