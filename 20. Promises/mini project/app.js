const userDatabase = [
    { id: 1, name: "Mekan" },
    { id: 2, name: "Serdar" },
    { id: 3, name: "Myrat" },
    { id: 4, name: "Eziz" },
];

const postsDatabase = [
    { userName: "Mekan", posts: ["Mekan's Post1", "Mekan's Post2"] },
    { userName: "Serdar", posts: ["Serdar's Post1", "Serdar's Post2"] },
    { userName: "Myrat", posts: ["Myrat's Post1", "Myrat's Post2"] },
    { userName: "Eziz", posts: ["Eziz's Post1", "Eziz's Post2"] },
];

const commentsDatabase = {
    "Mekan's Post1": ["Comment1 on Mekan post", "Comment2 Mekan Post"],
    "Myrat's Post2": ["Comment1 Myrat post", "Comment2 Myrat post"],
};

function getUser(userId, callback) {
    setTimeout(() => {
        const user = userDatabase.find((user) => user.id === userId);
        callback(user || {});
    }, 1000);
}

function getPosts(userName, callback) {
    setTimeout(() => {
        const userPosts = postsDatabase.find(
            (user) => user.userName === userName
        );
        callback(userPosts ? userPosts.posts : []);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        callback(commentsDatabase[post] || []);
    }, 1000);
}

const userId = 100;
getUser(userId, (user) => {
    if (Object.keys(user).length != 0) {
        // console.log("Username: ", user.name);
        getPosts(user.name, (posts) => {
            if (posts.length != 0) {
                // console.log(posts, "posts");
                posts.forEach((post) => {
                    getComments(post, (comments) => {
                        if (comments.length != 0) {
                            // console.log(`Comment on ${post}: `, comments);
                        } else {
                            // console.log(post, " comment tapylmady");
                        }
                    });
                });
            } else {
                // console.log("Ulanyjynyng posty tapylmady ", userId);
            }
        });
    } else {
        // console.log("Ulanyjy tapylmady", userId);
    }
});

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userDatabase.find((user) => user.id === userId);
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

function getPosts(userName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userPosts = postsDatabase.find(
                (user) => user.userName === userName
            );
            resolve(userPosts ? userPosts.posts : []);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(commentsDatabase[post] || []);
        }, 1000);
    });
}

getUser(userId)
    .then((user) => {
        console.log("Username: ", user.name);
        return getPosts(user.name);
    })
    .then((posts) => {
        console.log(posts);
        return Promise.all(posts.map((post) => getComments(post)));
        // [PromiseComment1, PromiseComment2]
    })
    .then((comments) => {
        comments.forEach((comment, index) => {
            console.log(`Post ${index + 1}: `, comment);
        });
    })
    .catch((error) => {
        console.log("Error: ", error.message);
    });
