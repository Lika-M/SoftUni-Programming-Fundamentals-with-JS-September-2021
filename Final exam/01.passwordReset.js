function passwordReset(input) {

    let rowPassword = input.shift();
    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...rest] = line.split(' ');

        if (command === 'TakeOdd') {
            let password = '';
            for (let i = 0; i < rowPassword.length; i++) {
                let letter = rowPassword[i];
                if (i % 2 !== 0) {
                    password += letter;
                }
            }
            rowPassword = password;
            console.log(rowPassword);

        } else if (command === 'Cut') {
            let [index, length] = rest;
            index = Number(index);
            length = Number(length);

            let cutted = rowPassword.slice(index, index + length);
            rowPassword = rowPassword.replace(cutted, '');
            console.log(rowPassword);

        } else if (command === 'Substitute') {
            let [substr, repl] = rest;

            if (rowPassword.includes(substr)) {
                let splitted = rowPassword.split(substr);
                rowPassword = splitted.join(repl);
                console.log(rowPassword);
            } else {
                console.log("Nothing to replace!");
            }
        }

        line = input.shift();
    }
    
    console.log(`Your password is: ${rowPassword}`);

}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"])

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

