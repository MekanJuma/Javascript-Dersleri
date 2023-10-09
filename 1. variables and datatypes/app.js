console.log("Fayldan gelyan");

// variable / uytgeyji

var a = 1;
let b = 1;
const c = 1;

// data types
// number: integer and float
let age = 25;
let x = 5.15;
let pi = 3.14159;

// string
let greeting = "Salam";
let name = "Developerlar";

// boolean
let iyilyanmi = true;
let icilyanmi = false;

// null
let emptyValue = null;

// undefined
let notDefined;

// object => {key : value}
let person = { name: "Alice", age: 30 };

// array
let colors = ["red", "blue", "green", 1, null, true, person];

// date
let currentDate = new Date(2022, 10, 18, 14, 15, 0);
console.log(currentDate);

// map
let map = new Map();
map.set("key1", "value1");
map.set("apple", "alma");
map.set("water", "suw");
let value = map.get("water");
console.log(value);

// set
let set = new Set([1, 2, 3, 3]);
console.log(set);

// NaN
let notANumber = 0 / 0;
console.log(notANumber);

// tapawutlary

// Initialization
var alma; // undefined
var alma1 = 1;
alma1 = 2;
console.log("alma", alma1);

let erik; // undefined
let erik2 = 2;

const uzum = 3;
// Scope: block and function

{
    var varExample = 100;
}
console.log("varExample", varExample);

// {
//     let letExample = 100;
//     console.log("icinde", letExample);
// }
// console.log("letExample", letExample);

// {
//     const constExample = 100;
//     console.log("icinde", constExample);
// }
// console.log("constExample", constExample);

function funcAdy() {
    var funcVar = 1000;
}
// console.log(funcVar);

// Re-declaration

var alma = 10;
console.log("taze", alma);

// let erik = 10;
// console.log("taze let erik", erik);

// const uzum = 10;
// console.log("taze const uzum", uzum);
