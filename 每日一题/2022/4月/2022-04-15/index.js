var deserialize = function (s) {
  let jsStr = JSON.parse(s)
  let parse = function (value) {
    let response = new NestedInteger()
    if (Array.isArray(value)) {
      value.forEach(v => {
        response.add(parse(v))
      })
    } else {
      response.setInteger(value)
    }
    return response
  }
  return parse(jsStr)
};