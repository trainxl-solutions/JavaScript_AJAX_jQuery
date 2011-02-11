/**
 * Beispiel fuer eine Formularvalidierung
 * @author Axel Duerkop
 */

window.onload = function() {
	document.contactform.firstname.value = '';
	document.contactform.firstname.focus();
}


/**
 * Oberfunktion, die zur Pruefung des Formulars einzelne
 * Jobs an Unterfunktionen delegiert.
 * Hier kommt es auf den Rueckgabewert an: Ist er true, wird das Formular
 * verschickt, bei false nicht.
 */
function check_form() {
	
	// Das Array fuer die Fehlersammlung wird vorbereitet
	errors = new Array();
	
	// Alle Unterfunktionen werden der Reihe nach aufgerufen
	check_firstname();
	check_age();
	
	// Danach wird geschaut, ob sich was im Fehlerarray angesammelt hat.
	if (errors.length == 0) {
		return true;
	} else {
		// Wenn ja, dann werden die Meldungen ausgegeben
		show_errors();
		return false;				
	}
}

/**
 * Prueft die Angabe fuer den Vornamen
 */
function check_firstname() {
	var firstname = document.contactform.firstname.value;
	if (firstname.length == "") {
		// Ein neues Element in das Fehlerarray pushen
		errors.push('Bitte Vornamen eingeben!<br />');
		return false;
	}
	return true;
}

/**
 * Prueft die Altersangabe
 */
function check_age() {
	var age = document.contactform.age.value;
	if (age == "" || isNaN(age) || age < 1) {
		// Ein neues Element in das Fehlerarray pushen
		errors.push('Mit dem Alter stimmt was nicht!<br>');
		return false;
	}
	return true;
}

/**
 * Gibt die angefallenen Fehlermeldungen gesammelt aus
 */
function show_errors() {
	
	// Fehler-Div ausleeren
	document.getElementById('errors').innerHTML = '';
	// Variable initialisieren
	var html = '';
	
	// Das Array durchschreiten und einen HTML-String "zusammenkleben"
	for (i=0; i<errors.length; i++) {
		html = html + errors[i];
	}
	
	// Den zusammengeklebten String ausgeben im Fehler-Div
	document.getElementById('errors').innerHTML = html;
	return false;
}
