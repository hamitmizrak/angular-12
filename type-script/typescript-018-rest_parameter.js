function restParameter(adi) {
    var devam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        devam[_i - 1] = arguments[_i];
    }
    return adi + " " + devam.join(" ");
}
console.log(restParameter("Hamit", "Mızrak", "Java", "Servlet", "Jsp", "Jsf Spring boot angular vue html css js jquery rest mysql mssql deneme"));
