function inventory(array) {

    let collectingItems = array.shift().split(', ');
    let i = 0;
    let line = array[i];
    while (line !== "Craft!") {
        let splited = line.split(' - ')
        let [command, item] = splited;
        switch (command) {
            case 'Collect':
                if (!collectingItems.includes(item)) {
                    collectingItems.push(item);
                } break;
            case 'Drop':
                if (collectingItems.includes(item)) {
                    let index = collectingItems.indexOf(item);
                    collectingItems.splice(index, 1);
                } break;
            case 'Combine Items':
                let split = item.split(':');
                if (collectingItems.includes(split[0])) {
                    let index = collectingItems.indexOf(split[0]);
                    collectingItems.splice(index + 1, 0, split[1]);
                } break;
            case 'Renew':
                if (collectingItems.includes(item)) {
                    let index = collectingItems.indexOf(item);
                    let deleted = collectingItems.splice(index, 1);
                    collectingItems.push(deleted);
                } break;
        }
        i++;
        line = array[i];
    }
    console.log(collectingItems.join(', '));

}

inventory(['Gold, Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
])
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])