// const { rest } = require("lodash");

/**
 * @param {number} k
 * https://leetcode.cn/problems/design-circular-deque/
 */
var MyCircularDeque = function (k) {
  this.circularDeque = [];
  this.length = k;
};

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.getLength() < this.length) {
    this.circularDeque.unshift(value);
    return true;
  }
  return false;
};

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.getLength() < this.length) {
    this.circularDeque.push(value);
    return true;
  }
  return false;
};

MyCircularDeque.prototype.deleteFront = function () {
  return this.circularDeque.shift() !== undefined;
};

MyCircularDeque.prototype.deleteLast = function () {
  return this.circularDeque.pop() !== undefined;
};

MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.circularDeque[0];
};

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.circularDeque[this.getLength() - 1];
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.circularDeque.length === 0;
};

MyCircularDeque.prototype.isFull = function () {
  return !this.isEmpty();
};

MyCircularDeque.prtottype.getLength = function () {
  return this.circularDeque.length;
};

var obj = new MyCircularDeque(10);
var param_1 = obj.insertFront(2);
var param_5 = obj.getFront();
var param_7 = obj.isEmpty();
var param_3 = obj.deleteFront();
var param_2 = obj.insertLast(1);
var param_6 = obj.getRear();
var param_2 = obj.insertLast(1);
var param_1 = obj.insertFront(2);

var param_4 = obj.deleteLast();
var param_2 = obj.insertLast(1);

var param_8 = obj.isFull();

console.log(
  "asdfsdf",
  param_1,
  param_2,
  param_3,
  param_4,
  param_5,
  param_6,
  param_7,
  param_8
);

// ["MyCircularDeque","insertFront","getFront","isEmpty","deleteFront","insertLast","getRear","insertLast","insertFront","deleteLast","insertLast","isEmpty"]
// [[8],[5],[],[],[],[3],[],[7],[7],[],[4],[]]
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
