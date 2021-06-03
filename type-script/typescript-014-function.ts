function fullName4(name:string,surname:string):void{
    console.log(name+" "+surname);
}
fullName4("Hamit","Mızrak")


//////////////////////////////////////////////////////////////////////
function fullName5(name:string,surname:string):string{
    return name+" "+surname;
}

let adSoyad:string=fullName5("Hamit","Mızrak");
console.log(adSoyad);

////////////////////////////////////////////////////////////////////////
function fullName6(name:string,surname?:string):string{

    if(surname){
         return name+" "+surname;
    }else {
        return name;
    }

   
}

let adSoyad6:string=fullName6("Hamit");
console.log(adSoyad6);

let adSoyad7:string=fullName6("Hamit","Malatya");
console.log(adSoyad7);

