/**
 * @param {string} astr
 * @return {boolean}
 * https://leetcode.cn/problems/is-unique-lcci/submissions/
 */
var isUnique = function (astr) {
  for (let i = 0; i < astr.length; i++) {
    console.log('asdf', astr.indexOf(astr[i]), astr.lastIndexOf(astr[i]))
    if (astr.indexOf(astr[i]) !== astr.lastIndexOf(astr[i])) return false;
  }
  return true;
};

const astr = "leecode";
console.log(isUnique(astr));
