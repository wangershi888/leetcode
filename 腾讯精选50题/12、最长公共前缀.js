/**
 * https://leetcode.cn/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) return strs[0]
  let minStr = strs[0]
  strs.forEach(item => {
    if(minStr.length > item.length) minStr = item
  })
  let maxPrefix = ''
  for(let i = 0; i < minStr.length; i ++) {
    if(!canMatchPrefix(maxPrefix+minStr[i])) return maxPrefix
    maxPrefix += minStr[i]
  }

  function canMatchPrefix(str) {
    for(let i = 0; i < strs.length; i ++) {
      if(!strs[i].substr(0, str.length).includes(str)) return false
    }
    return true
  }
  return maxPrefix
};


let strs = ["reflower","flow","flight"]
// 输出："fl"

// let strs = ["dog","racecar","car"]
// 输出：""


console.log(longestCommonPrefix(strs))