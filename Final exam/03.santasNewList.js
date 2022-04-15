
function santasNewList(input) {

    let list = {};
    let presents = {};

    let line = input.shift()
    while (line !== 'END') {
        let [name, present, count] = line.split('->');
        if (name !== 'Remove') {
              
            if (!list[name]) {
                list[name] = Number(count);
                if (!presents[present]) {
                    presents[present] = Number(count);
                } else {
                    presents[present] += Number(count);
                }
                
            } else {
                list[name] += Number(count);
                if (!presents[present]) {
                    presents[present] = Number(count);
                } else {
                    presents[present] += Number(count);
                }
            }

        } else {
            let name = present;
            delete list[name];
        }

        line = input.shift();
    }

    console.log('Children:');
    let sortByChildren = Object.entries(list)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(el => console.log(`${el[0]} -> ${el[1]}`));

    console.log('Presents:');
    Object.entries(presents).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
    
}

santasNewList([
    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END',
])
console.log('-'.repeat(20));
santasNewList([
    'Teddy->Clothes->8',
'Johny->Toys->10',
'Freddie->Candy->30',
'Johny->Candy->20',
'Carrie->Phone->1',
'Carrie->Tablet->1',
'Carrie->Candy->10',
'Teddy->Toys->5',
'Remove->Teddy',
'END'
])