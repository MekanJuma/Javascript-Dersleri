// ! Promise

const sozBeryan = new Promise((resolve, reject) => {
    const dataResult = false;
    if (dataResult) {
        resolve({ msg: "Sozunde duryp data berdi" });
    } else {
        reject({ message: "Sozunde durmady, data yok" });
    }
});

sozBeryan
    .then((success) => {
        console.log(success.msg);
    })
    .catch((fail) => {
        console.log(fail.message);
    });

// ! Promise.all()
const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 1000, { message: "bir ishledi" })
);

const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, { message: "iki ishledi" })
);

Promise.all([promise1, promise2]).then((obj) => {
    console.log(obj);
});
