function shootForTheWin(array) {

    let target = array.shift().split(' ').map(Number);
    let i = 0;
    let income = array[i];
    count = 0;

    while (income !== 'End') {
        let index = Number(income);

        if (index >= 0 && index < target.length) {
            let currentDigit = target[index];
            if (currentDigit !== - 1) {
                count++;
                for (let i = 0; i < target.length; i++) {

                    if (target[i] > currentDigit) {
                        target[i] -= currentDigit;
                    } else if (target[i] <= currentDigit && target[i] !== -1) {
                        target[i] += currentDigit;
                    }
                }
                target.splice(index, 1, -1);
            }
        }
        i++;
        income = array[i];
    }
    console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
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

