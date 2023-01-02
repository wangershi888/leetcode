/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 */
var areNumbersAscending = function (s) {
  let i = null;
  let list = s.split(" ");
  let current;
  for (let j = 0; j < list.length; j++) {
    current = Number(list[j], 10);
    if (!isNaN(current)) {
      if (i === null) {
        i = current;
      } else {
        if (i >= current) {
          return false;
        } else {
          i = current;
        }
      }
    }
  }
  return true;
};

const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";

console.log(areNumbersAscending(s));
