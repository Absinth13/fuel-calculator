//alert('hallo'); 

const preis_gas = 1;
const preis_diesel = 1.7;
const preis_super  = 2;
//const liter = 70;
const demo = document.querySelector('#demo');

let rechnung;
//let krafstoff = 'd'; //combustible-krafstoff

// mit promptEingabe

let krafstoff = prompt('bitte geben Sie an was Sie getankt haben');
let liter     = prompt('wie viel haben Sie denn gemacht');



//mit einer if 

if (krafstoff == "d" ){
    //was passieren soll wenn true
    rechnung = preis_diesel*liter;
    demo.innerHTML = "Ihre Rechnung beträgt" +rechnung+ "euro";
} 


// mit einer if if 


//logischer operator logisch ODER = klein 'd' oder 'D'
// eine der beiden bedinungen muss erfüllt sein



if (krafstoff == 'd' || krafstoff == 'D') {
    //wenn der kunde über 50 liter getankt hat
   if (liter >50){
        rechnung = (preis_diesel*liter)*0.8;
   } else {
         rechnung = preis_diesel*liter;
   } 
    demo.innerHTML = "Ihre Rechnung beträgt" +rechnung+ "euro";
}


//Logisch UND => BEIDE bedingungen müssen erfüllt sein
// der krafstoff muss diesel sein UND 50liter oder darüber getankt 

if( (krafstoff == 'd' || krafstoff == 'D') && (liter >= 50)) {
  //beide bedingungen sind erfüllt
}