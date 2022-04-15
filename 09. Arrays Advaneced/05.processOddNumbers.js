function processOddNumbers(array) {

    let arr = array.filter((element, i) => i % 2 === 1);
    let output = arr.reverse().map(n => n*2).join(' ');
    console.log(output);
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])