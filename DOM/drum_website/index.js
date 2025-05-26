
// better to not directly provide a number as the quantity can change
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){ 

// this is for detecting in case of clicking the button for sound
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button_letter = this.innerHTML;
    sound(button_letter);
    animating_button(button_letter);
}); 

}

// this is for detecting in case of pressing keyboard buttons for sound
document.addEventListener("keydown", function(event){
    sound(event.key);
    animating_button(event.key);
})



function sound(key){
    switch(key){
        case "w":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
            break;

        case "a":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
            break;
        case "s":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
            break;
        case "d":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
            break;
        case "j":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
            break;
        case "k":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
            break;
        case "l":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
            break;
        
        default:
            console.log("Cant find this sound");
}
}

function animating_button(key){
    var button_highlight = document.querySelector("." + key);

    // to give animation to the button
    button_highlight.classList.add("pressed");

    // to remove the animation after a certain amount of time
    setTimeout(function(){
        button_highlight.classList.remove("pressed");
    }, 100);

}