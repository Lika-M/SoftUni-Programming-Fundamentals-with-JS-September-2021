function numberModification(number) {

    let numberAsString = number.toString();
    let countDigits = numberAsString.length;
    let sum = 0;
    let avarageValue = 0

    for (let i = 0; i < countDigits; i++) {
        sum += Number(numberAsString[i]);
        avarageValue = sum / countDigits;
    }

    while (avarageValue < 5) {
        numberAsString += 9;
        countDigits++

        sum += 9;
        avarageValue = sum / countDigits;
    }

    console.log(numberAsString);
}
numberModification(101)