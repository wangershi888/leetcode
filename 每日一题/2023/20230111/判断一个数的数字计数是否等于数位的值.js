/**
 * @param {string} num
 * @return {boolean}
 * https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/
 */
var digitCount = function (num) {
  for (let i = 0; i < num.length; i++) {
    if (hasStrNum(num, i.toString()) !== 1 * num[i]) return false;
  }
  return true;
};

function hasStrNum(num, str) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === str) sum++;
  }
  return sum;
}

const num = "1";

console.log(digitCount(num));
