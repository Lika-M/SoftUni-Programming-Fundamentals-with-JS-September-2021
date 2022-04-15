function amazingNums(number) {

    let num = number;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;

        num = Math.trunc(num / 10);
    }
   
    while (sum > 0) {
        let dig = sum % 10;
        let result = dig === 9 ?
            `${number} Amazing? True`
            : `${number} Amazing? False`;
            console.log(result);
            sum = Math. trunc(dig / 10)
    }
    
}

amazingNums(1233)