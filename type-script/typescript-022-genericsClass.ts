//normal class
class CommonNormalClass{
adi:string;
soyadi:string;
sayi:number;

constructor(adi:string,soyadi:string,sayi:number){
    this.adi=adi;
    this.soyadi=soyadi;
    this.sayi=sayi;
}

}
let normal=new CommonNormalClass("","",44);

////////////////////////////////////////////////////////////
// generics class
class CommonGenericClass<T>{
    adi44:T;
    soyadi44:T;
    sayi44:T;
    
  
    
    }

    let generics=new CommonGenericClass<string>();
    generics.adi44="Hamit";
    generics.soyadi44="Mizrak"
    generics.sayi44="44";