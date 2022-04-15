function solve(input) {

    let pattern = /^(?<artist>[A-Z][a-z\' ]+):(?<song>[A-Z ]+)$/;
    let line = input.shift();

    while (line !== 'end') {

        let match = pattern.exec(line);

        if (match) {
            let key = match.groups.artist.length;
            let matchLine = match[0]

            let result = '';
            for (let currentSymbol of matchLine) {
                let symbol;
                if (currentSymbol === ' ' || currentSymbol === "'") {
                    symbol = currentSymbol;
                    result += symbol;
                    continue;
                } else if (currentSymbol === ':') {
                    symbol = '@';
                    result += symbol;
                    continue;
                } else {
                    let currentAsciiCode = currentSymbol.charCodeAt(0);
                    let asciiCode = Number(currentAsciiCode) + key;

                    if (currentAsciiCode >= 65 && currentAsciiCode <= 90) {
                        if (asciiCode > 90) {
                            let rest = asciiCode - 90;
                            let fromStartUpper = 65 + rest - 1;
                            symbol = String.fromCharCode(fromStartUpper);
                        } else {
                            symbol = String.fromCharCode(asciiCode);
                        }
                    } else if (currentAsciiCode >= 97 && currentAsciiCode <= 122) {
                        if (asciiCode > 122) {
                            let rest = asciiCode - 122;
                            let fromStartLower = 97 + rest - 1;
                            symbol = String.fromCharCode(fromStartLower);
                        } else {
                            symbol = String.fromCharCode(asciiCode);
                        }
                    }
                    result += symbol;
                }
            }
            console.log(`Successful encryption: ${result}`);
        } else {
            console.log('Invalid input!');
        }
        line = input.shift();
    }
}

solve(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'])
    
// Successful encryption: Ksotks@BKTUS
// Successful encryption: Wtyvty alcv@YFXM
// Successful encryption: Iwfpj@STSXYTU
// Successful encryption: Fijqj@MJQQT