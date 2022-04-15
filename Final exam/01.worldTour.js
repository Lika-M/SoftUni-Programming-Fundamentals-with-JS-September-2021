function worldTour(input) {

    //  83/100 Run time - oправено! 100/100
    // Проблем с while loop, защото newStr съдържа oldStr

    let tour = input.shift()
    let line = input.shift();

    while (line !== "Travel") {
        let [command, ...rest] = line.split(':');

        if (command === 'Add Stop') {
            let [index, str] = rest;
            index = Number(index);
            if (index >= 0 && index < tour.length) {
                let tourAsArr = tour.split('');
                tourAsArr.splice(index, 0, str);
                tour = tourAsArr.join('');
            }

        } else if (command === 'Remove Stop') {

            let [firstIndex, lastIndex] = rest;
            firstIndex = Number(firstIndex);
            lastIndex = Number(lastIndex);

            if (firstIndex >= 0 && firstIndex < tour.length &&
                lastIndex >= 0 && lastIndex < tour.length) {
                let tourAsArr = tour.split('');
                let deletedNums = Math.abs(lastIndex + 1 - firstIndex);
                tourAsArr.splice(firstIndex, deletedNums);
                tour = tourAsArr.join('');
            }

        } else if (command === 'Switch') {
            let [oldStr, newStr] = rest;

            if (oldStr !== newStr) {
                while(tour.includes(oldStr)){
                  tour = tour.replace(oldStr, newStr);  
                }
               
            }
        }

        console.log(tour);

        line = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);

}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

