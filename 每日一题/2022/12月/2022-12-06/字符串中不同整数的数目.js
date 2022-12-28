/**
 * @param {string} word
 * @return {number}
 * https://leetcode.cn/problems/number-of-different-integers-in-a-string/
 */
var numDifferentIntegers = function (word) {
  let res = new Set();
  word
    .replace(/[A-Za-z]/g, " ")
    .split(" ")
    .forEach((item) => {
      if (/\S/g.test(item)) {
        res.add(String(BigInt(item)));
      }
    });
  return res.size;
};

let word = "0001a01b1";
console.log(numDifferentIntegers(word));
