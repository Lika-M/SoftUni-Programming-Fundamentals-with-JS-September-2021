function manypulateArray(array) {
    // https://judge.softuni.org/Contests/Practice/Index/581#2
    let stringArr = array.shift().split(' ');
    let linesNum = Number(array.shift());

    for (let i = 0; i < linesNum; i++) {

        let line = array[i].split(' ');
        let command = line[0];
        switch (command) {
            case 'Reverse':
                stringArr.reverse();
                break;
            case 'Distinct':
                let copyArr = [];
                for (const el of stringArr) {
                    if (!copyArr.includes(el)) {
                        copyArr.push(el)
                    }
                }
                stringArr = [...copyArr];
                break
            case 'Replace':
                let index = line[1];
                let element = line[2];
                stringArr.splice(index, 1, element);
                break;

        }
    }
    console.log(stringArr.join(', '));
}
manypulateArray(['one one one two three four five',
    '3',
    'Distinct',
    'Reverse',
    'Replace 2 Hello'
])
manypulateArray(['Alpha Bravo Charlie Delta Echo Foxtrot',
    '6',
    'Distinct',
    'Reverse',
    'Replace 1 Charlie',
    'Distinct',
    'Reverse',
    'Replace 2 Charlie'
    ])