(function() {
    var form     = document.getElementById('interests'); 
    var elements = form.elements;                      
    var options  = elements.genre;                     
    var all      = document.getElementById('all');     
    function updateAll() {
        for (var i = 0; i < options.length; i++) {      
            options[i].checked = all.checked;              
            console.log(options[i].name);
        }
    }
    addEvent(all, 'change', updateAll);                
  
    function clearAllOption(e) {
        var target = e.target || e.srcElement;           
        if (!target.checked) {                           
            all.checked = false;                           
        }
    }
    for (var i = 0; i < options.length; i++) {         
      addEvent(options[i], 'change', clearAllOption);  
    }
}());