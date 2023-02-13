async function recibirDAtos() {
  try {
    const resultado = await fetch("https://api.agify.io?name=michael");
    const hola = await resultado.json();
    console.log(hola);
  } catch (error) {
    console.log(err);
  }
}
const boton$$ = document.getElementById("button");
boton$$.addEventListener("click", () => {
  recibirDAtos();
});
