// * Window events: load, resize, scroll, beforeunload

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "none";
});

let birzatlarUytgedimi = true;

window.addEventListener("beforeunload", function (e) {
    if (birzatlarUytgedimi) {
        // const message = "any message";
        // e.returnValue = message;
        // return message;
    }
});

let yokaryBtn = document.getElementById("yokary");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        yokaryBtn.style.display = "block";
    } else {
        yokaryBtn.style.display = "none";
    }
});

yokaryBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateWindowSize() {
    const windowSizeSpan = document.getElementById("windowSize");
    windowSizeSpan.textContent = `${window.innerWidth} x ${window.innerHeight}`;
}

window.addEventListener("resize", updateWindowSize);

updateWindowSize();
