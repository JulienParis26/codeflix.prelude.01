function chars(str = '') {
    let result = []
  
    for (let i = 0; i < str.length; i++) {
      result.push(str[i])
    }
  
    return result
  }
  
  console.log(chars('ch0pper'))
  // => ['c', 'h', '0', 'p', 'p', 'e', 'r']