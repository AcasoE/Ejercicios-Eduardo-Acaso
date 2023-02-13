const animalFunction = () => {
    return {nombre: 'Bengal Tiger', race: 'Tiger'}
};
const {nombre, race} = animalFunction()
console.log(nombre);
console.log(race);