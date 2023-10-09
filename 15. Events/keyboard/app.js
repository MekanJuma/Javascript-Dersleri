// * Mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave
// * Keyboard events: keydown, keyup, keypress
// * Form events: submit, change, focus, blur
// * Window events: load, resize, scroll, unload
// * Drag & Drop events: dragstart, drag, dragend, dragover, drop

document.addEventListener("keydown", function (e) {
    let parag = document.getElementById("direction");

    // ctrl + s
    // shiftKey
    // altKey
    if (e.ctrlKey && e.key == "s") {
        e.preventDefault();

        let status = document.getElementById("status");
        status.textContent = "Saved!";
    }

    switch (e.keyCode) {
        case 37:
            parag.textContent = "Chepe ◀!";
            break;
        case 38:
            parag.textContent = "Yokara ▲!";
            break;
        case 39:
            parag.textContent = "Saga ▶!";
            break;
        case 40:
            parag.textContent = "Ashak ▼!";
            break;
    }
});

let numberInput = document.getElementById("numeric");

numberInput.addEventListener("keypress", function (e) {
    // ASCII 0-9
    if (e.which < 48 || e.which > 57) {
        e.preventDefault();
    }
});

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function (e) {
        let capsWarning = document.getElementById("capsWarning");

        if (e.getModifierState("CapsLock")) {
            capsWarning.style.display = "";
        } else {
            capsWarning.style.display = "none";
        }
    });

document.getElementById("searchInput").addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
    const miweler = document.querySelectorAll("#itemList li");
    miweler.forEach((miwe) => {
        if (miwe.textContent.toLowerCase().includes(query)) {
            miwe.style.display = "";
        } else {
            miwe.style.display = "none";
        }
    });
});
