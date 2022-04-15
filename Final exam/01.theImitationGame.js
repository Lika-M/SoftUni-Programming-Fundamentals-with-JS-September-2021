function theImitationGame(input) {

    let encryptMesage = input.shift();
    let i = 0;
    let line = input[i];

    while (line !== 'Decode') {
        let [command, ...rest] = line.split('|');

        if (command === 'Move') {
            let num = Number(rest);
            let messageAsArr = encryptMesage.split('');
            for (let j = 0; j < num; j++) {
                let shift = messageAsArr.shift();
                messageAsArr.push(shift);
            }
            encryptMesage = messageAsArr.join('');

        } else if (command === 'Insert') {
            let [index, value] = rest;
            let messageAsArr = encryptMesage.split('');
            messageAsArr[index] = value;
            encryptMesage = messageAsArr.join('');

        } else if (command === 'ChangeAll') {
            let [substr, replacement] = rest;
            let found = encryptMesage.includes(substr);
            
            while (found) {
                encryptMesage = encryptMesage.replace(substr, replacement);
                found = encryptMesage.includes(substr);
            }
        }

        i++;
        line = input[i];
    }
    console.log(`The decrypted message is: ${encryptMesage}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]
)