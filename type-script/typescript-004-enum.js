//var let const
//enum
var Olcu;
(function (Olcu) {
    Olcu[Olcu["kucuk"] = 0] = "kucuk";
    Olcu[Olcu["orta"] = 1] = "orta";
    Olcu[Olcu["buyuk"] = 2] = "buyuk";
})(Olcu || (Olcu = {}));
var magaza = Olcu.kucuk;
alert(magaza);

