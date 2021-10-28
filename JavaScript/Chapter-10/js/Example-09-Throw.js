var width = 12;
var height = 'text';

function calculateArea(width, height) {
    try {
        var area = width * height;
        if(!isNaN(area)) {
            return area;
        } else {
            throw new Error('calculateAre() received invalid number.');
        }
    } catch(e) {
        console.log(e.name + ' ' + e.message);
        return 'We were unable to calculate the area.';
    }
}

document.getElementById('area').innerHTML = calculateArea(width, height);