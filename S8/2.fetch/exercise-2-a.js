const input$$ = document.querySelector("input");
const boton$$ = document.querySelector("button");

async function api() {
  try {
    const resultado = await fetch(
      `https://api.nationalize.io?name=${input$$.value}`
    );
    const nombre = await resultado.json();
    console.log(nombre);
  } catch (error) {
    console.log(error);
  }
}

boton$$.addEventListener("click", () => {
  api();
});
