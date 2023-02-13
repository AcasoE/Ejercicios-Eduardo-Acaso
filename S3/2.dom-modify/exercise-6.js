const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista$$ = document.createElement("ul")
document.body.appendChild(lista$$)
for (const app of apps) {
    const liApp$$ = document.createElement("li")
    liApp$$.textContent = app
    lista$$.appendChild(liApp$$)
    
}
