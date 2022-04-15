function starEnigma(input) {

    let n = input.shift();
    let attackedPlanets = [];
    let destroyedPlanets = [];

    let keyPattern = /[starSTAR]/g;
    let pattern = /@(?<planet>[A-za-z]+)[^ @\-!:>]*:(?<population>\d+)[^ @\-!:>]*!(?<attack>[AD])![^ @\-!:>]*\-\>(?<soldiers>\d+)/;

    for (let j = 0; j < n; j++) {
        let line = input[j];
        let matched = line.match(keyPattern);

        let decryptedLine = '';
        if (matched !== null) {
            let key = matched.length;

            for (let i = 0; i < line.length; i++) {
                let symbol = line[i];
                let code = symbol.charCodeAt(0);
                let decrypted = String.fromCharCode(code - key);
                decryptedLine += decrypted;
            }
        } else {
            decryptedLine = line;
        }
        let command = pattern.exec(decryptedLine);

        if (command !== null) {
            let planetName = command.groups.planet;
            let attack = command.groups.attack;

            if (attack === 'A') {
                attackedPlanets.push(planetName);
            } else {
                destroyedPlanets.push(planetName);
            }
        }
    }
    if (attackedPlanets.length > 0) {
        let sort = attackedPlanets.sort((a, b) => a.localeCompare(b));
        console.log(`Attacked planets: ${attackedPlanets.length}`);
        sort.forEach(x => console.log(`-> ${x}`));
    } else {
        console.log(`Attacked planets: 0`);
    }

    if (destroyedPlanets.length > 0) {
        let sort = destroyedPlanets.sort((a, b) => a.localeCompare(b));
        console.log(`Destroyed planets: ${destroyedPlanets.length}`);
        sort.forEach(x => console.log(`-> ${x}`));
    } else {
        console.log(`Destroyed planets: 0`);
    }
}




starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"])
// starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444",
// "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]
// )