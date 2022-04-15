function storage(input){

    let shop = new Map;
    for (const line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(!shop.has(item)){
            shop.set(item, quantity);
        } else {
            let currentQuantity = shop.get(item);
            shop.set(item, quantity + currentQuantity)
        }
    }
    for (const entries of shop) {
        console.log(`${entries[0]} -> ${entries[1]}`);
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)