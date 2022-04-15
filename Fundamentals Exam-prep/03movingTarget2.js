function movingTarget(arr) {

    let targets = arr.shift().split(" ").map(Number);
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let command = arr[i];
        let splited = command.split(" ");
        let action = splited[0];
        let index = Number(splited[1]);
        let value = Number(splited[2]);

        if (action === "End") {
            let result = targets.join("|");
            console.log(result);
            break;
        } else if (action === "Shoot") {
            if (doExists(index)) {
                targets[index] = targets[index] - value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (action === "Add") {
            if (doExists(index)) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!")
            }
        } else if (action === "Strike") {
            let beforeIndex = index - value;
            let afterIndex = index + value;
            if (beforeIndex < 0 || afterIndex >= targets.length) {
                console.log("Strike missed!");
            } else {
                for (let r = beforeIndex; r <= afterIndex; r++) {
                    targets[r] = 0;
                }
                let filtered = targets.filter((num) => num > 0,);
                targets = filtered;
            }
        }
    }

    function doExists(index) {
        if (index >= 0 && index < targets.length) {
            return true;
        }
    }

}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])

