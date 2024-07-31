function unique(word) {
    let repeats = "";
    let firstCheck = "";
    let newWord = ""
    for (letter of word) {
        if (!firstCheck.includes(letter)) {
            firstCheck+=letter.toLowerCase();
        }else {
            repeats+=letter.toLowerCase()
        }
    }
    for (letters of firstCheck) {
        if (!repeats.includes(letters)) {
            newWord+=letters
        }
    } return newWord
}

console.log(unique("bubble bass man"))