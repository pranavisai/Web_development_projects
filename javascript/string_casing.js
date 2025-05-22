var name = prompt("What is your name?");
var first_letter = name.slice(0,1);
first_letter = first_letter.toUpperCase();
var remaining = name.slice(1,name.length);
remaining = remaining.toLowerCase();
alert("Hello, " + first_letter + remaining + "!")


var dog_age = prompt("what is your dog's age?");
var human_age = (dog_age - 2) * 4 + 21;
alert("Your human age of the dog is: " + human_age)
