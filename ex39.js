function escapeHtml(str = '') {
    let result = ''
  
    for (let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case '<':
          result += '&lt;'
          break
        case '>':
          result += '&gt;'
          break
        default:
          result += str[i]
      }
    }
  
    return result
  }
  
  console.log(escapeHtml('<p>I love programming</p>'))
  // => '&lt;p&gt;I love programming&lt;/p&gt;