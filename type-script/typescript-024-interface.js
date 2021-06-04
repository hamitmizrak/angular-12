function muhasebe(tele) {
    console.log("");
}
//abstract
var Servis = /** @class */ (function () {
    function Servis() {
    }
    return Servis;
}());
var Deneme = /** @class */ (function () {
    function Deneme() {
        console.log("");
    }
    Deneme.prototype.ekran = function () {
        console.log("ekran");
        //throw new Error("Method not implemented.");
    };
    Deneme.prototype.kumanda = function () {
        console.log("kumanda");
    };
    Deneme.prototype.usb3 = function () {
        return "usb";
    };
    Deneme.prototype.hoparlor = function () {
        console.log("hoporlür");
    };
    return Deneme;
}());
