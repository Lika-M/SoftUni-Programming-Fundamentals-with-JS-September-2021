function mirrorWords(input) {
    let pattern = /([#@])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let result = pattern.exec(input);
    let count = 0;
    let isFound = false;
    let arr = [];
    while (result !== null) {
        count++;
        let firstWord = result.groups.word1;
        let secondWord = result.groups.word2;
        let reversSecond = secondWord.split('').reverse().join('');
        if (firstWord === reversSecond) {
            isFound = true;
            let output = `${firstWord} <=> ${secondWord}`
            arr.push(output);
        }
        result = pattern.exec(input);
    }

    if(count > 0){
        console.log(`${count} word pairs found!`);
        if(isFound){   
            console.log(`The mirror words are:`);
            console.log(arr.join(', '));
        } else {
            console. log('No mirror words!');
        }
    } else {
        console.log('No word pairs found!');
        console. log('No mirror words!');
    } 
    


}

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])