var object1 = {
    name: "Hamit",
    surname: "Mızrak",
    deparment: "Bil. Müh",
    teknoloji: ["servlet", "jsp", "jsf", "spring boot", "angular", "sql", "hibernate", "rest", "html5", "css3", "jquery", "bootstrap", "docker"],
    muhendislik: {
        sinif: "A",
        sertifikalar: "B",
        dersler: ["otomata", "bilgi güvenliği", "veri tabanı"]
    }
};
console.log(object1.name);
console.log(object1.surname);
console.log(object1.deparment);
console.log(object1.teknoloji[0]);
console.log(object1.muhendislik.dersler[1]);
