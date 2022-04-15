function hauseParty(input) {

    let list = [];
    for (const line of input) {
        let command = line.split(' ')
        let name = command[0];

        if (command[2] !== 'not') {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));

}
// hauseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'])
hauseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
