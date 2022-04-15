function piccolo(array) {

    let cars = {};

    for (let line of array) {

        let [command, carNumber] = line.split(', ');

        if (command === 'IN') {
            cars[carNumber] = 1;

        } else if (command === 'OUT') {
            cars[carNumber] = 0;
        }
    }

    let parkingCar = Object.entries(cars)
        .filter(x => x[1] === 1)
        .sort((a, b) => a[0].localeCompare(b[0]))

    
    for (let [numbers, ifExist] of parkingCar) {
        console.log(numbers);
    }

}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']

)