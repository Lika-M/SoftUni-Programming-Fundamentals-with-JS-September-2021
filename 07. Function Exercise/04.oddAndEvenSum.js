function oddAndEvenSum(int) {

    let intInString = int.toString();
    let length = intInString.length;

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < length; i++) {
        let num = Number(intInString[i]);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234)