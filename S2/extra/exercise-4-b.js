
let insects = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
 for (let i = 0; i < array.length; i++) {
    if(array[i] === text)
    return i
 }
}


function removeItem(array, text) {

    array.splice(findArrayIndex(array, text), 1)
    return array
    
}
console.log(removeItem(insects, "Mosquito"));
console.log(removeItem(insects, "Caracol"));
console.log(removeItem(insects, "Ajolote"));
console.log(removeItem(insects, "Salamandra"));

console.log(insects);