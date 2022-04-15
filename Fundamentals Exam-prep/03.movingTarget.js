function movingTarget(array) {
    let numbers = array.shift().split(' ').map(Number);
    let i = 0;
    let income = array[i];

    while (income !== 'End') {
        let line = income.split(' ');
        let command = line[0];
        let index = Number(line[1]);
        let value = Number(line[2]);

        if (command === 'Shoot') {
            let num = numbers[index];

            if (index >= 0 && index <= numbers.length - 1) {
                numbers.splice(index, 1, num - value);
            }
            if (numbers[index] <= 0) {
                numbers.splice(index, 1);
            }
        } else if (command === 'Add') {
            if (index >= 0 && index <= numbers.length - 1) {
                numbers.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command == 'Strike') {
          
            let rightIndex = index + value;
            let leftIndex = index - value;
            if ((index >= 0 && index <= numbers.length - 1) && leftIndex >= 0 && rightIndex <= numbers.length - 1) {
                numbers.splice(leftIndex, value * 2 + 1);
            } else {
                console.log("Strike missed!");
            }
        }
        i++;
        income = array[i];
    }
    console.log(numbers.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])


// movingTarget(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])

