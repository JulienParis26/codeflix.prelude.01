function substr(str = '', start, len = str.length) {
    let sentence = ''

    for (let i = 0; i < len; i++) {
        if (start + i )
       
        sentence += str[start + i]
        

   
    }
    return sentence
}


console.log(substr('tony tony chopper', 10))
// => 'chopper'

console.log(substr('chOpper', 2, 2))
// => 'Op'