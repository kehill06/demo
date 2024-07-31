const strr = "aabbaabb"


function compressString(str) {
    let final= "";
    let i = 0;
    let counter=1;

    for (const letter of str) {
        if (str[i] == str[i+1]){
            counter++;
            i++;
        }else if (str[i] != str[i+1] && counter>1){
            final=final + letter + counter;
            counter=1;
            i++;
            continue;
        }else if (str[i] !== str[i+1] && counter==1) {
            final+=letter;
            i++;
            continue;
        }
    }return final;
}

console.log(compressString(strr))