// Define variables
var pass = 50;
var score = 90;

// Check if the user has passed
var hasPassed = score >= pass;

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'Level passed: ' + hasPassed;