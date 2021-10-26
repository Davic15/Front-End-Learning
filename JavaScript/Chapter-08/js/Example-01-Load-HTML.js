// Create the request object
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    // Check if the request fails or not
    if(xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
    }
};

// Prepare the request
xhr.open('GET', 'data/data.html', true);
// Send the request
xhr.send(null);
