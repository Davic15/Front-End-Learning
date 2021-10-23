$(function() {
    var $listItemText = $('li').text();
    console.log($listItemText);
    $('li').append('<i>' + $listItemText + '</i>');
})