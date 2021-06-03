function fullName4(name, surname) {
    console.log(name + " " + surname);
}
fullName4("Hamit", "Mızrak");
//////////////////////////////////////////////////////////////////////
function fullName5(name, surname) {
    return name + " " + surname;
}
var adSoyad = fullName5("Hamit", "Mızrak");
console.log(adSoyad);
////////////////////////////////////////////////////////////////////////
function fullName6(name, surname) {
    if (surname) {
        return name + " " + surname;
    }
    else {
        return name;
    }
}
var adSoyad6 = fullName6("Hamit");
console.log(adSoyad6);
var adSoyad7 = fullName6("Hamit", "Malatya");
console.log(adSoyad7);
