function solve(input) {
    let friendList = input.shift().split(', ');
    let countBlacklisted = 0;
    let countLost = 0;

    for (let i = 0; i < input.length; i++) {

        let line = input[i].split(' ');
        let command = line[0];

        if (command === 'Report') {
            break;
            
        } else if (command === 'Blacklist') {
            let name = line[1];
            let index = friendList.indexOf(name);
            if (index !== - 1) {
                friendList.splice(index, 1, 'Blacklisted')
                countBlacklisted++;
                console.log(`${name} was blacklisted.`);

            } else {
                console.log(`${name} was not found.`);
            }

        } else if (command === 'Error') {
            let index = Number(line[1]);

            if (index >= 0 && index < friendList.length) {
                let name = friendList[index];

                if (name !== 'Blacklisted' && countLost === 0) {
                    countLost++;
                    friendList.splice(index, 1, 'Lost')
                    console.log(`${name} was lost due to an error.`);
                } 
            }
        } else if (command === 'Change') {
            let index = Number(line[1]);
            let newName = line[2];

            if (index >= 0 && index < friendList.length) {
                let currentName = friendList[index];
                friendList.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }
    }

    console.log(`Blacklisted names: ${countBlacklisted}`);
    console.log(`Lost names: ${countLost}`);
    console.log(`${friendList.join(' ')}`);


}
solve(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])

solve(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])

solve(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
