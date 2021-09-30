// Store the greeting in a variable
var greeting = "Howdy ";

// Store the users name in a variable
var name = "Molly";

// Create the welcome message by concatenating the strings in the two variables 
var welcomeMessage = greeting + name + "!";

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of this element with the personal message
el.textContent = welcomeMessage;