const numbersList = [];

function sum(a,b){
return a+ b
}

function substract(a,b){
return a - b
}

function father(a,b,cb){
return numbersList.push(cb(a,b))

}

father(2,4,sum)

father(5,4,substract)




console.log(numbersList);