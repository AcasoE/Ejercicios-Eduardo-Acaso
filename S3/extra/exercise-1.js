const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = ()=>{
    const lista$$ = document.createElement("ul");
    document.body.appendChild(lista$$)
    for (const country of countries) {
        const li$$ = document.createElement("li")
        li$$.textContent = country
        lista$$.appendChild(li$$)
        
    }
}
lista()