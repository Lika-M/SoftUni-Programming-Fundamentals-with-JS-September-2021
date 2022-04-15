function matchPhoneNumber(string) {
    let list = [];
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNum = pattern.exec(string);

    while (validNum !== null) {
        let num = validNum[0];
        list.push(num);

        validNum = pattern.exec(string);
    }
    console.log(list.join(', '));


}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")