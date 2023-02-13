const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newStreamers = streamers.filter((x) => {
  if (x.gameMorePlayed.includes("Legends")) {
    if (x.age > 35) {
      x.gameMorePlayed = x.gameMorePlayed.toUpperCase();
    }
    return x;
  }
});

console.log(newStreamers);
