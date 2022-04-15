function treasureHunt(array) {

    let initialLoot = array.shift().split('|');
    let i = 0;
    let line = array[i];
    let stolen = [];

    while (line !== "Yohoho!") {
        let token = array[i].split(' ');
        let command = token.shift();

        switch (command) {
            case 'Loot':
                for (let j = 0; j < token.length; j++) {
                    let precisious = token[j];
                    if (initialLoot.indexOf(precisious) === -1) {
                        initialLoot.unshift(precisious);
                    }
                } break;
            case 'Drop':
                let index = Number(token);
                if (index !== -1) {
                    let deleted = initialLoot.splice(index, 1);
                    initialLoot.push(...deleted);
                } break;
            case 'Steal':
                let count = Number(token);
                stolen = initialLoot.slice(-count);
                initialLoot.splice(-count);
                console.log(stolen.join(', '));
                break;
        }
        i++;
        line = array[i];
    }

    if (initialLoot.length > 0) {
        let num = initialLoot.map(a => a.length);
        let average = num.reduce((sum, a) => sum + a) / initialLoot.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }

}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

