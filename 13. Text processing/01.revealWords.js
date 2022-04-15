function revealWords(stringOfWords, mainString) {

    for (let word of stringOfWords.split(', ')) {

        let lengthOfWord = word.length;
        let textAsArr = mainString.split(' ');
        for (let item of textAsArr) {
            if (item.includes('*')) {
                let length = item.length;
                if (length === lengthOfWord) {
                    mainString = mainString.replace(item, word);
                }
            }
        }
    }
    console.log(mainString);
}

// revealWords('great',
//     'softuni is ***** place for learning new programming languages'
// )
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)