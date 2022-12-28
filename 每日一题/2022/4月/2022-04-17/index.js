/**
 * https://leetcode-cn.com/problems/most-common-word/
 * 最常见的单词
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  let time = {}
  let max = 0;
  let maxWord = '';
  paragraph.toLowerCase().replace(/[\.|\?|\'|\!|\,|\;]/g, ' ').trim().split(/\s+/).forEach(item => {
    if(!banned.includes(item)) {
      time[item] = time[item] ? time[item] += 1 : 1
      if(time[item] > max) {
        max = time[item]
        maxWord = item;
      }
    }
  })
  return maxWord;
};


let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))

