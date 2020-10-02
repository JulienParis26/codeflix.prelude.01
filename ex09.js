function charAt(str='', position) {
    let char

    for (let i = 0; i < str.length; i++) {
        if (i === position) {
            char = str[i]
            break
        }
    }
    return char
}

console.log(charAt('chopper', 0))
// => 'c'

console.log(charAt('chopper', 1))
// => 'h'