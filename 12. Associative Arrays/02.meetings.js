function meetings(input) {

    let shedule = {};
    for (const line of input) {
        let [weekDay, name] = line.split(' ');
        
        if (shedule[weekDay]) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            shedule[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (const key in shedule) {
        console.log(`${key} -> ${shedule[key]}`);
    }

}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']

)