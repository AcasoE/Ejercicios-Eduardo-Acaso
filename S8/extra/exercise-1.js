
async function traerPersonajes() {
  const arrayPersonajes = [];
  try {
    for (let i = 1; i < 51; i++) {
      const elemento = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
      const resultado = await elemento.json();
      
      arrayPersonajes.push(resultado)    }
  } catch (error) {
    console.log(error)
  }
  const personajesFiltrados = arrayPersonajes.map((personaje)=>({
    name: personaje.name,
    image:  personaje.image
  }))
  return personajesFiltrados
}
let personajes = []
const init = async ()=>{
   const personajes = await traerPersonajes()
   pintarPersonajes(personajes)
 }
init()

const pintarPersonajes = (array)=>{
    const div$$ = document.getElementById("div-principal")
for (const personaje of array) {
    const divPersonaje$$ = document.createElement("div")
    const title = document.createElement("H3")
    title.innerHTML = personaje.name
    const image$$ = document.createElement("img")
    image$$.setAttribute("src", personaje.image)
    image$$.setAttribute("alt", personaje.name)
    divPersonaje$$.appendChild(title)
    divPersonaje$$.appendChild(image$$)
    div$$.appendChild(divPersonaje$$)
    
}

}