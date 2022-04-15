function stringSubstring(str1, str2) {
    let wordToCompare = str1.toLowerCase();
    let sentenceToCompare = str2.toLowerCase().split((' '));
    let isFound = false;
    for (let element of sentenceToCompare) {
        if (element === wordToCompare) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        console.log(wordToCompare);
    } else {
        console.log(`${wordToCompare} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)
stringSubstring('python',
'JavaScript is the best programming language'
)