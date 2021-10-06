// Variable definition
var pass = 50;
var score = 75;
var msg;

// Select message to write based on score
if (score > pass){
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;