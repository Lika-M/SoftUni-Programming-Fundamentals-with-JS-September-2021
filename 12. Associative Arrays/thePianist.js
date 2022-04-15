function thePianist(array) {
    let n = array.shift();
    let given = array.slice(0, n);
    let commands = array.slice(n);

    let list = {};
    for (let line of given) {
        let [piece, autor, key] = line.split('|');
        list[piece] = {};
        list[piece][autor] = key;
    }

    for (let line of commands) {
        if (line === 'Stop') {
            break;
        }
        line = line.split('|');
        let command = line[0]
        let piece = line[1];

        if (command === 'Add') {
            let autor = line[2];
            let key = line[3]
            if (list.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                list[piece] = {}
                list[piece][autor] = key;
                console.log(`${piece} by ${autor} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (list.hasOwnProperty(piece)) {
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let newKey = line[2]
            if (list.hasOwnProperty(piece)) {
                // за да се презапише автора!
                let temp = list[piece];
                let autor = Object.keys(temp);
                list[piece][autor] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    let sortedByName = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (let entries of sortedByName) {
        
        let [piece, objArr] = entries;
        let output = `${piece} -> `;
        let sortedByAutor = Object.entries(objArr).sort((a, b) => a[0].localeCompare(b[0]));

        for (let entries of sortedByAutor) {
            output += `Composer: ${entries[0]}, Key: ${entries[1]}`
        }

        console.log(output);
    }
}


thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])