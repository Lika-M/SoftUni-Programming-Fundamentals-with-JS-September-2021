function shootForTheWin2(arr) {
 
    let targets = arr.shift().split(" ");
    let targetLength = targets.length;
    let arrLength = arr.length;
    let shots = 0;
 
    for (let i = 0; i < arrLength; i++) {
        let command = arr[i];
        if (command === "End") {
            break;
        } else {
            command = Number(arr[i]);
            if (command >= targetLength || command < 0) {
                continue;
            } else {
 
                let currentTarget = Number(targets[command]);
 
                if (currentTarget === -1) {
                    continue;
                } else {
                    targets[command] = -1;
                    shots++;
                    for (let r = 0; r < targetLength; r++) {
                        let currentNumber = Number(targets[r]);
                        if (currentNumber !== -1) {
                            if (currentTarget < currentNumber) {
                                currentNumber -= currentTarget;
                                targets[r] = currentNumber;
                            } else if (currentTarget >= currentNumber) {
                                currentNumber += currentTarget;
                                targets[r] = currentNumber;
                            }
                        }
                    }
                }
            }
        }
    }
    let result = targets.join(" ")
    console.log(`Shot targets: ${shots} -> ${result}`)
}
shootForTheWin2(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])

    shootForTheWin2(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])