function deleni() {
    var x = document.getElementById("cislo1").value;
    var y = document.getElementById("cislo2").value;

    if(x == '99882211' && y == '555444888') {
        alert("Našli jste další easteregg!")
    }

    var z;

    if(x <= 0 && y <= 0) {
        z = Math.floor(x / y);
    } else if(x <= 0 || y <= 0){
        z = Math.ceil(x / y);
    } else {
        z = Math.floor(x / y);
    }
    
    
    var w = x % y;
    if (x == 0 && y == 0) {
        document.getElementById("display").innerHTML = "Zadali jste dvě nuly, nebo jste nic nezadali...";
    } else if(y == 0) {
        document.getElementById("display").innerHTML = "Nulou nelze dělit...";
    } else {
        document.getElementById("display").innerHTML = "Výsledek je " + z + ", zbytek je " + w;
    }
  }

var pocetLidi = 0;

function pridejCloveka() {
    pocetLidi++;
    document.getElementById("lidi").innerHTML = pocetLidi;
}

