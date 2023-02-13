const eliminarP = ()=>{
const parrafosEliminar  = document.querySelectorAll(".fn-remove-me")
for (parrafo of parrafosEliminar) {
    parrafo.remove()    
}
}
eliminarP()