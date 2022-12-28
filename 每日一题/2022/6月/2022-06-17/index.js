/**
 * @param {number[]} arr
 * https://leetcode.cn/problems/duplicate-zeros/
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] === 0) {
      let b = arr.splice(i, arr.length - i)
      arr.push(0)
      arr.push(...b)
      arr.pop()
      i ++
      console.log('this is arr', arr);
    }
  }
  return arr
};


let arr = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(arr));