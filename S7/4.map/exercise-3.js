const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCities = cities.map((x) => {
  if (x.isVisited) {
    return (x.name += " (Visitado)");
  } else {
    return x.name;
  }
});
console.log(visitedCities);

/* function nombres(objeto) {
    if (objeto.isVisited == true) {
        return  objeto.name + ' (Visitado)' 
    } else {
        return objeto.name
    }
}
const ciudadesVisitadas = cities.map(nombres)
console.log(ciudadesVisitadas); */
