function spinalCase(str=''){

    let sentence = ''

    for (let i = 0; i < str.length; i++){

        const code = str.charCodeAt(i) // for ASCCI code
        const codePrevius = str.charCodeAt(i-1)

        if (code === 32){
            sentence += '-'
        } else if (code >= 65 && code <= 90 && i !== 0 && codePrevius !== 45){
            sentence += "-"
            sentence += String.fromCharCode(code + 32)
        } else if (code >= 65 && code <= 90){
            sentence += String.fromCharCode(code + 32)
        } else if ((i === 0 || i === str.length - 1) && code === 45){
            // nothing
        } else {
            sentence += str[i]
        }

    }

    return sentence

}

console.log(spinalCase('love one code'));

console.log(spinalCase('LoveOneCode'));

console.log(spinalCase('-Love-One-Code-'));
