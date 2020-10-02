function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function isLetter(code) {
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  }
  
  function countWords(str = '', patternopt) {
    let count = 0
  
    if (patternopt) {
      const regex = new RegExp(patternopt, 'g')
  
      const substrings = str.match(regex) || []
  
      return substrings.length
    }
  
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === ' ' &&
        isLetter(str.charCodeAt(i - 1))
      ) {
        count++
      }
  
      if (
        isUpperCase(str.charCodeAt(i)) &&
        str[i - 1] !== ' ' &&
        str[i - 1] !== undefined
      ) {
        count++
      }
    }
  
    return count + 1
  }
  
  console.log(countWords('Tony Tony Ch0pper'))
  // => 3
  console.log(countWords('TonyTonyCh0pper'))
  // => 3
  console.log(countWords('Tony Tony - Ch0pper'))
  // => 3
  console.log(countWords('Coucou je suis là', 'ou'))
  // => 3
  console.log(countWords('Coucou je suis là', /To/))