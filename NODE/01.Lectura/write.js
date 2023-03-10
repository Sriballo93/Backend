const fs = require("fs");

const avengers = [
  {
    name: "SpiderMan",
    power: 70,
  },
  {
    name: "Dr.Strange",
    power: 80,
  },
  {
    name: "Hulk",
    power: 110,
  },
];

const avengersJson = JSON.stringify(avengers);

fs.writeFile("avengers.json", avengersJson, () => {
  console.log("avengers.json created!");
});
