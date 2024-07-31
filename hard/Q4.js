let words = "racecarr"

function mapMaker(str){
    let nm = new Map ();
    let list = "qewrtyuiopasdfghjklzxcvbnm"

    for (const char of str){
        if (list.includes(char.toLowerCase())){
            let num = nm.get(char);
            if (!nm.has(char)){
                nm.set(char,1);
            }else {
                nm.set(char, num+1);
            }
        }
    }return nm
}

function canFormPallindrome(str){
    let numList = mapMaker(str);
    let counter = 0;
    let placeHolder= 0;

    numList.forEach((value, key) => {
        console.log(value%2, counter, placeHolder,key, value)
        if (value%2 ==0){
            placeHolder++
        }else if (value==1 && counter<2) {
            counter++;
        }else if (value > 2 && value%2==1){
            return false
        }
    }); return numList
}

console.log(canFormPallindrome(words))