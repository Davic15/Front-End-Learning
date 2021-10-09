// Get second list item
var itemTwo = document.getElementById('two');
// Get its text content
var elText = itemTwo.firstChild.nodeValue;
console.log(elText);
// Change the text
elText = elText.replace('pine nuts', 'kale');
// Update the list item
itemTwo.firstChild.nodeValue = elText;