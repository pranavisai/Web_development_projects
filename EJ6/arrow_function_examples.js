var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filter_numbers = numbers.filter((num) => num < 10);
console.log(filter_numbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduce_numbers = numbers.reduce((x, y) => x + y);
console.log(reduce_numbers);

////Find - find the first item that matches from an array.
const find_number = numbers.find((num) => num > 10);
console.log(find_number);

////FindIndex - find the index of the first item that matches.
const find_index = numbers.findIndex((num) => num > 10);
console.log(find_index);
