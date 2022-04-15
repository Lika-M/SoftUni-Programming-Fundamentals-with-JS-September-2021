function tseamAccount(array) {

    let petersGames = array.shift().split(" ");
    let newAccount = petersGames;
    let i = 0;
    let income = array[i];

    while (income !== "Play!") {

        let toDo = income.split(" ");
        let command = toDo[0];
        let game = toDo[1];

        let expanding = '';
        if (command === "Expansion") {
            let split = game.split("-");
            game = split[0];
            expanding = split[1]
        }

        if (petersGames.includes(game)) {
            switch (command) {
                case "Uninstall":
                    const index = petersGames.indexOf(game);
                    petersGames.splice(index, 1);
                    break;
                case "Update":
                    const index2 = petersGames.indexOf(game);
                    petersGames.splice(index2, 1);
                    newAccount.push(game);
                    break;
                case "Expansion":
                    const index3 = petersGames.indexOf(game);
                    petersGames.splice(Number(index3 + 1), 0, `${game}:${expanding}`);
                    break;
            }
        } else {
            switch (command) {
                case "Install": newAccount.push(game); break;
            }
        }
        i++;
        income = array[i];
    }
    let result = newAccount.join(" ");
    console.log(result);
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)
// CS CS:Go LoL Diablo
