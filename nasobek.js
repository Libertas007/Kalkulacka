function nasobek() {
    var cisla = document.getElementById("cisla").value;
    var cislaArr = cisla.split(", ");

    var cislo1 = cislaArr[0];
    var cislo2 = cislaArr[1];

    var nasobek = 0;
    var postup = 0;
    
    var delitelne = true;

    while((delitelne1 = false) || (delitelne2 = false)) {
        postup = (cislo1 * cislo2) / 2;
        
        if((postup !== parseInt(postup) || (postup == cislo1) || (postup == cislo2))) {
            delitelne = false;
        }


    };

    postup = nasobek;

    document.getElementById("nasobek").innerHTML = nasobek;
}
