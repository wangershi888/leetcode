/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 * https://leetcode.cn/problems/find-k-closest-elements/
 */
var findClosestElements = function (arr, k, x) {
  var findClosestElements = function(arr, k, x) {
    let left = 0,
        right = arr.length - 1;
    
    while (right - left >= k) {
      if (x - arr[left] <= arr[right] - x) {
        right--;
      } else {
        left++;
      }
    }
    
    return arr.slice(left, right + 1);
  }  
};

let arr = [1, 2, 3, 4, 5]
let k = 4
let x = 3
console.log(findClosestElements(arr, k, x))