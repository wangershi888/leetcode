// https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
// 方法一
var RandomizedSet = function() {
  this.set = new Set()
}

RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) {
    return false
  }
  this.set.add(val)
  return true
}

RandomizedSet.prototype.remove = function(val) {
  if (this.set.has(val)) {
    this.set.delete(val)
    return true
  }
  return false
}

RandomizedSet.prototype.getRandom = function() {
  const random = parseInt(Math.random()*(this.set.size))
  return [...this.set][random]
}




// 方法二
/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
  this.list = [];
  this.map = new Map();
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)){
      return false;
  }
  this.map.set(val,this.list.length);
  this.list.push(val);
  return true;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(!this.map.has(val)){
      return false;
  } 
  let index = this.map.get(val); // 获取要删除元素的索引
  let last = this.list.pop(); // 获取并删除集合最后一位元素

  if(val !== last){ // 将最后一位元素把要删除的元素替换掉,如果是同一元素就没必要替换了
      this.list[index] = last;
      this.map.set(last,index); // 更新最后一位元素的索引
  }

  this.map.delete(val); // 删除要删除的元素的索引
  return true;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random()*this.list.length);
  return this.list[index];
};

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
