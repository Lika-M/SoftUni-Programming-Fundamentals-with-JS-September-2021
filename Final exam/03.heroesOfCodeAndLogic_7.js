function heroesOfCodeAndLogic_VII(input) {

    let num = input.shift();
    let list = {};

    for (let i = 0; i < num; i++) {
        let line = input[i];
        let [hero, hp, mp] = line.split(' ');
        hp = Number(hp);
        mp = Number(mp);
        list[hero] = { hp: hp, mp: mp };
    }

    let commands = input.slice(num);
    let line = commands.shift();

    while (line !== 'End') {

        let [command, hero, ...rest] = line.split(' - ');

        if (command === 'Heal') {
            let amount = Number(rest);
            if (amount >= 100 - list[hero].hp) {
                console.log(`${hero} healed for ${100 - list[hero].hp} HP!`);
                list[hero].hp = 100;
            } else {
                list[hero].hp += amount;
                console.log(`${hero} healed for ${amount} HP!`);
            }


        } else if (command === 'Recharge') {
            let amount = Number(rest);
            if (amount >= 200 - list[hero].mp) {
                console.log(`${hero} recharged for ${200 - list[hero].mp} MP!`);
                list[hero].mp = 200;
            } else {
                list[hero].mp += amount;
                console.log(`${hero} recharged for ${amount} MP!`);
            }

        } else if (command === 'TakeDamage') {
            let [damage, attacker] = rest;
            damage = Number(damage);
            list[hero].hp -= damage;
            if (list[hero].hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${list[hero].hp} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete list[hero];
            }

        } else if (command === 'CastSpell') {
            let [neededMP, spellName] = rest;
            neededMP = Number(neededMP);
            if (list[hero].mp >= neededMP) {
                list[hero].mp -= neededMP;
                console.log(`${hero} has successfully cast ${spellName} and now has ${list[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }

        }

        line = commands.shift();
    }

    let sorted = Object.entries(list)
        .sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));
    for (let item of sorted) {
        console.log(`${item[0]}`);
        console.log(`  HP: ${item[1].hp}`);
        console.log(`  MP: ${item[1].mp}`);
    }


}

heroesOfCodeAndLogic_VII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])

console.log('');
heroesOfCodeAndLogic_VII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])