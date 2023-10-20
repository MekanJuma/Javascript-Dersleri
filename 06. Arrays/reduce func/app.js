// ! reduce()

// * group/aggregate

// ? const newArray = array.reduce(callbackFunction(accumulator, bahasy, bahanynIndex), initialValue);

// accumulator - yygnayjy, toplayjy

const sanlar = [1, 2, 3, 4, 5];

let total = 2;
for (let san of sanlar) {
    total += san;
}
console.log("Total", total);

const sum = sanlar.reduce((acc, san) => {
    return acc + san;
}, 2);

console.log("Sum", sum);
// * 0 - bashlangyc baha accumulator ucin

// ? accumulator (0) + currentValue (1) -> 1 accumulator
// ? accumulator (1) + currentValue (2) -> 3 accumulator
// ? accumulator (3) + currentValue (3) -> 6 accumulator
// ? accumulator (6) + currentValue (4) -> 10 accumulator
// ? accumulator (10) + currentValue (5) -> 15 accumulator

const names = ["Myrat", "Arslan", "Myrat", "Serdar", "Arslan"];
// ? {Myrat: 2, Arslan: 2, Serdar: 1}

const groupNames = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {});

let obj = {};
obj["myrat"] = 1;
console.log(obj);

console.log("groupNames", groupNames);

const jobs = [
    { category: "Data analyst", company: "Google", salary: 110000 },
    { category: "Backend Developer", company: "Facebook", salary: 90000 },
    { category: "Data analyst", company: "Facebook", salary: 120000 },
    { category: "Software Engineer", company: "Goldie", salary: 125000 },
];

const groupedJobs = jobs.reduce((acc, job) => {
    // {data analyst: [{companyName: 90000}, {}]}
    let key = job.category;
    if (!acc[key]) {
        acc[key] = [];
    }

    let value = {};
    value[job.company] = job.salary;
    acc[key].push(value);

    return acc;
}, {});

console.log("groupedJobs", groupedJobs);
