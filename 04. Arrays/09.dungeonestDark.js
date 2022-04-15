function dungeonestDark(array) {
    let rooms = array[0].split("|");
    let sumCoins = 0;
    let sumHealth = 100;
    let length = rooms.length
    let isDead = false;

    for (let i = 0; i < length; i++) {
        let split = rooms[i].split(" ");
        let item = split[0];
        let num = Number(split[1]);

        switch (item) {
            case "potion":
                sumHealth += num;
                if (sumHealth >= 100) {
                    num = sumHealth - num;
                    sumHealth = 100;
                }
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${sumHealth} hp.`);
                break;
            case "chest":
                console.log(`You found ${num} coins.`);
                sumCoins += num;
                break;
            default:
                sumHealth -= num;
                if (sumHealth <= 0) {
                    isDead = true;
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${i+1}`);
                } else {
                    console.log(`You slayed ${item}.`);
                } break;
        }
        if(isDead){
            break;
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${sumCoins}`);
        console.log(`Health: ${sumHealth}`);

    }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])