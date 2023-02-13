

function rollDice(numero) {
    Number(numero)
    let aleatorio = Math.floor(Math.random() * (numero + 1))
   return aleatorio


}
console.log(rollDice(6))