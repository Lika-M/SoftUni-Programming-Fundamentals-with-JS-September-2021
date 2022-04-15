function inventoryMatcher(arr1, arr2, arr3, string) {
    let i = 0;
    let income = string.split(' ');
    let product = income[i];
    
    while (product !== 'done') {
        if (arr1.includes(product)) {
            let index = arr1.indexOf(product)
            let name = arr1[index];
            let quantity = arr2[index];
            let price = arr3[index];
            console.log(`${name} costs: ${price}; Available quantity: ${quantity}`);
        }

        i++;
        product = income[i];
    }
}
// inventoryMatcher(
//     ['Bread', 'Juice', 'Fruits', 'Lemons'],
//     [10, 50, 20, 30],
//     [2.34, 1.23, 3.42, 1.50],
//     'Bread Juice done'
// )
inventoryMatcher(['Oranges', 'Apples', 'Nuts'],
    [1500, 5000000, 2000000000],
    [2.3412, 1.23, 3.4250],
    'Nuts done'
    )