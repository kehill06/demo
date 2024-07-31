const arr1 = [1,3,5]
const arr2 = [2,4,6]
let finalArr= []

function sorter(arr1, arr2) {
    let newArr=[]
    for (item of arr1) {
        newArr.push(item)
    }for (item of arr2) {
        newArr.push(item)
    }
while (finalArr.length<newArr.length){
    for (i=0 ;  i<newArr.length; i++){
        let num = newArr[i]
        for (item of newArr){
            if (num<=item) {
                finalArr.push(num)
            }else {continue}
        }
    }return finalArr
}
}
console.log(sorter(arr1,arr2))