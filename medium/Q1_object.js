function ObjectChecker(word) {
    let charCounter= {};
    let newLetters='';
    for (letter of word) {
        if (charCounter[letter] === undefined) {
            charCounter[letter] =1
        }else if (charCounter[letter]>=1) {
            charCounter[letter]+=1
        }
    }for (letter of word) {
        if (charCounter[letter] ===1) {
            newLetters+=letter
        }
    }return newLetters
}

console.log(ObjectChecker("bubble"))