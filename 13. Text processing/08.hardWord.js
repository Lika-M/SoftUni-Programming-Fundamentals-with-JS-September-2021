function hardWord(input) {
    let missedWords = input.pop();

    let letter = input[0].split(' ');
    let redacted = [];

    for (let word of letter) {

        if (!word.includes('_')) {
            redacted.push(word);

        } else {
            for (let item of missedWords) {
                let find = '_'.repeat(item.length);
            
                if (word[word.length - 1] === '.' ){
                    find +='.'
                    item += '.';
                }
                  
                if(word[word.length - 1] === ',') {
                   find += ','
                   item += ',';
                }

                if (find === word) {
                    redacted.push(item);
                }
            }
        }
    }
    console.log(redacted.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]


)