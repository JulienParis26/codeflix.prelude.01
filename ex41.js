function escapeRegExp(str = '') {
    let result = ''
  
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
  
      if (
        code >= 91 && code <= 93 ||
        code >= 123 && code <= 125 ||
        code === 36  ||
        code >= 40 && code <= 43 ||
        code === 46  ||
        code === 63  ||
        code === 92  ||
        code === 94
      ) {
        result += '\\' + str[i]
      } else {
        result += str[i]
      }
    }
  
    return result
  }
  
  console.log(escapeRegExp('(Tony)[Tony]{Ch0pper}'))