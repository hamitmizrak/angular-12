/////////////////////////////////////////////////////////////
function isimSoyisim() {
    console.log("1- Hamit Mızrak");
}
isimSoyisim();
/////////////////////////////////////////////////////////////
var isim = function isimSoyisim2() {
    console.log("2- Hamit Mızrak");
};
console.log(isim);
/////////////////////////////////////////////////////////////
var isim2 = function () {
    console.log("3- Hamit Mızrak");
};
console.log(isim2);
/////////////////////////////////////////////////////////////
function isimSoyisim3(ad, soyad) {
    console.log("4- Hamit Mızrak");
}
isimSoyisim3("Hamit", "Mızrak");
/////////////////////////////////////////////////////////////
var isim5 = function (ad, soyad) {
    console.log("5- Hamit Mızrak");
};
console.warn(isim5);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/////////////////////////////////////////////////////////////
var isim6 = function (ad, soyad) {
    console.log("6- Hamit Mızrak");
};
console.warn(isim6);
/////////////////////////////////////////////////////////////
var isim7 = function (ad, soyad) {
    return ad + " " + soyad;
};
var isimConsole = isim7;
console.log("7 " + isimConsole);
