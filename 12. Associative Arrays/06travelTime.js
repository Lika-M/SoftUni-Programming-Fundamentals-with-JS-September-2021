function travelTime(input) {

    let travellingOrder = {};
    for (line of input) {
        line = line.split(' > ');
        let country = line[0];
        let town = line[1];
        let travelCost = Number(line[2]);

        if (!travellingOrder.hasOwnProperty(country)) {
            travellingOrder[country] = {};
        }
        if (!travellingOrder[country].hasOwnProperty(town)) {
            travellingOrder[country][town] = travelCost;
        } else {
            if(travelCost < travellingOrder[country][town]){
                travellingOrder[country][town] = travelCost;
            }
        }
    }
    let sortedCountries = Object.entries(travellingOrder)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(let entries of sortedCountries){
        let output = `${entries[0]} ->`;

        let townEntries = Object.entries(entries[1]);
        let sortedTowns = townEntries.sort((a, b) => (a[1]) - b[1]);
        
        for(let townEntry of sortedTowns){
            output += ` ${townEntry[0]} -> ${townEntry[1]}`
        }
        console.log(output);
    }
}


travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)