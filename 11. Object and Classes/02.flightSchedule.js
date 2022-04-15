function flightSchedule(input) {

    let arr = [];
    let currentFlights = input.shift();
    let currentStatus = input.shift();

    for (let line of currentFlights) {
        let splited = line.split(' ')
        let [number, destination] = line.split(' ');
        flight = {};
        flight[number] = {};
        flight[number].destination = destination;
        for (let line of currentStatus) {
            let [num, state] = line.split(' ');
            if (num === number) {
                flight[number].status = state;
                break;
            } else {
                flight[number].status = 'Ready to fly';
            }
        }

        arr.push(flight);
    }
    let status = input[0].shift();
   
    for (let obj of arr) {
      let number = Object.keys(obj);
      let destination = obj[number].destination;
      let state = obj[number].status;
      if(state === status){
          console.log(`{ Destination: '${destination}', Status: '${status}' }`);
      }
      
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


