// ! Selecting Elements:
// ? document.getElementById

let parag1 = document.getElementById("parag1");
// console.log(parag1.innerText);

// ? document.getElementsByClassName
let kitaplar = document.getElementsByClassName("kitap");
// console.log(kitaplar[0].innerText);
for (let kitap of kitaplar) {
    // console.log(kitap.innerText);
}

// ? document.getElementsByTagName
let parags = document.getElementsByTagName("p");
for (let parag of parags) {
    // console.log(parag.innerText);
}

// ? document.querySelector
let ikinjiKitap = document.querySelector(".kitap.ikinji");
// console.log(ikinjiKitap.innerText);

// ? document.querySelectorAll
let mashynlar = document.querySelectorAll("#mashyn.opel");

for (let mashyn of mashynlar) {
    // console.log(mashyn.innerText);
}

// ! Modifying Elements:
// ? Changing text content: .innerText vs. .textContent

let container = document.getElementById("container");
// console.log(container.innerText);
// console.log(container.textContent);
// console.log(container.innerHTML);

parag1.innerText = "DOM ogrendik";

// ? Changing HTML content: .innerHTML
let parag2 = document.getElementById("parag2");
parag2.innerHTML = "<strong>Taze baha</strong>";

// ? Changing attributes: .getAttribute and .setAttribute
let google = document.getElementById("google");
// console.log("Bashda", google.getAttribute("ders-youtube"));

google.setAttribute("ders-youtube", "DOM");
google.setAttribute("js-ogrenyas", "Mekan Jumayev");

// console.log("Sonra", google.getAttribute("ders-youtube"));

// ? Changing style
container.style.width = "150px";
container.style.height = "50px";
container.style.backgroundColor = "lightblue";
container.style.border = "2px dashed blue";
container.style.textAlign = "center";
container.style.lineHeight = "50px";
container.style.transition = "all 0.3s";

// ! Creating and Removing Elements:
// ? .createElement
// ? .appendChild
// ? .removeChild

const users = [
    { id: 1, name: "Myrat" },
    { id: 2, name: "Serdar" },
    { id: 3, name: "Aly" },
    { id: 4, name: "Yakup" },
    { id: 5, name: "Mekan" },
];

const userList = document.querySelector(".usersList");

users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerText = user.name;
    listItem.setAttribute("data-id", user.id);
    userList.appendChild(listItem);
});

const mekanList = document.querySelector('[data-id="5"]');
if (mekanList) {
    userList.removeChild(mekanList);
}

// ! Traversing the DOM:
// ? Parent: .parentNode
// ? children: .children
// ? siblings: .nextSibling, .previousSibling

let task1 = document.querySelector("#taskList .task1");
let task4 = document.querySelector("#taskList .task4");
// console.log(task1);

let parentList = task1.parentNode;
// console.log(parentList);

let allTasks = parentList.children;
// console.log(allTasks);

function getNextElementSibling(element) {
    let nextSibling = element.nextSibling;
    while (nextSibling && nextSibling.nodeType !== 1) {
        nextSibling = nextSibling.nextSibling;
    }
    return nextSibling;
}

function getPreviousElementSibling(element) {
    let prevSibling = element.previousSibling;
    while (prevSibling && prevSibling.nodeType !== 1) {
        // nodeType 1 is an ELEMENT_NODE
        prevSibling = prevSibling.previousSibling;
    }
    return prevSibling;
}

let next = getNextElementSibling(task4);
if (next) {
    console.log(next.innerText);
} else {
    let bashdanBashla = document.querySelector("#taskList .task1");
    console.log(bashdanBashla.innerText);
}

let prev = getPreviousElementSibling(task1);
if (prev) {
    console.log(prev.innerText);
} else {
    let allTasks = task1.parentNode.children;
    console.log(allTasks[allTasks.length - 1].innerText);
}
