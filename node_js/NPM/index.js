//var generateName = require("sillyname"); // using CSJ to import the package


//import {generateName} from "sillyname"; // using ESM to import the package
//var generated_name = generateName();

//console.log("This is the generated name " + generated_name);

import {randomSuperhero} from 'superheroes';

var superhero_name = randomSuperhero();

console.log("My generated superhero name is "+ superhero_name + "!");