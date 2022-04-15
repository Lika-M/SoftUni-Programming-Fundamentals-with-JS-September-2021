function storeProvision(currentStock, orderedProducts) {

    let shop = {}

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let key = currentStock[i];
        shop[key] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedProducts.length - 1; i += 2) {
        let key = orderedProducts[i];
        if (shop.hasOwnProperty(key)) {
            shop[key] += Number(orderedProducts[i + 1]);
        } else {
            shop[key] = Number(orderedProducts[i + 1]);
        }
    }

    for (const product in shop) {
        console.log(`${product} -> ${shop[product]}`);
    }
   
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)