function wordsTracker(array) {
    let words = array.shift().split(' ');

    let wordscount = {};
    for (let word of words) {
        wordscount[word] = 0;
    }

    for (let nextWord of array) {
        if (wordscount.hasOwnProperty(nextWord)) {
            wordscount[nextWord] += 1;
        }
    }

    let entries = Object.entries(wordscount);
    let sortedPairs = entries.sort((a, b) => b[1] - a[1]);
    // console.table(sortedPairs); Ooo! table?

    for(let pair of sortedPairs){
        console.log(`${pair[0]} - ${pair[1]}`);
    }

}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)