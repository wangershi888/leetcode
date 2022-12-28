/**
 * https://leetcode.cn/problems/di-string-match/
 * @param {string} s
 * @return {number[]}
 */

function diStringMatch1(s: string): number[] {
  let a: number[] = [];
  let [min, max]: [number, number] = [0, s.length];

  for(let i: number = 0; i < s.length; i ++) {
    a.push(s[i] === 'I' ? min ++ : max --);
  }
  a.push(min)
  return a;
};

let s = 'IDID'
console.log(diStringMatch1(s))