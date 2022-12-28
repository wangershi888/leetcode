/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 * https://leetcode.cn/problems/possible-bipartition/
 */
var possibleBipartition = function (n, dislikes) {
  /**
   * 1、图论告诉我们有奇数环的图，不是二分图
   * 2、奇数环对于这个图 意味着什么
   *  A dislike B A  B
   *  B dislike C B  C
   *  C dislike A C  A
   * 3、偶数环对于这个图以为着啥
   *  A dislike B A  B
   *  B dislike C B  C
   *  C dislike D C  D
   *  D dislike A D  A
   *  分完之后是合理的
   * 所以这个题目可以看为二分图的判定问题
   * 
   * 通过判定当前这个图是否为二分图
   * 
   * 判定二分图的方法：
   * 1、染色法：
   *    遍历所有节点，如果发现，当前点没有被染色，那我们就将当前点染成一个颜色
   */
  // 用于记录是否已经染色
  const colors = new Array(n + 1).fill(0)
  // 用于记录每个人讨厌的人
  const dislikeMap = new Map()

  for (const [first, second] of dislikes) {
    const firstDislike = dislikeMap.get(first) || []
    const secondDislike = dislikeMap.get(second) || []
    dislikeMap.set(first, (firstDislike.push(second), firstDislike))
    dislikeMap.set(second, (secondDislike.push(first), secondDislike))
  }

  // 深度优先进行染色
  const dfs = (curPerson, curColor) => {
    // 染色
    colors[curPerson] = curColor
    // 获取讨厌的人
    const curPersonDislike = dislikeMap.get(curPerson) || []

    for (const dis of curPersonDislike) {
      // 如果讨厌的人已经染色了，并且颜色和自己一样，那么直接返回false
      if (colors[dis] !== 0 && colors[dis] === colors[curPerson]) return false
      // 如果当前还没有进行染色，那么递归调用dfs
      // curColor ^ 3 实际上就是 把 1 变 2  把 2 变 1
      if (colors[dis] === 0 && !dfs(dis, curColor ^ 3)) return false
    }
    return true
  }

  for (let i = 1; i <= n; i++) {
    // 当前还未染色，并且染色过程发生冲突，直接返回false
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }
  return true
};