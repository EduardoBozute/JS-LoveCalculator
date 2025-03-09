var you = (prompt("What's your name?"));
var crush = (prompt("What's your crush's name?"));
function getRandom(min, max){
return Math.floor(((Math.random()))*(max-min+1)+ min);
}
alert( you + ", Your score is " + getRandom(1, 100) + " points with " + crush + "." );
