function grabAndGo(array) {

    let stringArr = array.shift().split(' ').map(Number);
    console.log(stringArr);
    let num = Number(array);

    let index = stringArr.lastIndexOf(num);
    if (index > 0 && index < stringArr.length) {

        stringArr.splice(index, num)
        // Also is worked:
        // let newArr = [];
        // for (let i = 0; i < index; i++) {
        //     let element = stringArr[i]
        //     newArr.push(element);
        // }
        // stringArr = [...newArr]

        let sum = stringArr.reduce((sum, a) => sum + a);
        console.log(sum);
    } else {
        console.log('No occurrences were found!');
    }

}
grabAndGo(['1 3 5 7 12 2 3 5 12',
    '3'
])
grabAndGo(['1 2 3 4 5 6 7 8 9 10',
    '20'
])