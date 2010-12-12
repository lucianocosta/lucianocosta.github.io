// prepare the form when the DOM is ready 
$(document).ready(function() { 
    var options = { 
        beforeSubmit:  validate,  // pre-submit callback 
        success:       showResponse  // post-submit callback 
 
        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      type        // 'get' or 'post', override for form's 'method' attribute 
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
        //clearForm: true        // clear all form fields after successful submit 
        //resetForm: true        // reset the form after successful submit 
 
        // $.ajax options can be used here too, for example: 
        //timeout:   3000 
    }; 
 
    // bind form using 'ajaxForm' 
    $('#contact-form').ajaxForm(options); 
	
	
	//PrettyPhoto Initialization

	$("a[rel^='prettyPhoto']").prettyPhoto({
				animationSpeed: 'normal', /* fast/slow/normal */
				padding: 40, /* padding for each side of the picture */
				opacity: 0.35, /* Value betwee 0 and 1 */
				showTitle: true, /* true/false */
				allowresize: true, /* true/false */
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'dark_rounded', /* light_rounded / dark_rounded / light_square / dark_square */
				callback: function(){}
			});
}); 

function showResponse(responseText, statusText){
	$('#success').animate({ opacity: "show" }, "fast");
	$('input.send').animate({ opacity: "hide" }, "fast")
}
				
function validate(formData, jqForm, options) {
	$("li.error").animate({ opacity: "hide" }, "slow");
			 
	var nameValue = $('input[name=name]').fieldValue(); 
	var subjectValue = $('input[name=subject]').fieldValue(); 
	var emailValue = $('input[name=email]').fieldValue();
	var messageValue = $('textarea[name=message]').fieldValue(); 
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var correct = true;
	
	if (!nameValue[0]) {
		$("li.error.wrong_name").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!emailValue[0]) {
		$("li.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	} else if(!emailReg.test(emailValue[0])) {
		$("li.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!messageValue[0]) {
		$("li.error.wrong_message").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!subjectValue[0]) {
		$("li.error.wrong_subject").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!correct) {return false;}
} 	

				
$("p#success").click( function () { 
	$(this).animate({ opacity: "hide" }, "slow"); 
	
});		