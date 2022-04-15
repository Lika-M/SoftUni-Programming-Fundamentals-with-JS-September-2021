function solve(input) {

    let string = input.shift();
    let line = input.shift();

    while (line !== 'End') {
        let [command, ...rest] = line.split(' ');
        if (command === 'Translate') {
            let [char, replacement] = rest;
            string = string.split(char).join(replacement);
            console.log(string);

        } else if (command === 'Includes') {
            let substr = rest[0];
            if (string.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === 'Start') {
            let substr = rest[0];
            if (string.startsWith(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === 'Lowercase') {
            string = string.toLowerCase();
            console.log(string);

        } else if (command === 'FindIndex') {
            let char = rest[0];
            let lastIndex = string.lastIndexOf(char);
            console.log(lastIndex);

        } else if (command === 'Remove') {
            let [startIndex, count] = rest;
            startIndex = Number(startIndex);
            count
            if(startIndex >= 0 && startIndex < string.length){

                let toDelete = string.slice(Number(startIndex), startIndex + count);
                string = string.replace(toDelete, '');
                console.log(string);
            }

        }

        line = input.shift();
    }

}

// solve(["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"])
//     ;

// console.log('-----------');

solve(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex P",
"Remove 2 7",
"End"])

