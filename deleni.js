function deleni() {
    var x = document.getElementById("cislo1").value;
    var y = document.getElementById("cislo2").value;

    if(x == '99882211' && y == '555444888') {
        alert("Našli jste další easteregg!")
    }


    var z = Math.floor(x / y);
    var w = x % y;
    document.getElementById("display").innerHTML = "Výsledek je " + z + ", zbytek je " + w;
  }

var pocetLidi = 0;

function pridejCloveka() {
    pocetLidi++;
    document.getElementById("lidi").innerHTML = pocetLidi;
}

