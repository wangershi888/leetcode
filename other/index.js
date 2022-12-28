 var isValid = function(s) {
  while(1) {
    let len = s.length
    s = s.replace('()', '').replace('[]', '').replace('{}', '')
    if(len === s.length) return len === 0
  }
  return !s
};


let s = '{[(])}'
console.log(isValid(s))
