// Variable definition
var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

// Check whether user passed one of the two rounds, store result in variable
var minPass = (score1 >= pass1) || (score2 >= pass2);

// Create message
var msg = 'Resit required: ' + !minPass;

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = msg;