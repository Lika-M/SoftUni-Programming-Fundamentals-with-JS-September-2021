function vacation(num, type, day) {

    let peopleInGroup = Number(num);
    let typeOfGrop = type;
    let dayOfWeek = day;
    let priceForPerson = 0;
    let groupPrice = 0;

    /* 	Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	      15	20	   22.50
*/
    switch (typeOfGrop) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday": priceForPerson = 8.45; break;
                case "Saturday": priceForPerson = 9.80; break;
                case "Sunday": priceForPerson = 10.46; break;
            } 
            groupPrice = peopleInGroup * priceForPerson;
            if (peopleInGroup >= 30) {
                groupPrice *= 0.85;
            } break;
        case "Business":
            switch (dayOfWeek) {
                case "Friday": priceForPerson = 10.90; break;
                case "Saturday": priceForPerson = 15.60; break;
                case "Sunday": priceForPerson = 16; break;
            }
            groupPrice = peopleInGroup * priceForPerson;
            if (peopleInGroup >= 100) {
                groupPrice = (peopleInGroup - 10) * priceForPerson;
            } break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday": priceForPerson = 15; break;
                case "Saturday": priceForPerson = 20; break;
                case "Sunday": priceForPerson = 22.50; break;
            }
            groupPrice = peopleInGroup * priceForPerson;
            if (peopleInGroup >= 10 && peopleInGroup <= 20) {
                groupPrice *= 0.95;
            } break;

    }

    console.log(`Total price: ${groupPrice.toFixed(2)}`);

}

vacation(40,
    "Regular",
    "Saturday"
)