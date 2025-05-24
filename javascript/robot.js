function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Buy " + Math.floor(money / 1.5) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);


function lifeInWeeks(age) {  
    var remaining_years = 90 - age;
    var no_of_weeks = remaining_years*52;
    var no_of_months = remaining_years*12;
    var no_of_days = remaining_years*365;
    console.log("You have "+ no_of_days + " days, " + no_of_weeks + " weeks, and " + no_of_months + " months left.");
}

function bmiCalculator(weight, height){
    var bmi = Math.round(weight / (height * height));
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);
alert(bmi);

//------------------------------------------------------------------------------------

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / (height * height));
var result = "";

    if(bmi < 18.5){
    result = "Your BMI is " + bmi + ", so you are underweight.";
}
if(bmi >= 18.5 && bmi <= 24.9){
    result = "Your BMI is " + bmi + ", so you have a normal weight.";
}
if(bmi > 24.9){
    result = "Your BMI is " + bmi + ", so you are overweight.";
}
return result;
}