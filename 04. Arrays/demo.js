function solve(input) {
    let target = input.shift().split(' ').map(Number);
    // console.log(target);

    let i = 0;
    let income = input[i];
    while (income !== 'End') {
        let line = income.split(' ');
        let command = line[0];
        let index = Number(line[1]);
        let number = Number(line[2]);
        let isValid = index >= 0 && index < target.length;

        switch (command) {

            case 'Shoot':
                let num = target[index]
                if (isValid) {
                    target.splice(index, 1, num - number);
                }
                if(target[index] <= 0){
                    target.splice(index, 1,);
                }
                break;
            case 'Add':
                if (isValid) {
                    target.splice(index, 0, number);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                let firstIndex = index - number;
                let endIndex = index + number;
                let numToDel = 2 * number + 1;
                if (isValid && firstIndex >= 0 && endIndex < target.length) {
                    target.splice(firstIndex, numToDel);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        i++;
        income = input[i]
    }
    console.log(target.join('|'));

}
solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

// solve(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])


