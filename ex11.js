function last(str = '', len = 1) {
    let result = ''
  
    for (let i = str.length; i >= str.length - len; i--) {
      if (str[i] === undefined) {
        continue
      }
  
      result =  str[i] + result
    }
  
    return result
  }
  
  console.log(last('chopper'))
  // => r
  console.log(last('chopper', 2))
  // => er
  console.log(last('tony', 5))
  // => tony