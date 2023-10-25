function addiere() {
  var zaehler = document.getElementById("textAnzeige").innerHTML;
  ++zaehler;
  document.getElementById("textAnzeige").innerHTML = "" + zaehler;
}

function subtrahiere() {
  var zaehler = document.getElementById("textAnzeige").innerHTML;
  --zaehler;
  document.getElementById("textAnzeige").innerHTML = "" + zaehler;
}
