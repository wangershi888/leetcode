/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
 */
var areAlmostEqual = function (s1, s2) {
  let s1List = s1.split('')
  let s2List = s2.split('')
  let a = undefined
  // 两个字符串要么相等，要么某两位字符交叉相等
  // 其他情况返回false

  // 可能有两个位置不同，可以缓存一下第一个不同位置
  // 然后到第二个位置的时候检查交叉是否相等
  for (let i = 0; i < s1List.length; i++) {
    if (s1List[i] !== s2List[i]) {
      if (a === undefined) {
        // 如果没有缓存，设置缓存
        a = i
      } else {
        // 如果有缓存，那么替换当前和缓存的位置，对比返回结果
        let b = s1List[i]
        s1List[i] = s1List[a]
        s1List[a] = b
        return s1List.join('') === s2List.join('')
      }
    }
  }
  return s1 === s2
};

let s1 = 'kelb'
let s2 = 'kelb'

console.log(areAlmostEqual(s1, s2))