function heists(array) {
    let items = array[0].split(' ');
    let jewelsPrice = Number(items[0]);
    let goldPrice = Number(items[1]);
    let i = 1;
    let income = array[i];

    let heistSum = 0;
    let expensesSum = 0;
    
    while (income !== 'Jail Time') {
        let line = income.split(' ');
        let loot = line[0].split('');
        let expenses = Number(line[1]);

        let countJewel = 0;
        let countGold = 0;
        for (let symbol of loot) {
            if(symbol === '%'){
                countJewel++;
            } else if(symbol === '$'){
                countGold++;
            }
        }
        heistSum += jewelsPrice * countJewel + goldPrice * countGold;
        expensesSum += expenses;

        i++;
        income = array[i];
    }
    if(heistSum >= expensesSum){
        console.log(`Heists will continue. Total earnings: ${heistSum - expensesSum}.`);
    }else {
        console.log(`Have to find another job. Lost: ${expensesSum - heistSum}.`);
    }


}

heists(['10 20',
    'ASDA% 50',
    'DaS@!%$$ 10',
    '$$ 10',
    'Jail Time'
])
heists(['2000 10000',
    'ASDAs 500000',
    '%ASD$ 1000000',
    '$S$&*_ASD 1000',
    'AF#^&*LP 20000',
    '$ 100000000',
    'Jail Time'
])