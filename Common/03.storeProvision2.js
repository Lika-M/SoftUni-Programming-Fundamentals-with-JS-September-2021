function storeProvision(stock, order) {

    let shop = [];

    for (let i = 0; i < stock.length; i += 2) {
        let obj = {
            name: stock[i],
            quantity: Number (stock[i + 1])
        }
        shop.push(obj);
    }

    for (let i = 0; i < order.length; i+=2) {
        let name = order[i];
        quantity = Number (order[i + 1])
        let obj2 = {
            name,
            quantity
        }

        let indexOfProduct = shop.findIndex(x => x.name === name);
        if(indexOfProduct === -1){
            shop.push(obj2);
        } else {
            shop[indexOfProduct].quantity += quantity;
        }
        
    }
    for (const product of shop) {
        console.log(`${product.name} -> ${product.quantity}`);
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