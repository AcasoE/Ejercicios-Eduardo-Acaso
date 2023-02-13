const init = ()=>{
    const atributos = document.querySelectorAll('span[data-function="testMe"]')
    console.log(atributos[2].textContent);
}
init()