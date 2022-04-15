function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetBroken++;
            if (i % 3 === 0) {
                shieldBroken++;
                if (shieldBroken % 2 === 0) {
                    armorBroken++;
                }
            }
        }
        if (i % 3 === 0) {
            swordBroken++;
        }
    }
    let finalPrice = helmetBroken * helmetPrice +
        swordBroken * swordPrice +
        shieldBroken * shieldPrice +
        armorBroken * armorPrice;

    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)