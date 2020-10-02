function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function isLowerCase(code) {
    return (code >= 97 && code <= 122)
  }
  
  function isAlpha(str = ''){
    for (let i = 0; i<str.length; i++){
      const code = str.charCodeAt(i)
  
      if (!isUpperCase(code) && !isLowerCase(code)) {
        return false
      }
    }
  
    return true
  }
  
  console.log(isAlpha('Chopper'))
  // => true
  console.log(isAlpha('Chopper!'))
  // => false
  console.log(isAlpha('Chopper and Usopp'))
  // => false