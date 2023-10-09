// * Form events: submit, input, focus, blur

const sampleUsers = [
    { username: "serdar", password: "serdar123" },
    { username: "myrat", password: "myrat123" },
    { username: "admin", password: "adminpass" },
];

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let userExists = false;
    for (let user of sampleUsers) {
        if (user.username == username && user.password == password) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        location.href = "mainPage.html";
    } else {
        errorMessage.textContent = "Username yada password yalnysh";
    }
});

const inputs = document.querySelectorAll(
    'input[type="text"], input[type="password"]'
);

for (let input of inputs) {
    input.addEventListener("focus", function () {
        this.style.border = "1px solid #3498db";
    });
    input.addEventListener("blur", function () {
        this.style.border = "1px solid #ccc";
    });
    input.addEventListener("input", function () {
        errorMessage.textContent = "";
    });
}
