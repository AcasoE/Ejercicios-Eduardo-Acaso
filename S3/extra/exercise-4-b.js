const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
const crearlista$$ = ()=>{
const lista$$ = document.createElement("ul")
document.body.appendChild(lista$$)
let i = 0
for (const country of countries) {
    const div$$ = document.createElement("div")
    div$$.setAttribute(`id`, `${i}`)
    const tittle$$ = document.createElement("h4")
    tittle$$.textContent = country.title
    const img$$ = document.createElement("img")
    img$$.setAttribute("src", country.imgUrl);
    img$$.setAttribute("alt", country.title);
    lista$$.appendChild(div$$)
    div$$.appendChild(tittle$$)
    div$$.appendChild(img$$)
    i++
}
}
crearlista$$()
const elminiar$$ = ()=>{
    const btn$$ = document.querySelector('button')
    const arrayDivs$$ = document.getElementById("4")
    btn$$.addEventListener("click",()=>{
    arrayDivs$$.remove()
    })
    
}
elminiar$$()