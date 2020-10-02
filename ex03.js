
const str = ["B", "O", "N", "J", "O", "U", "R"]

function length(str) {
    let i = 0

    while(str[i] != undefined) {
        i++
    }

    return i
}

console.log(length(str))

// OR => console.log(length('Bonjour'))