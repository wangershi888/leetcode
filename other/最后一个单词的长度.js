/**
 * @param {string} s
 * @return {number}
 * https://leetcode.cn/problems/length-of-last-word/
 */
var lengthOfLastWord = function (s) {
  let wordList = s.split(' ');
  for (let i = wordList.length - 1; i >= 0; i--) {
    if (wordList[i].length) {
      return wordList[i].length;
    }
  }
  return 0;
};

let s =  "luffy is still joyboy"
console.log(lengthOfLastWord(s))