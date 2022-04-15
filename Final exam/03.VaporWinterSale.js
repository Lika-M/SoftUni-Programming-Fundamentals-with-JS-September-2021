function vaporWinterSale(input) {
    // not submitted in judge!
    // input is given as a string!
    input = input.split(', ');
    let list = {};
    for (let line of input) {
        if (line.includes('-')) {
            let [game, price] = line.split('-');
            price = Number(price);
            if (!list[game]) {
                list[game] = { price: price, dlc: '0' }
            }

        } else if (line.includes(':')) {
            let [game, dlc] = line.split(':');
            if (list[game]) {
                list[game].dlc = dlc;
                list[game].price *= 1.2;
            }
        }
    }

    let gamesInfo = Object.values(list);
    for (let item of gamesInfo) {

        if (item.dlc === '0') {
            item.price *= 0.8;
        } else {
            item.price *= 0.5;
        }
    }
    let gameWithDls = Object.entries(list).filter(x => x[1].dlc !== '0');
    if (gameWithDls.length > 0) {
        sortedWithDls = gameWithDls.sort((a, b) => a[1].price - b[1].price);
        for (let game1 of sortedWithDls) {
            console.log(`${game1[0]} - ${game1[1].dlc} - ${game1[1].price.toFixed(2)}`);
        }
    }

    let gameWithoutDls = Object.entries(list).filter(x => x[1].dlc === '0');
    if (gameWithoutDls.length > 0) {
        sortedWithoutDls = gameWithoutDls.sort((a, b) => b[1].price - a[1].price);
        for (let game2 of sortedWithoutDls) {
            console.log(`${game2[0]} - ${game2[1].price.toFixed(2)}`);
        }
    }

}

// // League of Leg Ends - DoaT - 6.00
// WitHer 3 - Blood and Beer - 30.00
// Cyberfunk 2077 - 96.00
// FullLife 3 - 48.00

// BattleShield 5 - CoD edition - 38.84
// Dead Red Redemption - no DLC - 60.00
// Dog of War - 36.00
// FortLite - 20.00
// Center Strike - 11.99

vaporWinterSale('WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT');
console.log('----------------------');
vaporWinterSale(
    'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC');
