/**
 * @param {string} s
 * @return {string[]}
 * https://leetcode.cn/problems/ambiguous-coordinates/
 */
var ambiguousCoordinates = function (s) {
  const coords = []
  // 移除括号
  s = s.replace(/\(|\)/g, '')
  for (let i = 1; i < s.length; i++) {
    // 将数字分成两块
    const x = s.slice(0, i), y = s.slice(i)
    for (let j = 0; j < x.length; j++) {
      // 左侧数字加小数点
      const x1 = j ? x.slice(0, j) + '.' + x.slice(j) : x
      for (let k = 0; k < y.length; k++) {
        // 右侧数字加小数点
        const y1 = k ? y.slice(0, k) + '.' + y.slice(k) : y
        // 利用隐式转换快速判断合法性
        if (x1 === x1 * 1 + '' && y1 === y1 * 1 + '') coords.push(`(${x1}, ${y1})`)
      }
    }
  }
  return coords
};

const s = '(123)'
console.log(ambiguousCoordinates(s))