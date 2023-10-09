// for-in
// for-of
// for range

for (let i = 0; i <= 5; i++) {
    // console.log(i);
}

let san = 0;
for (; san <= 5; ) {
    // console.log(san);
    san++;
}

// ! for-of >>>> array, string..

let miweler = ["alma", "erik", "nar"];
let miwelerString = "alma";
for (let miwe of miwelerString) {
    // console.log(miwe);
}

// ! for-in >>>> object lerin icinde loop etmek ucin

const mashyn = {
    ady: "Lexus",
    renki: "ak",
    yyly: 2020,
};

for (let key in mashyn) {
    // console.log(key + "- " + mashyn[key]);
}

miweler.forEach((miwe) => console.log(miwe));
