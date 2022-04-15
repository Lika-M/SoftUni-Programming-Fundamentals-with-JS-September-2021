function solve(input) {

    let text = input[0];
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]+(?:[^A-Za-z\d]+)?\/+(?<num>\d+)\/+/g;
    let matched = pattern.exec(text);

    while  (matched !== null) {
        let color = matched.groups.color;
        let amount = Number(matched.groups.num);
        console.log(`You found ${amount} ${color} eggs!`);
        matched = pattern.exec(text);
    }

}

solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);

console.log('-----------------------------');

solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);