function inventory(array) {
    let heroes = [];

    for (let i = 0; i < array.length; i++) {
        let [name, level, items] = array[i].split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        let hero = { name, level, items };
        hero.level = Number(level);
        heroes.push(hero);
    }
    heroes = heroes.sort((a, b) => a.level - b.level);
  
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
)