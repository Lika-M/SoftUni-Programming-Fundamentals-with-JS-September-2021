// not submitted in judje !

function feedTheEnimals(input) {

    let list = {};
    let hungryAnimlas = {};
    let line = input.shift();

    while (line !== 'Last Info') {
        let [command, animal, num, area] = line.split(':');
        if (command === 'Add') {
            let limit = Number(num);
            if (!list[animal]) {
                list[animal] = { limit: limit, area: area }
                if (!hungryAnimlas[area]) {
                    hungryAnimlas[area] = 0;
                }
                hungryAnimlas[area] += 1
            } else {
                list[animal].limit += limit;
            }

        } else if (command === 'Feed') {
            let food = Number(num);
            if (list[animal]) {
                list[animal].limit -= food;
                if (list[animal].limit <= 0) {
                    console.log(`${animal} was successfully fed`);
                    delete list[animal];
                    hungryAnimlas[area] -= 1;
                }
            }
        }
        line = input.shift()
    }

    let sortedBylimit = Object.entries(list)
        .sort((a, b) => b[1].limit - a[1].limit || a[0].localeCompare(b[0]));

    if (sortedBylimit.length) {
        console.log('Animals:');
        sortedBylimit.forEach(el => console.log(`${el[0]} -> ${el[1].limit}g`));
    }

    let sortedHungryAnimals = Object.entries(hungryAnimlas)
        .filter(x => x[1] !== 0)
        .sort((a, b) => b[1] - a[1]);

    if (sortedHungryAnimals.length > 0) {
        console.log('Areas with hungry animals:');
        sortedHungryAnimals.forEach(el =>  console.log(`${el[0]}: ${el[1]}`));
    }

}


feedTheEnimals([

    'Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info'
])