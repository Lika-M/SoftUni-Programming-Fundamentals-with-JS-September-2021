function arrayManipulator(numbers, string) {

    for (const line of string) {
        let command = line.split(' ');
        let toDo = command[0];
        
        if (toDo === 'add') {
            let index = Number(command[1]);
            let element = Number(command[2]);
            numbers.splice(index, 0, element);

        } else if (toDo === 'addMany') {
            let index = Number(command[1]);
            let arguments = command[2].split(' ');
            numbers.splice(index, 0, arguments);

        } else if (toDo === 'contains') {
            let element = Number(command[1]);
            if (numbers.includes(element)) {
                let index = numbers.indexOf(element)
                console.log(index);
            } else {
                console.log(`-1`);
            }
        } else if (toDo === 'remove') {
            let index = Number(command[1]);
            if(index >= 0 && index < numbers.length)
            numbers.splice(index, 1);

        } else if (toDo === 'shift') {
            let rotation = Number(command[1]);
            for (let i = 1; i <= rotation; i++) {
                let shifted = numbers.shift();
                numbers.push(shifted);
            }
        } else if (toDo === 'sumPairs') {
            let temp = [];
            for (let i = 0; i < numbers.length; i += 2) {
                if (numbers.length % 2 === 0) {
                    temp.push(Number(numbers[i]) + Number(numbers[i + 1]));
                } else {
                    numbers.push(0);
                    temp.push(Number(numbers[i]) + Number(numbers[i + 1]));
                }
            }
            numbers = [...temp];
        } else if (toDo === 'print') {
            break;
        }
    }
    console.log(`[ ${numbers.join(', ')} ]`);
}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
)

// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     )
// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']  
//     )
// -1
// [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]
