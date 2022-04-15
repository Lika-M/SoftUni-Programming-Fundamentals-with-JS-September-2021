function treasureFinder(input) {

    let key = input.shift().split(' ');

    let i = 0;
    let line = input[i];
    let arr = [];

    while (line !== 'find') {
        let counter = 0;
        for (let char of line) {
            let code = char.charCodeAt();
            if (counter >= key.length) {
                counter = 0;
            }
            code -= Number(key[counter]);
            counter++;
            let letter = String.fromCharCode(code);
            arr.push(letter)
        }

        i++;
        line = input[i];
    }

    let firstIndex = arr.indexOf('&');
    let lastIndex = arr.indexOf('&', firstIndex + 1);
    let type = arr.slice(firstIndex + 1, lastIndex).join('');
    let output = `Found ${type} at `
    let start = arr.indexOf('<');
    let end = arr.indexOf('>');
    let coordinates = arr.slice(start+1, end).join('');
    output += `${coordinates}`
    console.log(output);



}

treasureFinder([`1 2 1 3`,
    `ikegfp'jpne)bv=41P83X@`,
    `ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA`,
    `find`])
// treasureFinder([`1 4 2 5 3 2 1`,
//     `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
//     `tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC`,
//     `'stj)>34W68Z@`,
//     `find`
// ])
