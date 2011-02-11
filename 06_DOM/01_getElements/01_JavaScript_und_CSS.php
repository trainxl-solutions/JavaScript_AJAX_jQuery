<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de" >
  <head>
      <!--
      /** @author Axel Duerkop
        * @license http://creativecommons.org/licenses/by/3.0/de/
        * @copyright 2011 Axel Duerkop, trainXL, http://trainxl.de */
      -->
      <title>Elemente aus dem Dokument ziehen</title>
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" />

      <style type="text/css">
        .absatz { color: red; }
        .special { color: green; }
      </style>

      <script type="text/javascript">


      // Diese Funktion wird ausgeführt, wenn das Dokument bereit ist,
      // also komplett geladen wurde. Vorher ist ein Zugriff aus das Dokument
      // nicht sinnvoll, es könnte sein, dass man ins Leere greift...
      window.onload = function() {

        // ############################
        // ### getElementById() #######
        // ############################

        // Aendern des CSS-Styles eines Elements
        document.getElementById("headline").style.color = "blue";

        // ##############################
        // ### getElementsByTagName() ###
        // ##############################

        // "Einsammeln" von Elementen
        // Die Methode liefert ein Array
        // zurueck.
        var absaetze = document.getElementsByTagName("p");
        absaetze[1].style.fontWeight = "bold";

        // ##############################
        // ###      getAttribute      ###
        // ##############################

        var absaetze = document.getElementsByTagName("p");
        var nameDerKlasse = absaetze[1].getAttribute("class");

        alert(nameDerKlasse);

        // ##############################
        // ###      setAttribute      ###
        // ##############################

        var absaetze = document.getElementsByTagName("p");
        var nameDerKlasse = absaetze[0].setAttribute("class", "special");

      }

      </script>

  </head>
<body>
    <h1 id="headline">Gurken zum Fr&uuml;hst&uuml;ck</h1>
    <p class="absatz">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    <p class="absatz">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
</body>
</html>