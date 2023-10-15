// ! Fetch Random Cat project

//? https://api.thecatapi.com/v1/images/search

document.addEventListener("DOMContentLoaded", () => {
    const catButton = document.getElementById("fetchCatButton");
    const catImage = document.getElementById("catImage");

    catButton.addEventListener("click", async () => {
        const url = "https://api.thecatapi.com/v1/images/search";
        const response = await fetch(url);
        const data = await response.json();

        if (data && data[0] && data[0].url) {
            let imageUrl = data[0].url;
            catImage.src = imageUrl;
            catImage.style.display = "block";
        } else {
            catImage.style.display = "none";
        }
    });
});
