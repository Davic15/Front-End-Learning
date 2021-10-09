// Store a nodeList in array and check if it contains items
var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {
    //Loop through each item and change value of class attribute
    for (var i = 0; i < hotItems.length; i++){
        hotItems[i].className = 'cool';
    }
}