
// 1 I
// 5 V
// 10 X
// 50 L
// 100 C
// 500 D
// 1000 M

// I 可以放在 V(5)和x（10）的左边，来表示4和9。
// X 可以放在工(50）和C （100）的左边，来表示 40 和90.
// C 可以放在D(500）和 M （1000）的左边，来表示 400 和900。


/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 左边的必然比右边的大 ，如果左边的比右边的小，那么需要减去
  const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  return s.split('').reduce((total, current, index, arr) =>  total += map[current] < map[arr[index + 1]] ? -map[current] : map[current], 0)
};

console.log('asdf', romanToInt('LVIII'))