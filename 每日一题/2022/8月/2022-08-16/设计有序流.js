/**
 * @param {number} n
 * https://leetcode.cn/problems/design-an-ordered-stream/
 */
var OrderedStream = function (n) {
  this.stream = new Array(n).fill('')
  this.ptr = 1
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  let ans = [];//记录返回数据的结果；
  if (idKey == this.ptr) {
    this.stream[idKey - 1] = value;
    ans.push(value);
    this.ptr = this.ptr + 1;
    while (this.ptr <= this.stream.length && this.stream[this.ptr - 1] != '') {
      ans.push(this.stream[this.ptr - 1]);
      this.ptr = this.ptr + 1;
    }
  }
  else {
    this.stream[idKey - 1] = value;
  }
  return ans;
};

var obj = new OrderedStream(5)
console.log(obj.insert(3, 'ccc'))
console.log(obj.insert(1, 'aaa'))
console.log(obj.insert(2, 'bbb'))
// console.log(obj.insert(5, 'eee'))
// console.log(obj.insert(4, 'ddd'))
/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */