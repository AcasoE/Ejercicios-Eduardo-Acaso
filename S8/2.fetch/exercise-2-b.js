const input$$ = document.querySelector("input");
const boton$$ = document.querySelector("button");

async function api() {
  try {
    const resultado = await fetch(
      `https://api.nationalize.io?name=${input$$.value}`
    );
    const nombre = await resultado.json();
  
    return  await nombre

  } catch (error) {
    console.log(error);
  }
  
}
 

boton$$.addEventListener("click", () => {
  init()
});
async function init (){
    const arrayApi = await api()
 pintarParrafo(arrayApi,input$$)
    

}
function pintarParrafo(array, filtro){
    const p$$ = document.createElement("p")

 p$$.innerText = `El nombre ${filtro.value} tiene un ${Math.round(array.country[0].probability * 100)} por ciento  de ser ${array.country[0].country_id} y un ${Math.round(array.country[1].probability * 100)} por ciento de ser ${array.country[1].country_id} `
  document.body.appendChild(p$$)
}