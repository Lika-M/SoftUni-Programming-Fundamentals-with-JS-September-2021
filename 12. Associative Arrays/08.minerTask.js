function minerTask(array) {
    let list = {};
    let item = '';
    for (let i = 0; i < array.length; i++) {
        let quantity = 0
        if (i % 2 === 0) {
            item = array[i];
        } else {
            quantity = Number(array[i]);
        }
        if (!list.hasOwnProperty(item)) {
            list[item] = quantity;
        } else {
            list[item] += quantity;
        }
    }
    let entries = Object.entries(list);
    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}


minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
)