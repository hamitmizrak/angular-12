//abstract = soyut
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
var Bilgisayar = /** @class */ (function () {
    function Bilgisayar() {
        console.log("üst atadan geldi");
    }
    //gövdeli method
    Bilgisayar.prototype.anakart = function () {
        console.log("anakart: " + this.adi);
    };
    return Bilgisayar;
}());
//////////////////////////////////////////////
var Msi = /** @class */ (function (_super) {
    __extends(Msi, _super);
    function Msi() {
        return _super.call(this) || this;
    }
    Msi.prototype.ram = function () {
        console.log("ram");
    };
    return Msi;
}(Bilgisayar));
var msiBilgisayar = new Msi();
msiBilgisayar.adi = "msi gl 75";
msiBilgisayar.anakart();
msiBilgisayar.ram();
