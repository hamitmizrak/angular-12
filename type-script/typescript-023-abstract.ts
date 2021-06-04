//abstract = soyut

abstract class Bilgisayar{
    public adi:string;

    constructor(){
        console.log("üst atadan geldi");
    }

    //gövdeli method
    anakart():void{
        console.log("anakart: "+this.adi)
    }

    //gövdesiz method
   abstract ram():void;
}
//////////////////////////////////////////////
class Msi extends Bilgisayar{
    ram(): void {
        console.log("ram");
    }
 
    constructor(){
        super();
    }

}

let msiBilgisayar=new Msi();
msiBilgisayar.adi="msi gl 75";
msiBilgisayar.anakart();
msiBilgisayar.ram();

//let polymorphism= Bilgisayar();
//polymorphism=new Msi();

