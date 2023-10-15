// ! Async/Await

async function salam(name) {
    return "Salam " + name; // new Promise
}

salam("Myrat")
    .then((text) => {
        console.log(text);
    })
    .catch((error) => {
        console.log(error);
    });

function garash(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMessages() {
    console.log("Salam");
    await garash(2000);
    console.log("Armada");
    await garash(2000);
    console.log("Bye");
}
getMessages();
