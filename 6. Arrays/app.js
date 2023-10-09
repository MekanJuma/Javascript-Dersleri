//! array doredyas
let miweler = ["alma", "banan", "erik"];
let sanlar = [1, 2, 3, 4, 5];
let mashynlar = new Array("Opel", "Lexus", "BMW");
let boshArray = [];
let boshArray2 = new Array();

// console.log(miweler);
// console.log(sanlar);
// console.log(mashynlar);
// console.log(boshArray2);

//! length property
console.log("Mashynlar sany: ", mashynlar.length);

//! indexing
// console.log(miweler[0]);
// console.log(miweler[miweler.length - 1]);

//! slice
let bolunenMiweler = miweler.slice(1, 3);
console.log("New Array", bolunenMiweler);

//! Modifying Arrays - arraylary uytgetmek
miweler[0] = 1000; //? bahasyny uytgedya
// console.log(miweler);

miweler.push("Mango"); //? in sonyna taze baha goshya
miweler.unshift("Strawberry"); //? in bashyna taze baha goshya

miweler.pop(); //? in sonyndaky bahany listden ayyrya
miweler.shift(); //? in bashyndaky bahany listden ayyrya

// console.log(miweler);

//! convert array to string
console.log("join()", miweler.join(" / "));
console.log("ToString()", miweler.toString());

//! Merging Arrays
const arr1 = ["Ahmet", "Serdar"];
const arr2 = ["Myrat", "Mahmut", "Mekan"];
const arr3 = ["Sahet", "Yagshy"];
const merged = arr1.concat(arr2, arr3);

console.log(merged);
