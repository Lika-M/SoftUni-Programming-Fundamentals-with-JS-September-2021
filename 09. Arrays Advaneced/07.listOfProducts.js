function listOfProducts(array){

    array.sort();
    let arrLength = array.length;

    for (let i = 0; i < arrLength; i++) {
        let output = '';
        output += `${i + 1}.${array[i]}`
        console.log(output);
    }

}

// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])