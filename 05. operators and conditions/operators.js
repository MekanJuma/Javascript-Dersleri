// Operators
let a = 10;
let b = 20;

// true - hawa/dogry
// false - yok/yalnysh

console.log(a < b); // ulydyr
console.log(a > b); // kicidir
console.log(a == 11); // dendir
console.log(a != 10); // den daldir

// AND we OR
let birinjiEgz = 80;
let ikinjiEgz = 90;
let ucunjiEgz = 65;

let minBal = 70;

let gechdimi = birinjiEgz > minBal && ikinjiEgz > minBal && ucunjiEgz > minBal;

console.log("GEchdimi: ", gechdimi);

let renki = "Gok";

let renkiBolyamy = renki == "Gyzyl" || renki == "Yashyl";

console.log("Renki Bolyamy: ", renkiBolyamy);
