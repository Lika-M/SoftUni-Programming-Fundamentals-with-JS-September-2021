function wordOccurrances(array) {
    let map = new Map;
    for (let word of array) {

        if (!map.has(word)) {
            map.set(word, 0)
        }
        let counter = map.get(word);
        counter.push(1);
    }

    let arrayMap = [...map];
    let sortedMap = arrayMap.sort((a, b) => compare(a[1], b[1]));

    function compare(arrA, arrB) {
        let sumA = arrA.reduce((sum, a) => sum + a);
        let sumB = arrB.reduce((sum, a) => sum + a);
        return sumB - sumA;
    }

    for (let [word, count] of sortedMap) {
        let times = count.reduce((sum, a) => sum + a);
        console.log(`${word} -> ${times} times`);
    }
}

wordOccurrances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])