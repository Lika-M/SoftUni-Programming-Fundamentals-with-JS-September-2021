function replaceRepeatingChars(string) {

        let searchStr = string[0];
        for (let i = 1; i < string.length; i++) {
            if (string[i] === string[i - 1]) {
                continue;
            } else {
                searchStr += string[i]
            }
        }
        console.log(searchStr);

    }
 

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');