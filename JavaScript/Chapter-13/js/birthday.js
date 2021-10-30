(function () {
    var $birth = $('#birthday');                         
    var $parentsConsent = $('#parents-consent');         
    var $consentContainer = $('#consent-container');     
    $birth.prop('type', 'text').data('type', 'date').datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $birth.on('blur change', checkDate);                 
    function checkDate() {                               
        var dob = this.value.split('-');                   
        toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
    }
    function toggleParentsConsent(date) {                 
        if (isNaN(date)) return;                            
        var now = new Date();                               
        if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) { 
            $consentContainer.removeClass('hide');            
            $parentsConsent.focus();                          
        } else {                                            
            $consentContainer.addClass('hide');               
            $parentsConsent.prop('checked', false);           
        }
    }
}());