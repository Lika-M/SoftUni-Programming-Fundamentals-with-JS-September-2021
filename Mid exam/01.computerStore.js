function computerStore(input) {

    let i = 0;
    let income = input[i]
    let sum = 0;

    while (income !== 'special' && income !== 'regular') {
        let price = Number(income);
        if (price < 0) {
            console.log(`Invalid price!`);
        } else {
            sum += price;
        }
        i++;
        income = input[i];
    }

    let tax = 0;
    let totalPrice = 0;
    if (sum === 0 || income == 'special' && income == 'regular') {
        console.log(`Invalid order!`);
    } else {
        if (income === 'special') {
            tax = sum * 0.2;
            totalPrice = (sum + tax) * 0.9;
        } else if (income === 'regular') {
            tax = sum * 0.2;
            totalPrice = sum + tax;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


}

computerStore([
  'regular'
    ])
    