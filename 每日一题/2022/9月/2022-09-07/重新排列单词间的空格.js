/**
 * @param {string} text
 * @return {string}
 * https://leetcode.cn/problems/rearrange-spaces-between-words/
 */
var reorderSpaces = function (text) {
  let spaceNum = 0
  let wordList = []
  let res = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') spaceNum += 1
  }
  wordList = text.split(' ').filter(Boolean)
  let spaceinnerNum = Math.floor(spaceNum / (Math.max(1, wordList.length - 1)))
  for (let i = 0; i < wordList.length; i++) {
    res += wordList[i]
    for (let j = 0; j < spaceinnerNum; j++) {
      if (!spaceNum) break;
      res += ' '
      spaceNum = spaceNum - 1
      if(i === wordList.length - 1 && spaceNum) {
        for(let k = 0; k < spaceNum; k ++) {
          res += ' '
        }
      }
    }
  }
  return res
};

let text = "a b   c d"
console.log(reorderSpaces(text))