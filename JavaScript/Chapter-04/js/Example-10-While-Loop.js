// Variable definition
var i = 1;
var msg = '';

// Store 5 times tables in a variable
while (i < 10){
    msg += i + 'x 5 = ' + (i * 5) + '<br />';
    i++; 
}
document.getElementById('answer').innerHTML = msg;