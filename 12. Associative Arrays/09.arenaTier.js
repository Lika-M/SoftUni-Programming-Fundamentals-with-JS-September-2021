function arenaTier(input) {

    let pool = {};

    for (let line of input) {

        if (line === "Ave Cesar") {
            break;
        }
        let isDuelTime = line.split(' ');

        if (isDuelTime[1] === '->') {

            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!pool.hasOwnProperty(gladiator)) {
                pool[gladiator] = {};
                pool[gladiator][technique] = skill

            } else {

                if (pool[gladiator].hasOwnProperty(technique)) {
                    let currentSkill = Object.values(pool[gladiator]);
                    if (currentSkill < skill) {
                        pool[gladiator][technique] = skill
                    }
                } else {
                    pool[gladiator][technique] = skill
                }
            }


        } else if (isDuelTime[1] === 'vs') {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (pool[gladiator1] && pool[gladiator2]) {
                let techniqueOfG1 = Object.keys(pool[gladiator1]);
                let techniqueOfG2 = Object.keys(pool[gladiator2]);
               
                for (let tech of techniqueOfG1) {
                 
                    if (techniqueOfG2.includes(tech)) {
                        let skill1 = pool[gladiator1][tech];
                        let skill2 = pool[gladiator2][tech];
                        if (skill1 > skill2) {
                            delete pool[gladiator2];
                            break;
                        } else {
                            delete pool[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
    }

    let arr = [];
    for (let kvp of Object.entries(pool)) {
        let [name, obj] = kvp;
        let power = Object.entries(obj);
        let totalSkills = power.map(a => a[1]).reduce((a, b) => a + b)
        arr.push([name, power, totalSkills]);
    }
    let sortedBySkills = arr.sort((a, b) => b[2] - a[2]) || ((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sortedBySkills.length; i++){
        console.log(`${sortedBySkills[i][0]}: ${sortedBySkills[i][2]} skill`);
        let soretedByTech = sortedBySkills[i][1].sort((a, b) => b[1] - a[1]) || ((a, b) => a[0].localeCompare(b[0]));
        for(let line of soretedByTech){
            console.log(`- ${line[0]} <!> ${line[1]}`);
        }
    }
        

}


arenaTier([
    'Pesho -> Duck -> 400'
,'Gladius -> Duck -> 250'
,'Gladius -> Shield -> 250'
,'Gladius -> Heal -> 200'
,'Pesho vs Gladius'
,'Gladius vs Julius'
,'Gladius vs Gosho'
,'Ave Cesar'
,'Julius -> Shield -> 150'
])