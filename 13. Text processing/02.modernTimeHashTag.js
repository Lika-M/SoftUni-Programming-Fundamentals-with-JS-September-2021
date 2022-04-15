function modernTime(string) {

    let strArr = string.split(' ');
    let wordsArr = [];

    for (let word of strArr) {
        isValid = false;
        if (word[0] === '#' && word.length > 1) {
            word = word.slice(1);

            for (let char of word) {
                let code = char.charCodeAt(0);
                if (( code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    isValid = true;
                } else {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                wordsArr.push(word);
            }
        }
    }
    wordsArr.forEach(x => console.log(x));

}

modernTime(' #special word in #socialMedia');