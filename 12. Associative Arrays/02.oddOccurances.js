function oddOccurances(string) {
    let input = string.toLowerCase(string);
    let array = input.split(' ');
  
    let map = new Map;

    for (word of array) {

        if (!map.has(word)) {
            map.set(word, 0);
        }
        let oldOccur = map.get(word);
        map.set(word, oldOccur += 1);
    }

    let filteredMapAsArr = Array.from(map.keys()).filter(x => map.get(x) % 2 !== 0);
    // console.table(filteredMapAsArr)
    console.log(filteredMapAsArr.join(' '));
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')