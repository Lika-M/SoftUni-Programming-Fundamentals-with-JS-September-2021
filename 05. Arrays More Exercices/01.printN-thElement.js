function printNthElement(array) {
    let collection = [];
    let step = Number(array[array.length - 1]);
    for (let i = 0; i < array.length - 1; i += step) {
        collection.push(array[i]);
    }
    console.log(collection.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])
