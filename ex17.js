function indexOf(str = '', search, fromIndexopt = 0) {
    for (let i = fromIndexopt; i < str.length; i++) {
      if (str[i] === search) {
        return i
      }
    }
  
    return -1
  }
  
  console.log(indexOf('ch0pper', '0'))
  // => 2
  console.log(indexOf('ch0pper', 'o'))
  // => -1