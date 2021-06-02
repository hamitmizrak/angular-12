//for in
let dizi5:string[]=["Malatya","Ankara","Adana","Van"];
//for(object temp: dizi)
for(var  temp5 in dizi5){
    console.log(dizi5[temp5] )
}


//for of
let dizi6:string[]=["Malatya","Ankara","Adana","Van"];
//for(object temp: dizi)
for(var  temp6 of dizi6){
    console.log(temp6)
}



//break continue return
for(var i=0; i<20; i++){
    if(i==6){
       continue;  //sadece 6 göstermesin sonra devam etsin
    }

    if(i==9){
        break; //döngüyü sonlandırsın
    }
    console.log(i);
}