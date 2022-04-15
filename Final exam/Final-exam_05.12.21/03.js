function solve(input) {
 
    let list = {};
    let unlikedMeals = 0;
    let line = input.shift();

    while (line !== 'Stop') {
        let [command, guest, meal] = line.split('-');

        if (command === 'Like') {
            if (!list[guest]) {
                list[guest] = [];
            } 
            if(!list[guest].includes(meal)){
                list[guest].push(meal);
            }

        } else if (command === 'Dislike') {

            if(list[guest]){

                let findIndex = list[guest].findIndex(el => el === meal);
                if(findIndex >= 0){
                    list[guest]. splice(findIndex,1);
                    console.log(`${guest} doesn't like the ${meal}.`);
                    unlikedMeals += 1;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${guest} is not at the party.`);
            }
        }

        line = input.shift();
    }

    let sortedByMealsCount = Object.entries(list)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for(let kvp of sortedByMealsCount){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedMeals}`);

}

// solve(["Like-Krisi-shrimps",
// "Like-Krisi-soup",
// "Like-Penelope-dessert",
// "Like-Misho-salad",
// "Stop"])

// console.log('---------------------');

solve (["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])
console.log('-----------------');

solve (["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])