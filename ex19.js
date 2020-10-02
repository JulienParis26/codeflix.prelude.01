function insert(str = '', toInsertopt = '', positionopt = 0) {
    let result = ''
  
    for (let i = 0; i < str.length; i++) {
      result += str[i]
  
      if (i === positionopt - 1) {
        result += toInsertopt
      }
    }
  
    return result
  }
  
  console.log(insert('chpper', '0', 2))
  // => ch0pper
  console.log(insert('Tony', ' Tony Ch0pper', 4))
  // => Tony Tony Ch0pper