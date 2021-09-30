// Set up the object
var hotel = {
    name:   'Quay',
    rooms:  40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

// Update the HTML
// Get element
var elName = document.getElementById('hotelName');
// Update the HTML with prperty of the object
elName.textContent = hotel.name;

// Get element
var elRooms = document.getElementById('rooms');
// Update the HTML with prperty of the object
elRooms.textContent = hotel.checkAvailability();