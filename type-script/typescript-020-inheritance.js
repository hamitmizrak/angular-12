var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var KemanVL75 = /** @class */ (function (_super) {
    __extends(KemanVL75, _super);
    function KemanVL75() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KemanVL75;
}(Keman));
var subChild = new KemanVL75("tel66", "viyola66", "konstrabas66");
console.log(subChild.tel);
