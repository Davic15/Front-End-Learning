$(function() {
    var $p = $('p');

    // Create a clone of the <p></p> element and add it after <h2></h2>element
    var $cloneQuote = $p.clone();
    $p.remove();
    $cloneQuote.insertAfter('h2');

    /* 
        Remove first item, and add it to the end of the list.
    */
   var $moveItem = $('#one').detach();
   $moveItem.appendTo('ul');
});