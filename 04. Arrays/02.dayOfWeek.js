function dayOfWeek(input) {

    let daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if(input >= 1 && input <=7 ){
        console.log(daysOfWeek[input - 1]);
    } else {
        console.log('Invalid day!');
    }

}
dayOfWeek(8)