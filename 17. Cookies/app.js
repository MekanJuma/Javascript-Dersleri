// ? Cookies?

// ! reading cookies
console.log(document.cookie);

// ! setting cookies
document.cookie = "loggedIn=true; max-age=86400;";
document.cookie = "theme=dark; max-age=86400;";
document.cookie = "language=en-US; max-age=86400;";

let timestamp = new Date().getTime();
document.cookie = `lastRequest=${timestamp}; max-age=86400;`;

console.log(document.cookie.split("; "));

// ! transforming cookies
// 'loggedIn=true'  {loggedIn : true}

function getCookies() {
    const cookies = document.cookie.split("; ");
    const transformedCookies = cookies.reduce((acc, cookie) => {
        let [key, value] = cookie.split("=");
        acc[key] = value; // acc = {key : value}
        return acc;
    }, {});

    return transformedCookies;
}

const cookies = getCookies();

console.log(cookies);
