/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 * https://leetcode.cn/problems/swap-adjacent-in-lr-string/
 */
 var canTransform = function(start, end) {
  if(start.split('X').join('') !== end.split('X').join('')) return false;//排除X后序列相同
  const len = start.length;
  var i = 0, j = 0;
  while(i<len && j<len){
      while(start[i] === 'X' && i<len) i++;
      while(end[j] === 'X' && j<len) j++;
      if(start[i] === 'L' && i<j) return false;//L左边的X，start不能少于end
      if(start[i] === 'R' && i>j) return false;//R左边的X，start不能多于end
      i++;
      j++;
  }
  return true;
};