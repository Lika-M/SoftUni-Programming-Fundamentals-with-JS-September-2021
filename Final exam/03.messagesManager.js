// not submittet in judge!
// imput is comming lika a array!

function messagesManager(input) {

    let list = [];
    let capacity = Number(input.shift());
    let line = input.shift();

    while (line !== 'Statistics') {
        let [command, user, ...rest] = line.split('=');
        
        if (command === 'Add') {
            let searchObj = list.find(obj => obj.user === user);
            if (!searchObj) {
                let [sendMessages, receivedMessages] = rest;
                let obj = {
                    user: user,
                    sendMessages: Number(sendMessages),
                    receivedMessages: Number(receivedMessages),
                }
                list.push(obj);
            }

        } else if (command === 'Message') {
            let sender = user;
            let [receiver] = rest;
            let findSender = list.find(obj => obj.user === sender);
            let findReseiver = list.find(obj => obj.user === receiver);

            if (findSender && findReseiver) {
                findSender.sendMessages += 1;
                findReseiver.receivedMessages += 1;

                if (findSender.receivedMessages + findSender.sendMessages >= capacity) {
                    let findIndex1 = list.findIndex(obj => obj.user === sender);
                    console.log(`${sender} reached the capacity!`);
                    list.splice(findIndex1, 1);
                }
                if (findReseiver.receivedMessages + findReseiver.sendMessages >= capacity) {
                    let findIndex2 = list.findIndex(obj => obj.user === receiver);
                    console.log(`${receiver} reached the capacity!`);
                    list.splice(findIndex2, 1);
                }
            }

        } else if (command == 'Empty') {
            if (user !== 'All') {
                let findIndex = list.findIndex(obj => obj.user === user);
                if (findIndex !== -1) {
                    list.splice(findIndex, 1);
                }
            } else {
                list = [];
            }
        }
        line = input.shift();
    }

    if (list.length > 0) {
        console.log(`Users count: ${list.length}`);

        let sortedList = list.sort((a, b) => b.receivedMessages - a.receivedMessages ||
            a.user.localeCompare(b.user));
        for (let obj of sortedList) {
            console.log(`${obj.user} - ${obj.sendMessages + obj.receivedMessages}`);
        }
    }

}

messagesManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
])

console.log('-------------------------------');
messagesManager([
    '20',
'Add=Mark=3=9',
'Add=Berry=5=5',
'Add=Clark=4=0',
'Empty=Berry',
'Add=Blake=9=3',
'Add=Michael=3=9',
'Add=Amy=9=9',
'Message=Blake=Amy',
'Message=Michael=Amy',
'Statistics'
])