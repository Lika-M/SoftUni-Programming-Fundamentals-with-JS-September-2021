function manOwar(array) {

    let piratShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());
    let damage = 0;
    let repare = 0;
    let isStalemate = true;

    let i = 0;
    let income = array[i];

    while (income !== "Retire") {
        let line = income.split(' ');
        let command = line[0];
        switch (command) {
            case 'Fire':
                let index = Number(line[1]);
                damage = Number(line[2]);
                if (index >= 0 && index < warShip.length) {
                    warShip.splice(index, 1, warShip[index] - damage);
                }
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    isStalemate = false;
                    break;
                }
                break;
            case 'Defend':
                let start = Number(line[1]);
                let end = Number(line[2]);
                damage = Number(line[3]);
                if (start >= 0 && end < piratShip.length) {
                    let damaged = piratShip.slice(start, end + 1).map(a => a - damage);
                    piratShip.splice(start, (end + 1) - start, ...damaged);
                }
                let filtered2 = piratShip.filter(a => a <= 0);
                if (filtered2.length > 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    isStalemate = false;
                    break;
                }
                break;
            case 'Repair':
                let index2 = Number(line[1]);
                repare = Number(line[2]);
                if (index2 >= 0 && index2 < piratShip.length) {
                    piratShip.splice(index2, 1, piratShip[index2] + repare);
                }
                if (piratShip[index2] > maxHealth)
                    piratShip[index2] = maxHealth;
                break;
            case 'Status':
                let lower = maxHealth * 0.2;
                let filtered = piratShip.filter(a => a < lower);
                let countToRepare = filtered.length;
                console.log(`${countToRepare} sections need repair.`);
                break;
        }
        i++;
        income = array[i]
    }
    let pirateShipSum = piratShip.reduce((sum, a) => sum + a);
    let warshipSum = warShip.reduce((sum, a) => sum + a);

    if (isStalemate) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}
manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])

manOwar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])


