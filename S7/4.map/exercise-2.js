const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


/* function filtro (objeto) {
    if (objeto.name[0]=== "A") {
        return  objeto.name = "Anacleto"
    } else {
        return objeto.name
    }
} */


const nuevosNombres = users.map(x =>{ if (x.name[0]==='A') {
    return x.name = "Anacleto" 
} else {
    return x.name
}})
console.log(nuevosNombres);