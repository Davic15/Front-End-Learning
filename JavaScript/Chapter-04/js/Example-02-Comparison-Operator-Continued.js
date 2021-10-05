// Variable definition
var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95;

// Check if socres are higher than current high scores
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'New high score: ' + comparison;