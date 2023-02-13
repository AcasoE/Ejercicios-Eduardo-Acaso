const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, indice1, indice2) {
const meGuardoElSlice = array.slice(indice1, 1, array[indice2])
return array.slice(indice2, 1, meGuardoElSlice)
}

console.log(swap(players, 0, 2));
