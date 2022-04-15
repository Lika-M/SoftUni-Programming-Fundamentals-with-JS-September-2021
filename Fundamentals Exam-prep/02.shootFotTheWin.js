function shootForTheWin(input) {
 
    let numbers = input.shift().split(' ').map(Number);
   
    let i = 0;
    let command = input[i];
    let count = 0;

    while (command !== 'End') {
        let index = Number(command);

        if (index >= 0 && index < numbers.length) {
            let num = numbers[index];
            if (num !== -1) {
                count++;
                numbers.splice(index, 1, -1);
                for (let j = 0; j < numbers.length; j++) {
                    let element = numbers[j];
                    if (element > num && element !== -1) {
                        element -= num;
                        numbers.splice(j, 1, element);// numbers[j] = element;
                    } else if (element <= num && element !== -1) {
                        element += num;
                        numbers.splice(j, 1, element);
                    }
                }
            }
            
        }
        i++;
        command = input[i];
    }
    console.log(`Shot targets: ${count} -> ${numbers.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])

    shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    
