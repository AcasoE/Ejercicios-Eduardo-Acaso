const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const genderRpg = videogames.filter(x=>x.genders.find(x=>x==="RPG"))

console.log(genderRpg);

const media = genderRpg.reduce((acum, alumno)=>{
    return acum + alumno.score/genderRpg.length
    },0)
    console.log(media);
/* const media = genderRpg.reduce((acum, actual)=>{
    console.log(actual.score);
return acum + actual.score /genderRpg.length
},0)
console.log(media); */