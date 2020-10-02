function startsWith(str = '', start, positionopt = 0) {
    let x = 0
  
    for (let i = positionopt; i < str.length; i++) {
      if (str[i] !== start[x]) {
        return false
      }
  
      if (x >= start.length - 1) {
        return true
      }
  
      x++
    }
  }
  
  console.log(startsWith('I gotta give my all for everyone in my crew', 'I gotta'))
  // => true
  console.log(startsWith('Tony Tony Ch0pper', 'on', 1))
  // => true
  console.log(startsWith('Tony Tony Ch0pper', 'Ch0pper'))
  // => false
  