// ! JSON

const jsonString = '{"ady": "Myrat", "yashy": 25}';
const parsedObject = JSON.parse(jsonString); // string to object
console.log(parsedObject["yashy"]);

const person = {
    name: "Myrat",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "swimming"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
    },
};

const jsonString2 = JSON.stringify(person);
console.log(jsonString2);
