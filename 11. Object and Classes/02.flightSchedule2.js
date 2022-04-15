function flightSchedule(array) {

    let list = {};
    let allFlights = array.shift();
    let currentFlightsState = array.shift();
    let state = array.shift()[0];

    for (let line of allFlights) {
        line = line.split(' ');
        list[line[0]] = {};
        list[line[0]].destination = line[1];
        list[line[0]].status = 'Ready to fly';
    }
    for (let item of currentFlightsState) {
        item = item.split(' ');
        if (list[item[0]]) {
            list[item[0]].status = item[1];
        }
    }
    let pairs = Object.values(list).filter(x => Object.values(x)[1] === state);
    for (let obj of pairs) {
      let item = Object.values(obj);
      let output = `{ Destination: '${item[0]}', Status: '${item[1]}' }`
      console.log(output);
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
)