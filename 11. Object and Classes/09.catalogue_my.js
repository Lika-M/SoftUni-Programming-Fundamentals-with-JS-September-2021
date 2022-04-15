function catalogue(array) {
    let list = [];

    for (let line of array) {
        let [name, price] = line.split(' : ');
        price = Number(price);

        let product = { name, price };
        list.push(product);
    }
    sortedList = list.sort((a, b) => a.name.localeCompare(b.name));

    let letter = sortedList[0].name[0];
    console.log(letter);

    for (let product of sortedList) {
        if (product.name[0] !==letter) {
            letter = product.name[0];
            console.log(letter);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)