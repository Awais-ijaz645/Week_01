let items = [
    { name: "Item A", value: 50 },
    { name: "Item B", value: 20 },
    { name: "Item C", value: 80 }
];
for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j < items.length - 1 - i; j++) {

        if (items[j].value > items[j + 1].value) {

            let temp = items[j];
            items[j] = items[j + 1];
            items[j + 1] = temp;
        }
    }
}
console.log(items);
