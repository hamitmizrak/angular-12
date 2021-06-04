//interface
interface Televizyon{
    //govdesizmetotlar
    ekran():void;
    kumanda():void;
    usb3():string;
    hoparlor():void;
}

function muhasebe(tele:Televizyon){
    console.log("");
}

//abstract
abstract class Servis{

   abstract servis():void;
}

class Deneme implements Televizyon{
    constructor(){
        console.log(""); 
    }

    ekran(): void {
        console.log("ekran");
        //throw new Error("Method not implemented.");
    }
    kumanda(): void {
        console.log("kumanda");
    }
    usb3(): string {
        return "usb";
    }
    hoparlor(): void {
        console.log("hoporlür");
    }
}

//let deneme= new  Deneme().ekran;
//console.log(deneme);


