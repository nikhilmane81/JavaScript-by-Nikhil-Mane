/*
The new version of JavaScript (ES6) introduced the use of classes instead of functions.
 Prior to ES6, there were only classes and, functions which are callable objects.
  A class in javascript is basically a blueprint or template of the object. 
  New objects can be created from a class.
*/
//Class : A bluepring to create an objects
class Player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();