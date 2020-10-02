function split(str = '', separatoropt, limitopt) {
    let array = []
    let column = 0
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === separatoropt) {
        column++
        continue
      }
  
      if (array[column]) {
        array[column] += str[i]
      } else {
        array[column] = str[i]
      }
    }
  
    return array
  }
  
  console.log(split('Tony Tony Ch0pper', ' '))
  // => ['Tony', 'Tony', 'Ch0pper']
  //console.log(split('Gomu Gomu no bazooka', /\s/, 2))
  // => ['Gomu', 'Gomu']