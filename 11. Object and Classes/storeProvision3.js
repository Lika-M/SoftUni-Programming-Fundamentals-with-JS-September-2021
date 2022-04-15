function storeProvision(stock, order){

    let shop = {};
    for (let i = 0; i < stock.length; i+=2) {
        let name= stock[i];
        shop[name] = Number(stock[i + 1]);
    }

    for (let i = 0; i < order.length; i+=2) {
        let name = order[i];
        let quantity = Number( order[i + 1]);

       if(shop.hasOwnProperty(name)){
           shop[name] += quantity;
       }   else {
           shop[name] = quantity;
       }
       console.log(`${name} -> ${shop[name]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )