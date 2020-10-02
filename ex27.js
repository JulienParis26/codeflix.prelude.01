function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function isLowerCase(code) {
    return (code >= 97 && code <= 122)
  }
  
  function isDigit(code) {
    return (code >= 48 && code <= 57)
  }
  
  function isAlphaDigit(str = '') {
    for (let i = 0; i<str.length; i++){
      const code = str.charCodeAt(i)
  
      if (!isUpperCase(code) && !isLowerCase(code) && !isDigit(code)) {
        return false
      }
    }
  
    return true
  }
  
  console.log(isAlphaDigit('ch0pper'))
  // => true
  console.log(isAlphaDigit('1986'))
  // => true
  console.log(isAlphaDigit('1337-42'))
  // => false