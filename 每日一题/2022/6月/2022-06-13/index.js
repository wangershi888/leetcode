/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let a = heights.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== heights[i]) sum ++
  }
  return sum;
};

let arr = [5, 1, 2, 3, 4]
console.log(heightChecker(arr));
// [1, 1, 4, 2, 1, 3]

// [1, 1, 1, 2, 3, 4]

// [5, 1, 2, 3, 4]
// [1, 2, 3, 4, 5]