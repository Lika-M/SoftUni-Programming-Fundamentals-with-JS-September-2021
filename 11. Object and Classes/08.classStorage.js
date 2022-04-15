class Storage {
// ?????? this problem is a big problem!
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
    }

    totalCost(price, quantity) {
        let sum = 0;
        return sum += price * quantity;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }
}



let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);



// {"Browser Name":"Google Chrome",
// "Open Tabs":["Facebook","YouTube","Google Translate"],
// "Recently Closed":["Yahoo","Gmail"],
// "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},

