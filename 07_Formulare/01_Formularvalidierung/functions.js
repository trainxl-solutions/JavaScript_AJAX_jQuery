/** @author Axel Duerkop
  * @license http://creativecommons.org/licenses/by/3.0/de/
  * @copyright 2011 Axel Duerkop, trainXL, http://trainxl.de
  */


window.onload = function() {
	document.contactform.firstname.value 	= '';
	document.contactform.age.value 		= '';
	document.contactform.firstname.focus();
}

/**
 * Diese Funktion prueft das ganze Formular, 
 * indem sie die Pruefung an weitere Funktionen
 * delegiert. 
 */

function check_form() {

	errors = new Array();

	check_firstname();
	check_age();	

	if (errors.length > 0) {
		show_errors();
		return false;
	} else {
		return true;		
	}
}

function check_firstname() {
	
	if (document.contactform.firstname.value == '') {
		errors.push('Bitte geben Sie einen Vornamen an!<br />');
	} 
	if (document.contactform.firstname.value.length < 2) {
		errors.push('Ihr Name ist zu kurz!<br />');
	}
}

function check_age() {
	if (document.contactform.age.value == '') {
		errors.push('Bitte geben Sie Ihr Alter an!<br />');
	}
}

function show_errors() {
	
	var html = '';
	
	for (var i= 0; i < errors.length; i++) {
		html = html + errors[i];
	}
	
	document.getElementById('errors').innerHTML = html;
}
