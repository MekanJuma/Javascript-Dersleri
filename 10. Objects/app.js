// ! Objects
const person = {
    ady: "Myrat",
    familyasy: "Myradow",
    yashy: 25,
    okuwchymy: true,
    dolyAdy: function () {
        return `Menin adym ${this.ady} ${this.familyasy}`;
    },
    salamlash: function (kime) {
        console.log("Salam " + kime);
        return "Salam " + kime;
    },
};

// console.log(person.ady);
// console.log(person.yashy);
// console.log(person.okuwchymy);

// ? taze attr goshmak
person.email = "test@test.com";
person.yashy = 26; // ? bahasyny uytgetmek

delete person.okuwchymy; // ? delete key-value

let klashdash = "Sahet";
person.salamlash(klashdash);
// console.log(salamBerdi);

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};

const sum = calculator.add(5, 3);
const difference = calculator.subtract(8, 4);

console.log("Goshmak", sum);
console.log("Ayyrmak", difference);

let personDolyAdy = person.dolyAdy;
console.log(person.dolyAdy());
