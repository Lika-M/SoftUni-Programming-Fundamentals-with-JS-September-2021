function computerStore(array) {

    let i = 0;
    let income = array[i];
    let totalPrice = 0;
    let tax = 0;

    while (income !== "regular" && income !== "special") {
        let price = Number(income);
        if (price >= 0) {
            totalPrice += price;
        } else {
            console.log("Invalid price!");
        }
        i++;
        income = array[i]
    }

    tax = totalPrice * 0.2;
    let finalPrice = totalPrice + tax;

    if (income === 'special') {
        finalPrice *= 0.9;
    }


    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);

    }

}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
