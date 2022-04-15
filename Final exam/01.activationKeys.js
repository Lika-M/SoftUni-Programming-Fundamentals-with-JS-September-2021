function activationKeys(input) {
    
    let key = input.shift();
    let line = input.shift();

    while (line !== 'Generate') {
        let [command, ...rest] = line.split('>>>')

        if (command === 'Slice') {
            let startIndex = Number(rest[0]);
            let endIndex = Number(rest[1]);
            key = key.slice(0, startIndex) + key.slice(endIndex);
            console.log(key);

        } else if (command === 'Flip') {
            let commonCase = rest[0];
            let startIndex = Number(rest[1]);
            let endIndex = Number(rest[2]);
            if (commonCase === 'Upper') {
                let changed = key.slice(startIndex, endIndex).toUpperCase();
                key = key.slice(0, startIndex) + changed + key.slice(endIndex);
            } else {
                let changed = key.slice(startIndex, endIndex).toLowerCase();
                key = key.slice(0, startIndex) + changed + key.slice(endIndex);
            }
            console.log(key);

        } else if (command === 'Contains') {
            let substr = rest;
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log('Substring not found!');
            }
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${key}`);


}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
console.log(' ');
// activationKeys(["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
