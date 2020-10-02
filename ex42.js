function isSpecial(code) {
    return (
      code >= 91 && code <= 93 ||
      code >= 123 && code <= 125 ||
      code === 36  ||
      code >= 40 && code <= 43 ||
      code === 46  ||
      code === 63  ||
      code === 92  ||
      code === 94
    )
  }
  
  function unescapeRegExp(str = '') {
    let result = ''
  
    for (let i = 0; i < str.length; i++) {
      const nextCode = str.charCodeAt(i + 1)
  
      if (str[i] === '\\' && isSpecial(nextCode)) {
        continue
      }
  
      result += str[i]
    }
  
    return result
  }
  
  console.log(unescapeRegExp('\\(Tony\\)\\[Tony\\]\\{Ch0pper\\}'))
  // => (Tony)[Tony]{Ch0pper}