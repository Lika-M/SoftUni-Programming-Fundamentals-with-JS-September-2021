function result(input) {

    let array = input;

    let isPalindrome = (num) => {
        let startNum = num;
        let reversed = Number(num.toString().join('').split('').reverse().join(''))
        if (startNum === reversed) {
            return 'true';
        } else {
            return 'false';
        }
        console.log(num);
    }
    for (const currentNum of array) {
        console.log(isPalindrome(currentNum));
    }

}
isPalindrome([123,323,421,121])