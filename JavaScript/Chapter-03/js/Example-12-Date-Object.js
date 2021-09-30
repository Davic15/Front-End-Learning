// Create a variable to hold a new date object (now)
var today = new Date();
// Create a variable to hold the year
var year = today.getFullYear();

// Update the html
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy; ' + year + '</p>';