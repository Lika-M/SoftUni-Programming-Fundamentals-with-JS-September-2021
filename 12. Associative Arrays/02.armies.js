function armies(input) {

    let list = {};
    for (line of input) {
      
        if (line.includes('arrives')) {
            line = line.split(' ');
            let leaderName = line.slice(0, line.length - 1).join(' ');
                list[leaderName] = {};
            
        } else if (line.includes(':')) {
            let [leaderName, rest] = line.split(': ');
            if (list[leaderName]) {
                let [nameArmy, count] = rest.split(', ');
                list[leaderName][nameArmy] = Number(count);
            }
        } else if (line.includes('+')) {
            let [nameArmy, count] = line.split(' + ');
            for (let key of Object.keys(list)) {
                if (list[key][nameArmy]) {
                    list[key][nameArmy] += Number(count);
                }
            }
        } else if (line.includes('defeated')) {
            line = line.split(' ');
            let leaderName = line.slice(0, line.length - 1).join(' ');
            if(list[leaderName]){
                delete list[leaderName];
            }
        }
    }
 
    let sorted =Object.entries(list).sort((a, b) => Object.values(b[1]).reduce((a, b) => (a + b), 0) - Object.values(a[1]).reduce((a, b) => (a + b), 0));
    for(let row of sorted){
        console.log(`${row[0]}: ${Object.values(row[1]).reduce((a, b ) => (a + b), 0)}`);
        let obj = Object.entries(row[1]).sort((a, b) => b[1] - a[1]);
        for(let el of obj){
            console.log(`>>> ${el[0]} - ${el[1]}`);
        }
    }
    
}
// ......................................................
   // let armyCount = 0;
    // for (let couples of Object.entries(list)) {
    //     armyCount = Object.values(couples[1]).reduce((a, b) => a + b);
        // list[couples[0]]['armyCount'] = armyCount;
    // }
    // ......................................................

// armies(['Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205'])

armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'])