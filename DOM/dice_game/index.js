// for dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesFolder = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImagesFolder);

// for dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImagesFolder = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImagesFolder);

// setting the winner title

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}