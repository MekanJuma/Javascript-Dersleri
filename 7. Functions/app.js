// ! Funksiyalar
// function name
// parameters
// code block
// return value
// calling function

function salamBer(ady, familyasy) {
    let salamText = `Salam ${ady} ${familyasy}`;
    return salamText;
}

var ulanyjyAdy = "Myrat";
var ulanyjyFamilyasy = "Myradow";
var salamText = salamBer(ulanyjyAdy, ulanyjyFamilyasy);
console.log(salamText.toUpperCase());

// ! Arrow functions (ES6)
const salamBer2 = (ady, familyasy) => `Salam ${ady} ${familyasy}`;
var salamText = salamBer(ulanyjyAdy, ulanyjyFamilyasy);
console.log(salamText.toUpperCase());

// ! calculator
function calculate(num1, num2, amal) {
    if (amal === "goshmak") {
        return num1 + num2; // goshmak
    } else if (amal === "ayyrmak") {
        return num1 - num2; // ayyrmak
    } else if (amal === "kopeltmek") {
        return num1 * num2; // kopeltmek
    } else if (amal === "bolmek") {
        if (num2 !== 0) {
            return num1 / num2; // bolmek
        } else {
            return "san 0 a bolunip bilmeya";
        }
    } else {
        return "Yalnysh amal";
    }
}

const result1 = calculate(5, 3, "goshmak");
const result2 = calculate(10, 4, "ayyrmak");
const result3 = calculate(6, 2, "kopeltmek");
const result4 = calculate(8, 2, "bolmek");
const result5 = calculate(5, 0, "bolmek");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
