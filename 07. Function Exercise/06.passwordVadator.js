function passwordValidator(password) {

    function isLengthExact(string) {

        let length = string.length;
        if (length >= 6 && length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isSymbolsExact(string) {
        for (const symbol of string) {
            let symbolAsNumber = symbol.charCodeAt();
            if (!(symbolAsNumber >= 48 && symbolAsNumber <= 57) &&
                !(symbolAsNumber >= 65 && symbolAsNumber <= 90) &&
                !(symbolAsNumber >= 97 && symbolAsNumber <= 122)
            ) {
                return false;
            }
        }
        return true;
    }

    function isDigitsExact(string) {
        let counter = 0
        for (const symbol of string) {
            let symbolAsNumber = symbol.charCodeAt();

            if (symbolAsNumber >= 48 && symbolAsNumber <= 57) {
                counter++;
            }
        }
        return counter >= 2;
        //  this is the same as:
        // if(counter >= 2){
        //     return true;
        // } else {
        //     return false;
        // }
    }

    let isLengthValid = isLengthExact(password);
    let isSymbolsValid = isSymbolsExact(password);
    let areDigitsEnough = isDigitsExact(password);

    if (isLengthValid && isSymbolsValid && areDigitsEnough) {
        console.log('Password is valid');
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isSymbolsValid) {
        console.log("Password must consist only of letters and digits");
    }
    if (!areDigitsEnough) {
        console.log("Password must have at least 2 digits");
    }
}
// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')