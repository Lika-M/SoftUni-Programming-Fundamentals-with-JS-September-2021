function solve(input) {

    let pattern = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;
    let decryptedCode = '';

    for (let i = 0; i < input.length; i++) {
        let result = pattern.exec(input[i]);

        if (result) {
            let lengthOfCode = Number(result.groups.length);
            if (result.groups.code.length === lengthOfCode) {

                for (let j = 0; j < result.groups.code.length; j++) {
                    decryptedCode += String.fromCharCode(result.groups.code.charCodeAt(j) + lengthOfCode);
                }
                console.log(`Coordinates found! ${result.groups.name} -> ${decryptedCode}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}
solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
])