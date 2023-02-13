
let insects = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
 for (let i = 0; i < array.length; i++) {
    if(array[i] === text)
    return i
 }
}



console.log(findArrayIndex(insects, "Mosquito"))
console.log(findArrayIndex(insects, "Caracol"))
console.log(findArrayIndex(insects, "Salamandra"))
console.log(findArrayIndex(insects, "Ajolote"))
