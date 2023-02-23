async function traerPlanetas() {
  try {
    const planetas = await fetch(`http://localhost:3000/planets`);
    const resultado = await planetas.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  const planetas = await traerPlanetas();
  pintarPLanetas(planetas);
});
function pintarPLanetas(array) {
  const divPlanetas = document.querySelector('[data-function="planets"]');
  for (const planeta of array) {
    const divPlaneta$$ = document.createElement("div");
    const h2$$ = document.createElement("h2");
    h2$$.innerHTML = planeta.name;
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", planeta.image);
    img$$.setAttribute("alt", planeta.name);
    divPlaneta$$.appendChild(h2$$);
    divPlaneta$$.appendChild(img$$);
    divPlanetas.appendChild(divPlaneta$$);
    divPlaneta$$.addEventListener("click", () => {
      getCharacters(planeta.id);
      input$$.value = "";
    });
  }
}
async function getCharacters(id) {
  const character = await fetch(
    `http://localhost:3000/characters?idPlanet=${id}`
  );
  const resultado = await character.json();
  pintarCaracteres(resultado);
  input$$.addEventListener("keyup", () => {
    filtrarCaracteres(input$$, resultado);
  });
}

function pintarCaracteres(array) {
  const div$$ = document.querySelector('[data-function="characters"]');
  div$$.innerHTML = "";
  for (const personaje of array) {
    divPersonaje$$ = document.createElement("div");
    const h2$$ = document.createElement("h2");
    h2$$.innerHTML = personaje.name;
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", personaje.avatar);
    img$$.setAttribute("alt", personaje.name);
    const p$$ = document.createElement("p");
    divPersonaje$$.appendChild(h2$$);
    divPersonaje$$.appendChild(img$$);
    divPersonaje$$.appendChild(p$$)
    div$$.appendChild(divPersonaje$$);
    divPersonaje$$.addEventListener("click", () => {
    if(!p$$.innerHTML){
        p$$.innerHTML = personaje.description
    } else {
        p$$.innerHTML = ""
    }

    });

  }
}

const divBusqueda$$ = document.querySelector('[data-function="search"]');
const input$$ = document.createElement("input");
divBusqueda$$.appendChild(input$$);

function filtrarCaracteres(input, array) {
  const personajesFiltrados = array.filter((x) =>
    x.name.toLowerCase().includes(input.value.toLowerCase())
  );
  pintarCaracteres(personajesFiltrados);
}
