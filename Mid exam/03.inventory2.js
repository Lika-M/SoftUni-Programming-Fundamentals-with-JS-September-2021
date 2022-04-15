function inventory(array) {

    let collectingItems = array.shift().split(', ');
    let i = 0;
    let line = array[i];
    while (line !== "Craft!") {
        let splited = line.split(' - ')
        let [command, item] = splited;
        let index = collectingItems.indexOf(item);
        switch (command) {
            case 'Collect':
                if (index === - 1) {
                    collectingItems.push(item);
                } break;
            case 'Drop':
                if (index !== - 1) {
                    collectingItems.splice(index, 1);
                } break;
            case 'Combine Items':
                let split = item.split(':');
                index = collectingItems.indexOf(split[0]);
                if (index !== - 1) {
                    collectingItems.splice(index + 1, 0, split[1]);
                } break;
            case 'Renew':
                if (index !== - 1) {
                    let deleted = collectingItems.splice(index, 1);
                    collectingItems.push(deleted);
                } break;
        }
        i++;
        line = array[i];
    }
    console.log(collectingItems.join(', '));

}

inventory(['Iron, Wood, Sword',
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