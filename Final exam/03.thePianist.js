function thePianist(input) {

    let list = {};
    let n = input.shift();
    
    for (let i = 0; i < n; i++) {
        let [name, autor, key] = input[i].split('|');
        list[name] = { composer: autor, key: key };
    }

    let commands = input.slice(n)
    let line = commands.shift();
    while (line !== 'Stop') {
        let [command, ...rest] = line.split('|');

        if (command === 'Add') {
            let [name, autor, key] = rest;
            if (!list[name]) {
                list[name] = { composer: autor, key: key };
                console.log(`${name} by ${autor} in ${key} added to the collection!`);
            } else {
                console.log(`${name} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            let name = rest;
            if (list[name]) {
                console.log(`Successfully removed ${name}!`);
                delete list[name];
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let [name, key] = rest;
            if (list[name]) {
                list[name].key = key;
                console.log(`Changed the key of ${name} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
        line = commands.shift();
    }
    let sort = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer));

    for (let item of sort) {
        let output = `${item[0]} -> Composer: ${item[1].composer}, Key: ${item[1].key}`
        console.log(output);
    }
}


thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)
console.log('');
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
]

)