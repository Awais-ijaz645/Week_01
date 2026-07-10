let cache = {};

function getUser(id) {

    if (cache[id]) {
        console.log("Using Cached Data");
        return cache[id];
    }

    console.log("Fetching New Data");

    let user = {
        id: id,
        name: "User " + id
    };

    cache[id] = user;

    return user;
}

console.log(getUser(5));
console.log(getUser(5));
console.log(getUser(7));
console.log(getUser(7));