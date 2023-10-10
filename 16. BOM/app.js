// ! Browser Object Model (BOM)

// ! Window Object
// ? Dimensions
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

console.log("viewportWidth", viewportWidth);
console.log("viewportHeight", viewportHeight);

let browserWidth = window.outerWidth;
let browserHeight = window.outerHeight;

console.log("browserWidth", browserWidth);
console.log("browserHeight", browserHeight);

// ? Dialog boxes
// window.alert("Bu bir alertdir");
// let userConfirmed = window.confirm("Kabul edyanmi?");
// let userAge = window.prompt("Yashynyzy girin", "25");

// ? Timers
// * setTimeout()
// let timerId = setTimeout(() => {
//     console.log("5 sekuntdan ishleya");
// }, 5000);
// clearTimeout(timerId);

// ? mysal

function showNotif() {
    document.getElementById("notification").style.display = "block";
}

function closeNotification() {
    document.getElementById("notification").style.display = "none";
}

let notificationTimer = setTimeout(showNotif, 5000);

// * setInterval()

let limit = 0;
// let intervalId = setInterval(() => {
//     limit++;
//     console.log(`Interval ishledi ${limit} gezek`);

//     if (limit >= 5) {
//         clearInterval(intervalId);
//         console.log("Interval durdy");
//     }
// }, 1000);

// ! Navigator Object
let browserName = window.navigator.appName;
let browserVersion = window.navigator.appVersion;
let geolocation = window.navigator.geolocation;
let cookieEnabled = window.navigator.cookieEnabled;
let language = window.navigator.language;
let userAgent = window.navigator.userAgent;

console.log("browserName", browserName);
console.log("browserVersion", browserVersion);
console.log("geolocation", geolocation);
console.log("cookieEnabled", cookieEnabled);
console.log("language", language);
console.log("userAgent", userAgent);

// ! History Object
// window.history.back();
// window.history.forward();

// window.history.go(-2);
// window.history.go(1);

// ! Screen Object

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

let availableWidth = window.screen.availWidth;
let availableHeight = window.screen.availHeight;

let colorDepth = window.screen.colorDepth;
let pixelDepth = window.screen.pixelDepth;

console.log(screenWidth, screenHeight);
console.log(availableWidth, availableHeight);

console.log(colorDepth);
console.log(pixelDepth);

// 8 bits = 256 colors.
// 16 bits = 65,536 colors
// 24 bits = 16.7 million colors
