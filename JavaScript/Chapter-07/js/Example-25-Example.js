$(function() {
    // Setup
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li').hide().each(function(index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    // Item counter
    function updateCount() {
        var items = $('li[class!=complete]').length;
        $('#counter').text(items);
    }
    updateCount();

    // Setup from for new items
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function(e) {
        $newItemButton.hide();
        $newItemForm.show();
    });

    // Adding a new List Item
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
        updateCount();
    });


    // Click handling - uses delegation on <ul></ul> element
    $list.on('click', 'li', function() {
        var $this = $(this);
        var complete = $this.hasClass('complete');
        if(complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function() {
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class=\"complete\">' + item + '</li>')
                .hide().fadeIn(300);
            updateCount();
        }
    });
});