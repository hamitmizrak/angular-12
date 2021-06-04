//normal function type
function resultNormal(adi) {
    return adi;
}
var sonucNormal = resultNormal("44");
//console.log(sonucNormal);
///////////////////////////////////////////////
//generics function type ==> any,unknown
function resultGenerics(adi) {
    return adi;
}
var sonucGenerics = resultGenerics(true);
console.log(sonucGenerics);
