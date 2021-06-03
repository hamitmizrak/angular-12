class Keman{
    //public private protected  this

    //object field 
    public tel:string;
    private viyola:string;
    protected kontrabas:string;

    //constructor =kurucu methodlar new=instance
    constructor(tel44:string,viyola44:string,kontrabas44:string){
    this.kontrabas=kontrabas44;
    this.tel=tel44;
    this.viyola=viyola44;
    }

    //getter setter
    public get getViyola() {
        return this.viyola;
    }
    
    public set setViyola(v : string) {
        this.viyola = v;
    }
    //function
    kemanCal(){
        console.log(this.tel+" "+this.viyola+" "+this.kontrabas);
    }

    //Accessors are only available when targeting ECMAScript 5 and higher.
    //tsc -t es5  typescript-019-class.ts
}


let kemanSinifi=new Keman("tel","viyola","konstrbas");
console.log(kemanSinifi.kemanCal);
console.log(kemanSinifi.tel);

//setter
 kemanSinifi.setViyola="Viyola 7854";

 //getter
 console.log(kemanSinifi.getViyola); 


