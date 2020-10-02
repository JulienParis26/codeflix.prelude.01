function isEmpty(str = '') {

    return str.length === 0 
}



console.log(isEmpty(''))
// => true

console.log(isEmpty('  '))
// => false

console.log(isEmpty('ch0pper'))
// => false