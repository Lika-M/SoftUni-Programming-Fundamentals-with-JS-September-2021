function secretChat(input) {

    let message = input.shift();

    let line = input.shift();
    while (line !== 'Reveal') {
        let [command, rest1, rest2] = line.split(':|:');

        if (command === 'InsertSpace') {
            let index = Number(rest1);
            message = message.substr(0, index) + ' ' + message.substr(index);
            console.log(message);

        } else if (command === 'Reverse') {
            let substr = rest1;
            if (message.includes(substr)) {
                let reversed = substr.split('').reverse().join('');
                message = message.replace(substr,'')+ reversed;

                console.log(message);
            } else {
                console.log('error');
            }

        } else if (command === 'ChangeAll') {
            let substr = rest1;
            let replacement = rest2;
            if (message.includes(substr)) {
                message = message.split(substr).join(replacement);
                console.log(message);
            }
        }

        line = input.shift();
    }
    console.log((`You have a new text message: ${message}`));
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
)