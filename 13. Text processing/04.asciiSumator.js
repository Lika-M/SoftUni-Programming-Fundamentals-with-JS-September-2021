function asciiSumator(array) {
    let firstSymbol = array.shift().charCodeAt();
    let secondSymbol = array.shift().charCodeAt();
    let string = array.shift();
    let start = Math.min(firstSymbol, secondSymbol);
    let end = Math.max(firstSymbol, secondSymbol);

    let sum = 0;
    for (let char of string) {
        let num = char.charCodeAt()
        if (num > start && num < end) {
            sum += num;
        }
    }
    console.log(sum);

}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5'])
asciiSumator(['?',
    'E',
    '@ABCEF']
)
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)