function amazingNums(number) {
    let numToString = number.toString();
    let length = numToString.length;
    let sum = 0;

    for (i = 0; i < length; i++) {
        sum += parseInt(numToString[i]);
    }
    let result = sum. toString(). includes("9")
    ? `${number} Amazing? True`
    : `${number} Amazing? False`
    console.log(result);
}
amazingNums(1233)
amazingNums(999)