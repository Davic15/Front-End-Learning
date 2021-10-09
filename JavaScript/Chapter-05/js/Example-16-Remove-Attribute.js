// Get the first item, if it has a class attribute, remove its class attribute
var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')) {
    firstItem.removeAttribute('class');
}