// Adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];

// Add new item to end of list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// Add new item start of list
var newItemFirst = document.createElement('li')
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

// Add a class of cool to all list items
var i;
for (i = 1; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

// Add number of items in the list to the heading
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;