function palindromeIntegers(array) {

    for (const num of array) {
       
        let numAsString = num.toString();
        let reversedNumAsString = numAsString.split('').reverse().join('')

        if(numAsString === reversedNumAsString){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123,323,421,121])
console.log('--------------------------');
palindromeIntegers([32,2,232,1010])