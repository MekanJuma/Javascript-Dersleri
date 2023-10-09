// ! Sorting

// Ascending order --- kiciden ula, yada A -> Z
// Descending order --- uludan kica, yada Z -> A
const numbersAsc = [3, 1, 5, 2, 4];
numbersAsc.sort((a, b) => a - b);
console.log(numbersAsc);

numbersAsc.sort((a, b) => b - a);
console.log(numbersAsc);

const miweler = ["banana", "cherry", "apple", "date"];
miweler.sort((a, b) => a.localeCompare(b));

console.log(miweler);

miweler.sort((a, b) => b.localeCompare(a));
console.log(miweler);

const people = [
    { name: "Myrat", age: 30 },
    { name: "Sahet", age: 25 },
    { name: "Merdan", age: 35 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.age - a.age);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
