function garage(input) {

    let list = {};
    for (let line of input) {
        let [garageNum, carInfo] = line.split(' - ');
        garageNum = Number(garageNum);
        carInfo = carInfo.split(', ');

        if (!list[garageNum]) {
            list[garageNum] = [];
        }
        if (!list[garageNum].includes(carInfo)) {
            list[garageNum].push(carInfo);
        }
    }
    let current = Object.entries(list)
    for (let item of current) {
        console.log(`Garage № ${item[0]}`);
        let car = item[1];
        for (let i = 0; i < car.length; i++) {
            let carInfo = car[i].join(', ').split(': ').join(' - ') 
            console.log(`--- ${carInfo}`);
        }
    }
}


garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])