// Create variables to hold the names and note text.
var username;
var message;

// Assign values to there variables.
username = 'Molly';
message = 'See our upcoming range';

// Get the element with and id of name.
var elName = document.getElementById('name');
// Replace the content of this element.
elName.textContent = username;

// Get the element with an id of note.
var elNote = document.getElementById('note');
elNote.textContent = message;
