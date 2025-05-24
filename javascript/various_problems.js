function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
var result = ""

if(year % 4 === 0){
    result = "Leap year."
}
else{
if(year % 100 !== 0){
    result = "Not a leap year."
}
else{
    if(year % 400 === 0){
        result = "Leap year."
    }
}
}

return result

/**************Don't change the code below****************/    

}

function who_is_paying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    
    var arr_len = names.length;
    var result = names[Math.floor(Math.random()*arr_len)] + " is going to buy lunch today!";
    return result;

/******Don't change the code below*******/    
}

function beer() {
    var count = 99;
    while(count > 2){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + (count -1) + " bottles of beer on the wall.")
        count--;
    }
    console.log("2 bottle of beer on the wall, 2 bottles of beer. Take 1 down, pass it around, 1 bottle of beer on the wall.")
    console.log("1 bottle of beer on the wall, 1 bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.")
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}

beer();


function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var arr = [0,1];
    
    if(n === 1){
        return [0];
    }
    else if (n === 2){
        return arr;
    }
    else{
        for (var i = 2; i< n; i++){
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr;
    }  
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(2);

