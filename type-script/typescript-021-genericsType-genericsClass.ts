//normal function type
function resultNormal(adi:string):string{
    return adi;
}

let sonucNormal=resultNormal("44");
//console.log(sonucNormal);
///////////////////////////////////////////////

//generics function type ==> any,unknown
function resultGenerics<T>(adi:T):T{
    return adi;
}

let sonucGenerics=resultGenerics(true);
console.log(sonucGenerics);