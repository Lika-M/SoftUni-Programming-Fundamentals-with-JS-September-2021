function plantDiscovery(input) {

    let list = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        if (input[i] === "Exhibition") {
            break;
        }
        let [plant, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        list[plant] = { rarity, rating: [] }
    }
    let commandLine = input.slice(n);

    for (let line of commandLine) {
        if (line === "Exhibition") {
            break;
        }
        let [command, ...rest] = line.split(': ');
        let [plantName, item] = rest[0].split(' - ');
        item = Number(item);

        if (list.hasOwnProperty(plantName)) {
             if (command === 'Rate') {
                list[plantName].rating.push(item);
            } else if (command === 'Update') {
                list[plantName]['rarity'] = item;
            } else if (command === 'Reset') {
                list[plantName]['rating'] = [];
            } else {
                console.log('error');
            }
        } else {
            console.log('error');
        }
    }
    
    for (let element of Object.entries(list)) {
        if(element[1].rating.length !== 0){
            let averageRating = element[1].rating.reduce((x, y) => x + y) / element[1].rating.length;
            element[1]['averageRating'] = averageRating;
        } else {
            element[1].averageRating = 0;
        }
    }
    
    let sortedList = Object.entries(list).sort((a, b) => b[1].rarity - a[1].rarity ||
    b[1].averageRating - a[1].averageRating);
    
    console.log('Plants for the exhibition:');
    for (line of sortedList) {
        let rating = line[1].averageRating;
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${rating.toFixed(2)}`);
    }


}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])




