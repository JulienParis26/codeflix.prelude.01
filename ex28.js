function isBlank(str = '') {
    let sentence = ''

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === ' ') {
            return true
        } else {
            return false
        }

    }

    return true
}




console.log(isBlank(''))
// => true

console.log(isBlank('  '))
// => true

console.log(isBlank('Ch0pper!'))
// => false


// ASCII code space = 32