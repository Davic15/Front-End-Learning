// Set up the object
var hotel = {
    name:       'Park',
    rooms:      120,
    booked:     77,
    checkAvailability:  function() {
        return this.rooms - this.booked;
    }
};

// Update the html
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

// Update the html
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();