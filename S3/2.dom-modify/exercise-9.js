const divs$$ = document.querySelectorAll('.fn-insert-here')

for (const div of divs$$) {
const parrafo$ = document.createElement('p')
parrafo$.textContent = "Voy dentro!"
div.appendChild(parrafo$)    
}