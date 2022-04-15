function race(input) {
    let race = {};
    let list = input.shift().split(', ');
    let namePttern = /[A-Za-z]/g
    let distancePattern = /[0-9]/g;

    let line = input.shift();
    while (line !== 'end of race') {

        let name = line.match(namePttern).join('');
        let distance = line.match(distancePattern).map(Number).reduce((a, b) => a + b, 0);
        if (list.includes(name)) {
            if (!race[name])
                race[name] = distance;
            else {
                race[name] += distance
            }
        }
        line = input.shift();
    }

    let sortedRace = Object.entries(race).sort((a, b) => b[1] - a[1]);
    let winners = sortedRace.slice(0, 3);
    if (winners[0]) {
        console.log(`1st place: ${winners[0][0]}`);
    }
    if (winners[1]) {
        console.log(`2nd place: ${winners[1][0]}`);
    }
    if (winners[2]) {
        console.log(`3rd place: ${winners[2][0]}`);
    }

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)