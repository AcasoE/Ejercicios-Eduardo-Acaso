const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
const lista$$ = document.createElement("ul")
document.body.appendChild(lista$$)
for (const country of countries) {
    const div$$ = document.createElement("div")
    const tittle$$ = document.createElement("h4")
    tittle$$.textContent = country.title
    const img$$ = document.createElement("img")
    img$$.setAttribute("src", country.imgUrl);
    img$$.setAttribute("alt", country.title);
    const btn$$ = document.createElement("button")
    btn$$.textContent = "Eliminar"
    btn$$.addEventListener("click", () => {
         div$$.remove()
    })

    lista$$.appendChild(div$$)
    div$$.appendChild(tittle$$)
    div$$.appendChild(img$$)
    div$$.appendChild(btn$$)
}
