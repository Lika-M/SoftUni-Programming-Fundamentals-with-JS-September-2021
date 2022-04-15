function storeProvision(arr1, arr2) {

    let shop = [];
    for (let i = 0; i < arr1.length; i += 2) {
        let name = arr1[i];
        let quantity = Number(arr1[i + 1]);
        let product = { name, quantity };
        shop.push(product);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let name = arr2[i];
        let quantity = Number(arr2[i + 1]);

        let findProduct = shop.find(ob => ob.name === name)
        if (findProduct) {
            findProduct.quantity += quantity;
        } else {
           let product = {name, quantity}
           shop.push(product);
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