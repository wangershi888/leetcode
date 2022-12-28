/**
 * @param {string} s
 * @return {string[]}
 * https://leetcode.cn/problems/letter-case-permutation/submissions/
 */
var letterCasePermutation = function (s) {
  let res = ['']
  let index = 0
  while (index <= s.length - 1) {
    let cur = s[index];
    let temp = [];
    // 当前字符为字母
    if ((cur >= 'A' && cur <= 'Z') || (cur >= 'a' && cur <= 'z')) {
      let lowerLetter = cur.toLowerCase();
      let upperLetter = cur.toLocaleUpperCase();
      while (res.length) {
        let sTemp = res.pop();//出栈
        // 入栈
        temp.push(sTemp + lowerLetter);
        temp.push(sTemp + upperLetter);
      }


    } else {//当前字符为数字
      while (res.length) {
        let sTemp = res.pop();//出栈
        temp.push(sTemp + cur);//入栈
      }

    }
    res = temp;
    index++;

  }
  return res;
};