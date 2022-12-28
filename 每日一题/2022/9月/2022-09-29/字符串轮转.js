/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.cn/problems/string-rotation-lcci/
 */
 var isFlipedString = function(s1, s2) {
    
  return s1.length === s2.length && (s2 + s2).includes(s1)
};

// s1 = "waterbottle", s2 = "erbottlewat"
//  输出：True