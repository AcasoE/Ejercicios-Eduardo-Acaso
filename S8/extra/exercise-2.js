async function tarerNotas (){
    const arrayCitas = []
    try {
        const datos = await fetch(`http://localhost:3000/diary`)
    const resultado = await datos.json()
    arrayCitas.push(resultado)  
} catch (error) {
        console.log(error);
    }
    console.log(arrayCitas);
    const arrayOrdenado = arrayCitas[0].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    return arrayOrdenado
}
const init = async()=>{
   const citas = await tarerNotas()
   pintarCitas(citas)

}
init()

function pintarCitas(array){
    const div$$ = document.getElementById("div")
for (const cita of array) {
    const divCita$$ = document.createElement("div")
    const h3$$ = document.createElement("h3")
    h3$$.innerHTML = cita.title
    const h5$$ = document.createElement("h5")
    h5$$.innerHTML = cita.date
    const p$$ = document.createElement("p") 
    p$$.innerHTML = cita.description
    const boton$$ = document.createElement("button")
    boton$$.innerHTML = "Eliminar"
    divCita$$.appendChild(h3$$)
    divCita$$.appendChild(h5$$)
    divCita$$.appendChild(p$$)
    divCita$$.appendChild(boton$$)
    div$$.appendChild(divCita$$)
    boton$$.addEventListener("click", ()=>{
    div$$.removeChild(divCita$$)

    })





}
}