function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let i = 0;
    let line = input[i]
    let moves = 0;
    let isLost = true;

    while (line !== 'end') {
        let pairs = line.split(' ');
        let first = Number(pairs[0]);
        let second = Number(pairs[1]);
        let middle = sequence.length / 2;
        moves++;

        if (first === second
            || (first < 0 || first > sequence.length - 1)
            || (second < 0 || second > sequence.length - 1)) {

            let elToAdd = `-${moves}a`;
            sequence.splice(middle, 0, elToAdd, elToAdd);
            console.log("Invalid input! Adding additional elements to the board");
        } else {

            if (sequence[first] === sequence[second]) {
                console.log(`Congrats! You have found matching elements - ${sequence[first]}!`);
                
                if(second > first){
                    sequence.splice(second, 1);
                    sequence.splice(first, 1);
                } else {
                    sequence.splice(first, 1);
                    sequence.splice(second, 1);
                }
            } else {
                console.log("Try again!");
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            isLost = false;
            break;
        }

        i++;
        line = input[i]
    }
    if (isLost) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
// memoryGame([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])

// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])
