function maxSequence(array) {
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequence = [array[i]]
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentSequence.push(array[j])
            } else {
                break;
            }
        }
        if(maxSequence.length < currentSequence.length){
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])