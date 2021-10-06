// Variable definition
var table = 3;
var operator = 'addition';
var  i = 1;
var msg = '';

if (operator == 'addition') {
    // Do addition
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
} else {
    // Do multiplication
    while (i < 11) {
        msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;