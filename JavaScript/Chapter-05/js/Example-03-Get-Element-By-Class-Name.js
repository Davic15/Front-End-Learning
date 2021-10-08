// Find hot items
var elements = document.getElementsByClassName('hot');

// If 3 or more are found
if (elements.length > 2) {
    // Select the third one from the NodeList
    var el = elements[2];
    // Change the value of its class attribute
    el.className = 'cool';
}