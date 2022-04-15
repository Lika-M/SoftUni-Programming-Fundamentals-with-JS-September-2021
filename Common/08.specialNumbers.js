function specialNumbers(n) {

    for (let currentNum = 1; currentNum <= n; currentNum++) {

        let number = currentNum;
        let sum = 0;
        
        while (number > 0) {
            let digit = number % 10;
            sum += digit;
            number = Math.trunc(number / 10);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
 
    }

}
specialNumbers(15)