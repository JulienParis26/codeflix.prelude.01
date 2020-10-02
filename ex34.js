function isString(str) {
    return typeof str === 'string'
  }
  
  console.log(isString('chopper'))
  // => true
  console.log(isString(1337))
  // => false