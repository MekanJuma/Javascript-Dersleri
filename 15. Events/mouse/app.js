// * Mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave

// ! 1 - onclick
const moodBtn = document.getElementById("moodButton");
let moodIndex = 0;

const moods = [
    { text: "🙂 normalny", color: "#aaa" },
    { text: "😃 shadyyan", color: "#f0db4f" },
    { text: "😞 gamgyn", color: "#83a4d4" },
    { text: "😡 gaharly", color: "#c2383b" },
    { text: "😜 oyunjan", color: "#f39c59" },
];

moodBtn.addEventListener("click", function () {
    moodIndex = (moodIndex + 1) % moods.length;
    const mood = moods[moodIndex];

    moodBtn.textContent = mood.text;
    moodBtn.style.backgroundColor = mood.color;
});

// ! mouse over
const infoBtn = document.getElementById("infoButton");
const tooltip = document.getElementById("tooltip");

infoBtn.addEventListener("mouseover", function () {
    tooltip.style.display = "block";
});

infoBtn.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
});

// ! doubleclick
const image = document.getElementById("galleryImage");
image.addEventListener("dblclick", function () {
    if (image.style.width == "300px") {
        image.style.width = "600px";
    } else {
        image.style.width = "300px";
    }
});

// ! Dragging element
const box = document.getElementById("draggableBox");
let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", function (e) {
    isDragging = true;

    offsetX = e.clientX - box.getBoundingClientRect().left;
    offsetY = e.clientY - box.getBoundingClientRect().top;
});

box.addEventListener("mouseup", function (e) {
    isDragging = false;
});

box.addEventListener("mousemove", function (e) {
    if (isDragging) {
        box.style.left = e.clientX - offsetX + "px";
        box.style.top = e.clientY - offsetY + "px";
    }
});
