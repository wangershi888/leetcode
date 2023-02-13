const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

// 使用filter实现
function arrayToTree(arr) {
  let res = arr.filter((item) => {
    item.children = arr.filter((e) => e.parentId === item.id);
    return item.parentId === 0;
  });
  return res;
}

console.log(arrayToTree(arr));

// 使用递归实现

function getTreeData(arr, parentId) {
  function loop(parentId) {
    return arr.reduce((pre, cur) => {
      if (cur.parentId === parentId) {
        cur.children = loop(cur.id);
        pre.push(cur);
      }
      return pre;
    }, []);
  }
  return loop(parentId);
}

console.log(arrayToTree1(arr, 0));
