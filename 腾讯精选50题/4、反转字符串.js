/**
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let i = 0;
  let j = s.length - 1;
  let a;
  while(!(i >= j)) {
    a = s[i]
    s[i] = s[j]
    s[j] = a
    i ++
    j --
  }
  return s
};


let s =["H","a","n","n","a","h"]
console.log(reverseString(s))

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
