// ! 🌐 Fetch API in JavaScript

// ? Request object
// * url
// * Method: GET, POST, PUT, DELETE
// * Parameters
// * Headers
// * Body

// ? Response object
// * Status: 1xx, 2xx, 3xx, 4xx, 5xx
// * Headers
// * Body

// fetch(url, options);

// ! API used in the video
// ! https://jsonplaceholder.typicode.com/guide/

// fetch("servering/api adresi", {
//     method: "GET", // or 'POST', 'PUT', 'DELETE'
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Oops, something went wrong!", error);
//     });

async function fetchData() {
    const url = new URL("https://jsonplaceholder.typicode.com/posts");
    // ? Parameters
    const params = new URLSearchParams({
        userId: 5,
        "user name": "Mike",
    });
    url.search = params.toString();

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
}
fetchData();

// ! POST
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        title: "Turkmenistan",
        body: "Ata Watan",
        userId: 1,
    }),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
})
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log(result);
    });
