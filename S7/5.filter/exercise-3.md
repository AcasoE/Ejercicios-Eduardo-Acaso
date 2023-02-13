Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 

function lol(object) {
    if (object.gameMorePlayed === 'League of Legends') {
        return object
        
    } else{
        ""
    }
    
}

const lolPlayers = streamers.filter(lol)

console.log(lolPlayers[0]);