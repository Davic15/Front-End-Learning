// Create a variable to hold anew Date object
var today = new Date();

// Get the year
var year = today.getFullYear();

// Set the date that the company was established
var est = new Date('Apr 16, 1996 15:45:55');

// Get the difference between then and now in milliseconds
var difference = today.getTime() - est.getTime();

// Divide by the number of milliseconds to get years
difference = (difference / 31556900000);

// Update the HTML
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';