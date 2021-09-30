// Create a variable call msg to hold a message
// Find the width of the browser window
var msg = '<h2>browser windows</h2><p>width: ' + window.innerWidth + '</p>';

// Find the height of the window
msg += '<p>height: ' + window.innerHeight + '</p>';

// Find the number of items in the browser window's history
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';

// Find the width of the computer screen
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';

// Find the height of the computer screen
msg += '<p>height: ' + window.screen.height + '</p>';


// Update the html
var el = document.getElementById('info');
el.innerHTML = msg;

// Find the location of the current page and display it in an alert box
alert('Current page: ' + window.location);