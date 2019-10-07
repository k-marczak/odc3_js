var haslo = "Bez pracy nie ma kołaczy";

haslo = haslo.toUpperCase();

var haslo1  = "";

function wypisz_haslo(){
       document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var dlugosc = haslo.length;



for(i = 0; i <= dlugosc; i++){
    if(haslo.charAt(i) == " "){
        haslo1 = haslo1 + " ";
    }
    else
    haslo1 = haslo1 + "-";
}

var litery = new Array(34);

litery[0] = 'A';
litery[1] = 'Ą';
litery[2] = 'B';
litery[3] = 'C';
litery[4] = 'Ć';
litery[5] = 'D';
litery[6] = 'E';
litery[7] = 'Ę';
litery[8] = 'F';
litery[9] = 'G';
litery[10] = 'H';
litery[11] = 'I';
litery[12] = 'J';
litery[13] = 'K';
litery[14] = 'L';
litery[15] = 'Ł';
litery[16] = 'M';
litery[17] = 'N';
litery[18] = 'Ń';
litery[19] = 'O';
litery[20] = 'Ó';
litery[21] = 'P';
litery[22] = 'R';
litery[23] = 'S';
litery[24] = 'Ś';
litery[25] = 'T';
litery[26] = 'U';
litery[27] = 'W';
litery[28] = 'V';
litery[29] = 'Y';
litery[30] = 'X';
litery[31] = 'Z';
litery[32] = 'Ż';
litery[33] = 'Ź';


function start(){

    var tresc_diva = "";

    for(i = 0; i < 34; i++){

    var element = "lit" + i;
     tresc_diva = tresc_diva + '<div class = "litera" onclick = sprawdz('+ i +') id = "'+element+'">'+litery[i]+'</div>';  
     if( i == 6 || i == 13 || i == 20 || i == 27){
          tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
     } 
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}


String.prototype.ustawZnak = function(miejsce, znak){

    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1); 
}



function sprawdz(nr){


    for(i = 0; i < dlugosc; i++){

        if(haslo.charAt(i) == litery[nr]){
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
        }
    }

    wypisz_haslo();
}







