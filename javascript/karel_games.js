// https://stanford.edu/~cpiech/karel/ide.html

// this is the code for generating a chessboard

function main(){
   first_grid();
   second_grid();
   first_grid();
   second_grid();
   first_grid();
   
}

function first_grid(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   }
   
function second_grid(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
   }
