var Keman = /** @class */ (function () {
    //constructor =kurucu methodlar new=instance
    function Keman(tel44, viyola44, kontrabas44) {
        this.kontrabas = kontrabas44;
        this.tel = tel44;
        this.viyola = viyola44;
    }
    Object.defineProperty(Keman.prototype, "getViyola", {
        //getter setter
        get: function () {
            return this.viyola;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Keman.prototype, "setViyola", {
        set: function (v) {
            this.viyola = v;
        },
        enumerable: false,
        configurable: true
    });
    //function
    Keman.prototype.kemanCal = function () {
        console.log(this.tel + " " + this.viyola + " " + this.kontrabas);
    };
    return Keman;
}());
var kemanSinifi = new Keman("tel", "viyola", "konstrbas");
console.log(kemanSinifi.kemanCal);
console.log(kemanSinifi.tel);
//setter
kemanSinifi.setViyola = "Viyola 7854";
//getter
console.log(kemanSinifi.getViyola);
