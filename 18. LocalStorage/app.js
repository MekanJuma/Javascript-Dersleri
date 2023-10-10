// ! Sessions and Local Storage

let userStyle = {
    theme: "dark",
    fontSize: "16px",
};
let userDetail = {
    username: "test",
    email: "test@test.com",
};

// ! SET
localStorage.setItem("style", JSON.stringify(userStyle));
localStorage.setItem("detail", JSON.stringify(userDetail));

// ! GET
let userStyleLS = localStorage.getItem("style");
if (userStyleLS) {
    let parsed = JSON.parse(userStyleLS);
    console.log(parsed);
    console.log(parsed.theme);
    console.log(parsed.fontSize);
}

// ! UPDATE
userStyleLS = localStorage.getItem("style");
if (userStyleLS) {
    let parsed = JSON.parse(userStyleLS);
    parsed.theme = "light";

    localStorage.setItem("style", JSON.stringify(parsed));
}
userStyleLS = localStorage.getItem("style");
console.log(userStyleLS);

// ! REMOVE
localStorage.removeItem("style");

userStyleLS = localStorage.getItem("style");
console.log(userStyleLS);

let detail = localStorage.getItem("detail");
console.log(detail);
