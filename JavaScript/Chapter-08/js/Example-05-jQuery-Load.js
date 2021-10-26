// When user clicks nav link
$('nav a').on('click', function() {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + '#container').hide().fadeIn('slow');
})