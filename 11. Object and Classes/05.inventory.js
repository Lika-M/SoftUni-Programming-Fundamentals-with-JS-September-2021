function inventory(array) {

    let heroes = [];
    //their names, level, and items
    for (let list of array) {
        list = list.split(' / ');
        let name = list[0];
        let level = Number(list[1]);
        let items = (list[2]);
        items = items
        .split(', ')
        .sort((a, b) => a.localeCompare(b)).join(', ');
        let hero = {name, level, items}
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level: ${hero.level}`);
        console.log(`items: ${hero.items}`);
    }
    

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)