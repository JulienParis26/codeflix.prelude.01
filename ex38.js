function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function isLetter(code) {
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  }
  
  function words(str = '', patternopt, flagsopt) {
    const array = []
    let column = 0
  
    if (patternopt) {
      const regex = new RegExp(patternopt, flagsopt)
  
      return str.match(regex) || []
    }
  
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
      const previousCode = str.charCodeAt(i - 1)
  
      if (
        str[i] === ' ' &&
        isLetter(previousCode)
      ) {
        column++
        continue
      }
  
      if (
        isUpperCase(code) &&
        str[i - 1] !== ' ' &&
        str[i - 1] !== undefined
      ) {
        column++
      }
  
      if (array[column]) {
        array[column] += str[i]
      } else {
        if (str[i] !== '-') {
          array[column] = str[i]
        }
      }
    }
  
    return array
  }
  
  console.log(words('Tony Tony Ch0pper'))
  // => ['Tony', 'Tony', 'Ch0pper']
  console.log(words('TonyTonyCh0pper'))
  // => ['Tony', 'Tony', 'Ch0pper']
  console.log(words('Tony - Tony - Ch0pper!'))
  // => ['Tony', 'Tony', 'Ch0pper']