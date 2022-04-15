function trainFunction(array) {

    let train = array.shift().split(" ").map(Number);
    let capacity = Number(array.shift());

    for (const line of array) {
        let command = line.split(' ')
        if (command[0] === "Add") {
            train.push(Number(command[1]))
        } else {
            let people = Number(command[0]);
            for (let i = 0; i < train.length; i++) {
                
                if (train[i] + people <= capacity) {
                    train[i] += people;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));

}
// 72 54 21 12 4 75 23 10 0
trainFunction(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
    trainFunction(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])
    