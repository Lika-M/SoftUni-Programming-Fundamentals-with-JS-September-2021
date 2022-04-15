function heartDelivery(array) {

    let heartNumbers = array.shift().split('@').map(Number);
    let i = 0;
    let line = array[i];
    let index = 0;

    while (line !== 'Love!') {
        let split = line.split(' ');
        let step = Number(split[1]);
        index += step;
        if (index > heartNumbers.length - 1) {
            index = 0;
        }
        if (heartNumbers[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            heartNumbers[index] -= 2;
            if (heartNumbers[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        i++;
        line = array[i];
    }

    let filtered = heartNumbers.filter(x => x > 0);

    console.log(`Cupid's last position was ${index}.`);
    if (filtered.length === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${filtered.length} places.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])

// heartDelivery(["2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love! "])
