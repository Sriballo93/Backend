const fs = require("fs");

// fs.readFile(file, callback(error,data)=>{})

fs.readFile("avengers.json", (err, avengers) => {
  if (err) {
    console.log("There was an error reading this file!");
  } else {
    const parsedAvengers = JSON.parse(avengers);
    console.log(parsedAvengers);
  }
});
