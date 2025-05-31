const fs = require("fs"); // the module has been entered as a string

fs.writeFile('message.txt', "I have used fs module to write in this text file", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// if "uft8" in this case for a string is not given then it only gives the buffer not the data in the format you want
fs.readFile('./message.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();