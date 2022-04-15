function cardGame(input) {

    let power = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
        '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    let type = {
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    }
    
    let gamerList = {};

    for (let line of input) {
        line = line.split(': ');
        let gamerName = line[0];
        let cards = line.slice(1);
        cards = cards[0].split(', ');
        
        if(!gamerList.hasOwnProperty(gamerName)){
            gamerList[gamerName] = {};
            gamerList[gamerName].cards = [];
            gamerList[gamerName].result = []
        } 
       
        for (let card of cards) {
            let indexOfCard = gamerList[gamerName].cards.indexOf(card);
            if (indexOfCard === -1) {
                gamerList[gamerName].cards.push(card);

                if (card.length === 2) {
                    let first = card[0];
                    let second = card[1];
                    let p = power[first];
                    let t = type[second];
                    result = Number(p) * Number(t);

                } else if (card.length === 3) {
                    let first = card[0] + card[1];
                    let second = card[2];   
                    let p = power[first];
                    let t = type[second];
                    result = Number(p) * Number(t);
                }
                gamerList[gamerName].result.push(result);
            } 
        }
    }
    for (let gamerName in gamerList) {
        let finalResult = gamerList[gamerName].result.reduce((a, sum) => a + sum);
        console.log(`${gamerName}: ${finalResult}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])