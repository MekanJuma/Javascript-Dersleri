// * Drag & Drop events: dragstart, drag, dragend, dragover, drop

let draggedItem = null;

let draggableList = document.querySelectorAll("[draggable=true]");

draggableList.forEach((item) => {
    item.addEventListener("dragstart", function () {
        draggedItem = this;

        setTimeout(() => {
            draggedItem.style.display = "none";
        }, 0);
    });

    item.addEventListener("dragend", function () {
        setTimeout(() => {
            draggedItem.style.display = "";
            draggedItem = null;
        }, 0);
    });
});

document.querySelectorAll("ul").forEach((list) => {
    list.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.classList.add("drag-over");
    });

    list.addEventListener("dragleave", function (e) {
        this.classList.remove("drag-over");
    });

    list.addEventListener("drop", function (e) {
        e.preventDefault();
        this.classList.remove("drag-over");
        this.appendChild(draggedItem);
    });
});
