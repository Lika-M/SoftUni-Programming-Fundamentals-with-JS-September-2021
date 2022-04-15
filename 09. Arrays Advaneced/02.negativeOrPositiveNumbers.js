function negativeOrPositive(array) {

    let arr = [];

    for (let element of array) {

        if (element < 0) {
            arr.unshift(element);
        } else {
            arr.push(element)
        }
    }
    
    console.log(arr.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9'])