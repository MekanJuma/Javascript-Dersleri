// Current date and time
const currentDate = new Date();
console.log(currentDate);

// Specific date and time
const specificDate = new Date(2023, 5, 15, 10, 30, 0);
console.log(specificDate);

// Parsing a date string
let datetime = "2023-06-15T10:30:00";
let date = "2023-06-15";

const parsedDate = new Date(date);
console.log(parsedDate);

const now = new Date();
const formattedDate = now.toLocaleString();
console.log(formattedDate);

const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const timestamp = now.getTime();

console.log(year);
console.log(month + 1);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(timestamp);

now.setDate(now.getDate() + 3);
now.setHours(now.getHours() - 2);

console.log(now);

const date1 = new Date("2023-06-15");
const date2 = new Date("2023-07-01");

if (date1 < date2) {
    console.log("date2 uly date1 den");
} else if (date1 > date2) {
    console.log("date1 uly date2 den");
} else {
    console.log("date1 we date2 denler");
}
