// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
 const newNumbers = numbers.map(double);

//var newNumbers = [];
  //  numbers.forEach(function (x) {
   // newNumbers.push(x * 2);
//});

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filter_numbers = numbers.filter(function(num) {
   return num < 10;
});

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
   console.log("accumulator = " + accumulator);
   console.log("currentNumber = " + currentNumber);
     return accumulator + currentNumber;
 })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

const newNumber = numbers.find(function (num) {
   return num > 10;
 })

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

const newNumber = numbers.findIndex(function (num) {
   return num > 10;
 })

// console.log(newNumber);


const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },

];


// using substring method 

const new_array = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(1, 101); // can also be given as 0 and 100
});

console.log(new_array);