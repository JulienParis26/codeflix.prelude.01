function lastIndexOf(str = '', search, fromIndexopt = str.length - 1) {
    for (let i = fromIndexopt; i > 0; i--) {
      if (str[i] === search) {
        return i
      }
    }
  
    return -1
  }
  
  console.log(lastIndexOf('ch0pper', 'p'))
  // => 4
  console.log(lastIndexOf('ch0pper', 'o'))
  // => -1