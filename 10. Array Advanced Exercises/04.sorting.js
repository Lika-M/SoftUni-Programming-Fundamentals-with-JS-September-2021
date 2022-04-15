function sorting(numbers) {

    let array = [];
    let lengthArr = numbers.length
    for (let i = 0; i < lengthArr; i++) {
 let currentNumber = 0;
        if (i % 2 !== 0) {
            currentNumber = Math.min(...numbers);
        } else {
            currentNumber = Math.max(...numbers)
        }
        array.push(currentNumber);
        numbers.splice(numbers.indexOf(currentNumber), 1);
    }
    console.log(array.join(' '));

}
// 94 1 69 2 63 3 52 18 31 21
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])