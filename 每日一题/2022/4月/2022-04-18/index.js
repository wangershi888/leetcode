/**
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
  // 获取数组中对应自字符的位置列表
  let cIndex = [] // 记录c出现的位置
  let res = [] // 记录结果
  let min = undefined;


  for(let i = 0; i < s.length; i ++) {
    if(s[i] === c) {
      cIndex.push(i)
    }
  }
  for(let i = 0; i < s.length; i ++) {
    for(let j = 0; j < cIndex.length; j ++) {
      if(min == undefined) {
        min = Math.abs(i - cIndex[j])
      }
      if(min > Math.abs(i - cIndex[j])) {
        min = Math.abs(i - cIndex[j])
      }
    }
    res.push(min)
    min = undefined
  }
  return res
};

var s = "loveleetcode"
var c = "e"

shortestToChar(s, c)