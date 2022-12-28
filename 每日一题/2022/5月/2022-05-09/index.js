/**
 * https://leetcode.cn/problems/di-string-match/
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  // 如果是I， 那么由小到大按顺序排列
  // 如果是D，那么由大到小按顺序排列
  let res = []
  let [min, max] = [0, s.length]
  for(let i = 0; i < s.length; i ++) {
    res.push(s[i] === 'I' ? min ++ : max --)
  }
  res.push(min)
  return res;
};

let s = "IDID"
console.log(diStringMatch(s))

// 当前大于： D
// 当前小于： I
// 输入：s = "IDID"
// 输出：[0,4,1,3,2]
// 示例 2：

// 输入：s = "III"
// 输出：[0,1,2,3]
// 示例 3：

// 输入：s = "DDI"
// 输出：[3,2,0,1]