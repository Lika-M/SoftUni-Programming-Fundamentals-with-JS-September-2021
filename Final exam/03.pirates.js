function pirates(input) {

    let list = {};
    let line = input.shift();

    while (line !== 'Sail') {
        line = line.split('||');
        let town = line[0]
        let population = Number(line[1]);
        let gold = Number(line[2]);

        if (!list[town]) {
            list[town] = { people: population, gold: gold }
        } else {
            list[town].people += population;
            list[town].gold += gold
        }

        line = input.shift();
    }

    line = input.shift();

    while (line !== 'End') {
        let [command, town, ...rest] = line.split('=>')//

        if (command === 'Plunder') {
            people = Number(rest[0]);
            gold = Number(rest[1]);
            list[town].people -= people;
            list[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (list[town].people <= 0 || list[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete list[town];
            } 

        } else if (command === 'Prosper') {
            let gold = Number(rest);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                list[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${list[town].gold} gold.`);
            }
        }
        line = input.shift();
    }

    let sorted = Object.entries(list).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
    let output = [];

    for (let item of sorted) {
       let result = `${item[0]} -> Population: ${item[1].people} citizens, Gold: ${item[1].gold} kg`;
        output.push(result)
    }
    if(output.length > 0){
        console.log(`Ahoy, Captain! There are ${output.length} wealthy settlements to go to:`);
        console.log(output.join('\n'));
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}

// pirates
//     (["Tortuga||345000||1250",
//         "Santo Domingo||240000||630",
//         "Havana||410000||1100",
//         "Sail",
//         "Plunder=>Tortuga=>75000=>380",
//         "Prosper=>Santo Domingo=>180",
//         "End"])
console.log((' '));
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

