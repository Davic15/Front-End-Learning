// Create a variable called saying to hold the string
var saying = 'Home sweet home ';

// Create a variable called msg to hold a message
var msg = '<h2>length</h2><p>' + saying.length + '</p>';

// Convert string to uppercase
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';

// Convert string to lowercase
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';

// Find the caracter with an index of 12
msg += '<h2>chatacter index: 12</h2><p>' + saying.charAt(12) + '</p>';

// Find the index number of the first instance of the 'ee' character
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';

// Find the index number of the last instance of the 'e' character
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';

// Find the character with an index number in the 8-14 range
msg += '<h2>character index: 8 - 14</h2><p>' + saying.substring(8, 14) + '</p>';

// Find the first instance of 'me' and replace it with 'w'
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

// Update the html
var el = document.getElementById('info');
el.innerHTML = msg;