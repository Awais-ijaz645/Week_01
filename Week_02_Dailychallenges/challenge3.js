function flattenData(data) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].items.length; j++) {
            result.push({
                category: data[i].category,
                item: data[i].items[j]
            });
        }
    }

    return result;
}

let groupedData = [
    {
        category: "Fruits",
        items: ["Apple", "Mango"]

    },
     {
        category: "Vegetables",
        items: ["Carrot", "Potato"]
    }
    
];

console.log(flattenData(groupedData));