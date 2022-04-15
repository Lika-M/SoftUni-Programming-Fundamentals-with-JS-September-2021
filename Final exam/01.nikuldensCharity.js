// not submittet in judge!
// imput is comming lika a array!

function nikuldensCharity(input) {

    let message = input.shift();
    let line = input.shift();


    while (line !== 'Finish') {
        [command, ...rest] = line.split(' ');

        if (command === 'Replace') {
            let [currentChar, newChar] = rest;
            message = message.split(currentChar).join(newChar);
            console.log(message);

        } else if (command === 'Make') {

            if (rest[0] === 'Upper') {
                message = message.toUpperCase();
            } else {
                message = message.toLowerCase();
            }
            console.log(message);

        } else if (command === 'Check') {
            let string = rest;
            if (message.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }

        } else if (command === 'Sum') {
            let [startIndex, endIndex] = rest;
            if (startIndex > 0 && startIndex < message.length - 1 &&
                endIndex > 0 && endIndex < message.length - 1) {
                let substr = message.substring(+startIndex, +endIndex + 1); // if length > 0?
                if (substr.length > 0) {
                    let sum = 0;
                    for (let letter of substr) {
                        let num = letter.charCodeAt(0);
                        sum += num;
                    }
                    console.log(sum);
                }
            } else {
                console.log('Invalid indexes!');
            }

        } else if (command === 'Cut') {
            let [startIndex, endIndex] = rest;
            if (startIndex > 0 && startIndex < message.length - 1 &&
                endIndex > 0 && endIndex < message.length - 1) {
                let substr = message.slice(Number(startIndex), Number(endIndex) + 1);
                message = message.replace(substr, '');
                console.log(message);

            } else {
                console.log('Invalid indexes!');
            }
        }

        line = input.shift();
    }

}

nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish',
]);
console.log(' -------------------');
nikuldensCharity([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
])