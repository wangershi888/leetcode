var RecentCounter = function() {
  this.pingStack = []
  this.result = []
};

/** 
 * https://leetcode.cn/problems/number-of-recent-calls/
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.pingStack = t.flat()
  let a =  t.map(i => {
    return this.pingStack.filter(item => {
      return item <= i && i - 3000 <= item
    })
  })
  a.forEach(element => {
    this.result.push(element.length ? element.length : null)
  });
  return this.result;
};

console.log(new RecentCounter().ping([[], [1], [100], [3001], [3002]]))
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

//  输入：
//  ["RecentCounter", "ping", "ping", "ping", "ping"]
//  [[], [1], [100], [3001], [3002]]
//  输出：
//  [null, 1, 2, 3, 3]
 
//  解释：
//  RecentCounter recentCounter = new RecentCounter();
//  recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
//  recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
//  recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
//  recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 