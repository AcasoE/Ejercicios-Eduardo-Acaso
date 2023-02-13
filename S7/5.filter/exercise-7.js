const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}]

const input$$ = document.querySelector("input")

function buscar (input, streamers){
    let streamesFiltrados = streamers.filter(streamer => streamer.name.toLowerCase().includes(input.toLowerCase()))
    console.log(streamesFiltrados);
}
let temporizadorBusqueda = null
input$$.addEventListener("keyup",()=>{
    if(temporizadorBusqueda){
     clearTimeout(temporizadorBusqueda)
    }
    temporizadorBusqueda = setTimeout(()=>{
        console.log("Estoy filtrando...")
        buscar(input$$.value, streamers)
    },1*1000)
})