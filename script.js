var you = (prompt("What's your name?"));
var crush = (prompt("What's your crush's name?"));
function getRandom(min, max){
    var loveScore = Math.random()*100;
    loveScore = Math.floor(loveScore) + 1;
}

if (loveScore > 70) {
    alert("Amazing! " + you + ", Your score is " + getRandom(1, 100) + " points with " + crush + "." );
} else {
    alert(you + ", Your score is " + getRandom(1, 100) + " points with " + crush + "." );
}