function needForSpeed(input) {

  let n = input.shift();
  let cars = input.slice(0, n);
  let arr = input.slice(n);

  let list = {};
  for (let item of cars) {
    let [car, distance, fuel] = item.split('|');
    distance = Number(distance);
    fuel = Number(fuel);
    list[car] = { km: distance, l: fuel }
  }

  let line = arr.shift();
  while (line !== 'Stop') {

    let [command, ...other] = line.split(' : ');
    if (command === 'Drive') {
      let [car, distance, fuel] = other;
      distance = Number(distance);
      fuel = Number(fuel);

      if (list[car].l >= fuel) {
        list[car].l -= fuel;
        list[car].km += distance
        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
      } else {
        console.log("Not enough fuel to make that ride");
      }
      if (list[car].km > 100000) {
        delete list[car];
        console.log(`Time to sell the ${car}!`);
      }

    } else if (command === 'Refuel') {
      let [car, fuel] = other;
      fuel = Number(fuel);
      if (list[car].l + fuel >= 75) {
        fuel = 75 - list[car].l;
        list[car].l = 75;
      } else {
        list[car].l += fuel;
      }
      console.log(`${car} refueled with ${fuel} liters`);

    } else if (command == 'Revert') {
      let [car, amount] = other;
      list[car].km -= amount;
      if (list[car].km < 10000) {
        list[car].km = 10000
      } else {
        console.log(`${car} mileage decreased by ${amount} kilometers`);
      }
    }
    line = arr.shift();
  }

  let sortedCars = Object.entries(list)
    .sort((a, b) => b[1].km - a[1].km || a[0].localeCompare(b[0]));
  for (let car of sortedCars) {
    console.log(`${car[0]} -> Mileage: ${car[1].km} kms, Fuel in the tank: ${car[1].l} lt.`);
  }

}


needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]
)
// needForSpeed([
//   '4',
//   'Lamborghini Veneno|11111|74',
//   'Bugatti Veyron|12345|67',
//   'Koenigsegg CCXR|67890|12',
//   'Aston Martin Valkryie|99900|50',
//   'Drive : Koenigsegg CCXR : 382 : 82',
//   'Drive : Aston Martin Valkryie : 99 : 23',
//   'Drive : Aston Martin Valkryie : 2 : 1',
//   'Refuel : Lamborghini Veneno : 40',
//   'Revert : Bugatti Veyron : 2000',
//   'Stop'
// ])