// any key pressed in the website is changed in the h1 text

$("body").keydown(function(event){
    $("h1").text(event.key);
}) 