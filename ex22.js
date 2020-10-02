function splice(str = '', start, deleteCountopt = str.length - start, toAddopt = '') {
    let result = toAddopt

    let startIndex = start
    if (start < 0) {
        startIndex = str.length + start
    }

    for (let i = 0; i < str.length; i++) {
        if (start >= 0 && i >= deleteCountopt) {
            result += str[i]
        }

        if (start < 0 && i < start && i >= deleteCountopt) {
            result += str[i]
        }
    }

    return result

}





console.log(splice('Tony Tony ChOpper', 0, 10))
// => 'ChOpper'

console.log(splice('Tony ChOpper', 0, 4, 'Tony Tony'))
// => 'Tony Tony chOpper'

console.log(splice('Tony Tony Usopp', -5, 5, 'ChOpper'))
// => 'Tony Tony ChOpper'