function count(str = '') {
    let cursor = 0

    while (str[cursor] !== undefined) {
        cursor++
    }


    return cursor
}

console.log(count('chOpper'))
// => 7