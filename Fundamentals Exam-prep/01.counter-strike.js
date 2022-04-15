function counterStrike(input) {
    let energy = input.shift();
    let i = 0;
    let income = input[i];
    let won = 0;
    let isLoose = false;

    while (income !== 'End of battle') {
        let distance = Number(income);
        if (energy >= distance) {
            energy -= distance;
            won++
            if (won % 3 === 0) {
                energy += won;
            }
        } else {
            isLoose = true;
            break;
        }

        i++;
        income = input[i];
    }
    if (isLoose) {
        console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${won}. Energy left: ${energy}`);
    }

}
// counterStrike((["200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"])
// )
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)