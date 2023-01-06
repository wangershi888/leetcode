/**
 * @param {number} num
 * @return {number}
 * https://leetcode.cn/problems/count-integers-with-even-digit-sum/
 */
var countEven = function (num) {
  let res = 0;
  for (let i = num; i > 0; i--) {
    // 判断当前数字个数之和是不是偶数
    let copyNum = i.toString();
    let sum = 0;
    for (let i = 0; i < copyNum.length; i++) {
      sum += Number(copyNum[i]);
    }
    if (sum % 2 === 0) {
      res++;
    }
  }
  return res;
};

const n = 30;
console.log(countEven(n));
