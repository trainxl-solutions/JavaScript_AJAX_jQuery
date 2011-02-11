/*
 * Der Moment wird abgewartet, bis das gesamte HTML-Dokument geladen wurde.
 * Erst dann werden die Funktionen ausgeführt, die gleich zu Beginn
 * notwenig sind.
 */
window.onload = function() {

    // Nachsehen, ob Cookie vorhanden
    if (holeCookie('visited') == null) {
        // Wenn nicht, dann einen erzeugen, der in 31 Tagen verfällt.
        setzeCookie('visited', '1', erzeugeVerfallsdatum(31));
        // Willkommensnachricht anzeigen
        zeigeWillkommen();
    }
}


/**
 * Alle folgenden Funktionen sind in den entsprechenden Fotokopien erklärt.
 */
function setzeCookie(name,wert,verfall) {
    document.cookie = escape(name) + '=' + escape(wert) + '; path=/' + ((verfall == null) ? "" : "; verfall=" + verfall.toGMTString());
}

function holeCookie(name) {
    var cookiename = name + "=";
    var dc = document.cookie;
    var anfang, ende;
    
    if (dc.length > 0) {
        anfang = dc.indexOf(cookiename);
        if (anfang != -1) {
            anfang += cookiename.length;
            ende = dc.indexOf(';', anfang);
            if (ende == -1) {
                ende = dc.length;
            }
            return unescape(dc.substring(anfang, ende));

        }
    }
    return null;
}

function loescheCookie(name) {
    document.cookie = name + '=; verfall=THU, 01-Jan-70 00:00:01 GMT' + '; path=/';
}

function erzeugeVerfallsdatum(tage) {
    var verf = new Date();
    verf.setTime(verf.getTime() + (1000 * 60 * 60 * 24 * tage));
    return verf;
}

/**
 * Zeigt ein Popup-Fenster mit einer Willkommensnachricht.
 */
function zeigeWillkommen() {
    window.open('willkommen.html', 'willkommen', 'width=500px,height=400px,scrollbars=yes,resizable=yes,status=yes');
}