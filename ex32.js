function isLowerCase(str = '') {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
  
      if (!(code >= 65 && code <= 90)) {
        return false
      }
    }
  
    return true
  }
  
  console.log(isLowerCase('CHOPPER'))
  // => true
  console.log(isLowerCase('Chopper'))
  // => false