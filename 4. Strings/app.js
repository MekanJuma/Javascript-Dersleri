// String

let singleQuotes = "Hello, Single Quotes!";
let doubleQuotes = "Hello, Double Quotes!";
let backTicks = `Hello, Backticks!`;

// concatination
let ady = "Myrat";
let familyasy = "Saparow";
let dolyAdy = ady + " " + familyasy;
console.log(dolyAdy);

// formatting
let yashy = 24;
let ulanyjyAdy = "Myrat";
let formattedString = `${ulanyjyAdy} ${yashy} yashynda!`;
console.log(formattedString);

// string indexing
let str = "JavaScript";
let ilkinjiHarpy = str[0];
console.log(ilkinjiHarpy); // Jogaby: "J"

let sonkyHarpy = str[str.length - 1];
console.log(sonkyHarpy); // Jogaby: "t"

// string methods
let jsStr = "JavaScript gyzykly!";

// Length Property
console.log("Uzynlygy", jsStr.length);

// toUpperCase Method
console.log(jsStr.toUpperCase());

// toLowerCase Method
console.log(jsStr.toLowerCase());

// indexOf Method
console.log(jsStr.indexOf("gyzykly"));

// slice Method
console.log(jsStr.slice(0, jsStr.indexOf("gyzykly")));

let newText = jsStr.replace("gyzykly", "gyzykly dal");
console.log(newText);

// Escape characters
let quotedString = 'Ol "JavaScript" gyzykly diydi!';
let escapedString = 'Ol \\"JavaScript\\" gyzykly diydi';
let newlineString = "JavaScript\nweb ucin\ngerekli!";
// console.log(quotedString);
// console.log(escapedString);
console.log(newlineString);
