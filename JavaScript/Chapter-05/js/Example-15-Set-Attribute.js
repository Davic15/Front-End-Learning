// Get the first item, and change its class attribute
var firstItem = document.getElementById('one');
firstItem.className = 'complete';

// Get the fourth item, and add an attribute to it
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');