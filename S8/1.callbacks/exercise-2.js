const userAnwsers = [];
const confirmValue = confirm('Soy un texto');
const propmt = prompt('Soy un texto');;
function confirmExample(texto){
   return confirm(texto)
}

function promptExample(texto){
    return propmt(texto)
}

function father(texto,cb){
    return userAnwsers.push(cb(texto))

}


father(confirmValue,promptExample)
console.log(userAnwsers);