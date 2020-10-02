function includes(str = '', search, positionopt = 0) {
    let x = 0
  
    for (let i = positionopt; i < str.length; i++) {
      if (str[i] !== search[x]) {
        continue
      }
  
      if (x >= search.length - 1) {
        return true
      }
  
      x++
    }
  
    return false
  }
  
  console.log(includes('Ch0pper', 'pper'))
  // => true
  console.log(includes('Ch0pper', '0', 3))
  // => false