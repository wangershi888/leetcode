var a = [1,2,3,4,4], b = [3,4,4,5,6,6,7]
const newArr = a.concat(b).filter((item, _, arr )=> {
  return arr.indexOf(item) === arr.lastIndexOf(item);
})

console.log('newArr', newArr);