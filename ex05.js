//   FUNCTION SPLIT

  function split(str, separator){

    const words = [] // contains the final words
    
    let nWord = 0



    for (i = 0; i < str.length; i++){ // i++ = increment of 1

//        words[nWord] += str[i]

        if (words[nWord] === undefined){

            words[nWord] = str[i]
        }else{

            words[nWord] += str[i]
        }

        if (str[i] === separator){
            nWord = nWord + 1
        }
        console.log(str[i],words)

    }

    return words // returns the array with the substrings we built
  }

// FUNCTION DECAPITALIZE

  function decapitalize(str){

    const words = split(str, ' ')
    let sentence = ''

    for (let i = 0; i < words.length; i++){ // loop on words
        
        for (let x = 0; x < words[i].length; i++){ // walk in the string

            if (x === 0 && words[i].charCodeAt(x) >= 65 && words[i].charCodeAt(x) <= 90){

                sentence += String.fromCharCode(words[i].charCodeAt(x) + 32)

            }
            else{

                sentence += String.fromCharCode(words[i].charCodeAt(x))

            }

        }
    }

    return sentence

  }
  

console.log(decapitalize('Wooman'))
console.log(decapitalize('El Drago'))