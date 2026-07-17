console.log("Challenge no 1........")
function myMap(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}

const answer = myMap([1,2,3], x => x * 2);

console.log(answer);

console.log("Challenge no 2........")
function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
function throttle(callback, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            callback(...args);
            lastTime = now;
        }
    };
}
function search(value) {
    console.log("Searching:", value);
}
const debounceSearch = debounce(search, 1000);
debounceSearch("A");
debounceSearch("Aw");
debounceSearch("Awa");
debounceSearch("Awai");
debounceSearch("Awais");
function scrollHandler() {
    console.log("Scrolling...");
}
const throttledScroll = throttle(scrollHandler, 200);
const interval = setInterval(() => {
    throttledScroll();
}, 50);
setTimeout(() => {
    clearInterval(interval);
    console.log("Scroll Stopped");
}, 2000);
console.log("Challenge no 3........")
async function fetchWithRetry(url, retries) {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Request Failed");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Attempt ${i} failed`);
            if (i === retries) {
                throw error;
            }
        }
    }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

console.log("Challenge no 4........")
function groupByDepartment(users) {

    return users.reduce((groups, user) => {

        if (!groups[user.dept]) {
            groups[user.dept] = [];
        }
        groups[user.dept].push(user.name);
        return groups;
    }, {});
}
const employees = [
    { name: "Ali", dept: "Sales" },
    { name: "Sara", dept: "Tech" },
    { name: "Ahmed", dept: "Sales" },
    { name: "Ayesha", dept: "HR" },
    { name: "Bilal", dept: "Tech" }
];

const result = groupByDepartment(employees);

console.log(result);

console.log("Challenge no 5........")
function deepCopy(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}
const original = {
    name: "Ali",
    age: 22,
    address: {
        city: "Lahore",
        country: "Pakistan"
    },
    skills: ["JavaScript", "React"]
};
const copied = deepCopy(original);

copied.name = "Awais";
copied.address.city = "Sahiwal";
copied.skills.push("Node.js");

console.log("Original:");
console.log(original);

console.log("Copied:");
console.log(copied);


console.log("Challenge no 6........")
function myPromiseAll(promises) {

    return new Promise((resolve, reject) => {

        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {

            Promise.resolve(promise)
                .then((data) => {

                    results[index] = data;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })
                .catch((error) => {
                    reject(error);
                });

        });

    });

}

const p1 = Promise.resolve("JavaScript");
const p2 = Promise.resolve("React");
const p3 = Promise.resolve("Node.js");

myPromiseAll([p1, p2, p3])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });