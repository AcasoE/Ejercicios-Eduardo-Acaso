const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div$$ = document.querySelector("div[data-function='printHere']")
console.log(div$$);

const lista = ()=>{
    const lista$$ = document.createElement("ul");
    div$$.appendChild(lista$$)
    for (const car of cars) {
        const li$$ = document.createElement("li")
        li$$.textContent = car
        lista$$.appendChild(li$$)
        
    }
}
lista()