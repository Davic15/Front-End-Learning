// This script is placed inside an immediately invoke function expression which helps protect the scopre of variables

(function() {
    // Create hotel object and write out the offer details
    var hotel = {
        name:           'Park',
        roomRate:       240,
        discount:       15, 
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Write out the hotel name, standard rate and the special rate
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    // Calculate and write out the expiry details
    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today){
        // Declare variables to work in local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days in milliseconds
        weekFromToday = new Date (today.getTime() + 7 * 24 * 60 * 60 * 100);

        // Create arrays to hold days and months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Collect parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}());