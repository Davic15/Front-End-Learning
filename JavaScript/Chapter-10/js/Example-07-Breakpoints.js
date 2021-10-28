var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
    e.preventDefault();

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    if (area < 100) {
        debugger;
    }
    $form.append('<p>' + area + '</p>');
});