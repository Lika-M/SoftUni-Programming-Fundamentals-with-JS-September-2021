function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');

    for (const element of input) {
        let line = element.split(' ');
        let command = line[0];
        let item = line[1];

        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1)
            }
        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let deleted = inventory.splice(index, 1).join()
                inventory.push(deleted)
            }
        } else if (command === 'Upgrade') {
            item = item.split('-');
            if (inventory.includes(item[0])) {
                let index = inventory.indexOf(item[0]);
                item = item.join(':')
                inventory.splice(index + 1, 0, item)
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory
    (['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
    )
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])