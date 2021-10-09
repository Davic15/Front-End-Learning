// Find <li> elements
var elements = document.getElementsByTagName('li');

// If one or more are found
if (elements.length > 0){
    // Select the first one using array syntax
    var el = elements[0];
    // Change the value of the class attribute
    el.className = 'cool'
}