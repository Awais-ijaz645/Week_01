function combineLists(users, orders) {

    let result = [];

    for (let i = 0; i < users.length; i++) {

        for (let j = 0; j < orders.length; j++) {

            if (users[i].id === orders[j].id) {

                result.push({
                    id: users[i].id,
                    name: users[i].name,
                    total: orders[j].total
                });

            }

        }

    }

    return result;
}

let users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Sara" }
];

let orders = [
    { id: 1, total: 200 },
    { id: 2, total: 500 },
    { id: 3, total: 300 }
];

console.log(combineLists(users, orders));