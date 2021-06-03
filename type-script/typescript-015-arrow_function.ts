
/////////////////////////////////////////////////////////////
function isimSoyisim(){
    console.log("1- Hamit Mızrak")
}

isimSoyisim();

/////////////////////////////////////////////////////////////
 let isim=   function isimSoyisim2(){
    console.log("2- Hamit Mızrak")
}
console.log(isim);


/////////////////////////////////////////////////////////////
let isim2=  () =>{ 
    console.log("3- Hamit Mızrak")
}

console.log(isim2);


/////////////////////////////////////////////////////////////
function isimSoyisim3(ad:string,soyad?:string):void{
    console.log("4- Hamit Mızrak")
}

isimSoyisim3("Hamit","Mızrak");


/////////////////////////////////////////////////////////////
var isim5=(ad:string,soyad?:string)=>{
    console.log("5- Hamit Mızrak")
}
console.warn(isim5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/////////////////////////////////////////////////////////////
var isim6=(ad:string,soyad?:string):void=>{
    console.log("6- Hamit Mızrak")
}

console.warn(isim6);


/////////////////////////////////////////////////////////////
var isim7=(ad:string,soyad?:string):string=>{
    return ad+" "+soyad;
}

let isimConsole=isim7;
console.log("7 "+isimConsole);
