function arrayModifier(array) {

    let numbers = array.shift().split(' ').map(Number);
    let i = 0;
    let commands = array[i];

    while (commands !== 'end') {
        let line = commands.split(' ');
        let index1 = Number(line[1]);
        let index2 = Number(line[2]);

        if (line[0] === 'swap') {
            let first = numbers[index1];
            let second = numbers[index2];
            numbers.splice(index1, 1, second);
            numbers.splice(index2, 1, first);
            
        } else if (line[0] === 'multiply') {
            
            let first = numbers[index1];
            let second = numbers[index2];
            let multiplyNum = first * second;
            numbers.splice(index1, 1, multiplyNum)

        } else if (line[0] === 'decrease') {
            let modified = numbers.map((x) => (x - 1));
            numbers = modified;
        }

        i++;
        commands = array[i]
    }
    console.log(numbers.join(', '));

}


arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ])