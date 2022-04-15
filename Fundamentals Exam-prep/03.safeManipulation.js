function safeManipulation(array) {

    let stringArr = array.shift().split(' ');
 
    let i = 0;
    let income = array[i];

    while (income !== 'END') {
        let line = income.split(' ');
        let command = line[0];

        switch (command) {
            case 'Reverse':
                stringArr.reverse();
                break;
            case 'Distinct':
                let copyArr = [];
                for (const el of stringArr) {
                    if (!copyArr.includes(el)) {
                        copyArr.push(el);
                    }
                }
                stringArr = copyArr.slice(0);
                break;
            case 'Replace':
                let index = Number(line[1]);
                let element = line[2];
                if(index >= 0 && index <= stringArr.length - 1){
                    stringArr.splice(index, 1, element);
                } else {
                    console.log('Invalid input!');
                }
                break;
            default:
                console.log('Invalid input!');
                break;
        }

        i++;
        income = array[i];
    }
    console.log(stringArr.join(', '));
}

safeManipulation(['one one one two three four five',
    'Distinct',
    'Reverse',
    'Replace 7 Hello',
    'Replace -5 Hello',
    'Replace 0 Hello',
    'END'
])
safeManipulation(['Alpha Bravo Charlie Delta Echo Foxtrot',
    'Distinct',
    'Reverse',
    'Change 0 1',
    'Replace 0 Charlie',
    'Reverse',
    'Replace 1 Charlie',
    'Distinct',
    'Replace 4 Charlie',
    'END'
])