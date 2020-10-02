function repeat(str = '', timeopt = 1) {
    let result = ''

    for (let i = timeopt; i > 0; i--) {
        result += str
    }

    return result
}


console.log(repeat('w', 3))
// => www

console.log(repeat('gomu', 0))
// => 