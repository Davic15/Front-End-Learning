// Create a variable called msg to hold a message
// Find the title of the document.
var msg = '<p><b>page title: </b>' + document.title + '<br />';

// Find the url of the document
msg += '<b>page address: </b>' + document.URL + '<br />';

// Find the date the document was last modified
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

// Update the html
var el = document.getElementById('footer');
el.innerHTML = msg;