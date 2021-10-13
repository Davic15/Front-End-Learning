function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget(e);

    /* 
        If user clicked on an a element, get its li element, get the ul element, remove list item from list
    */
    if (target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }

    /*
        If the user clicked on an em element, get its li element, get the ul element, remove list item from list
    */
    if (target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }

    /*
        Prevent the link from taking you elsewhere
    */
   if (e.preventDefault) {
       e.preventDefault();
   } else {
       e.returnValue = false;
   }
}

// Set up event listeners to call itemDone() on click
/* 
    Get the shopping list, use bubbling phase for flow
*/

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function(e) {
        itemDone(e);
    });
}