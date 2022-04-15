function arrayManipulator(numbres, array) {

    for (let i = 0; i < array.length; i++) {
        const line = array[i].split(' ');
        let command = line.shift();
        let nums = line.map(Number);

        if (command === 'add') {
            let index = nums.shift();
            let num = nums[0];
            numbres.splice(index, 0, num);

        } else if (command === 'addMany') {
            let index = nums.shift();
            numbres.splice(index, 0, ...nums)

        } else if (command === 'contains') {
            let element = nums[0];
            if (numbres.includes(element)) {
                console.log(numbres.indexOf(element));
            } else {
                console.log('-1');
            }
        } else if (command === 'remove') {
            let index = nums.shift();
            if (index >= 0 && index < numbres.length)
                numbres.splice(index, 1);

        } else if (command === 'shift') {
            let position = nums[0];
            for (let s = 0; s < position; s++) {
                let taken = numbres.shift();
                numbres.push(taken)
            }
        } else if (command === 'sumPairs') {
            let arr = [];
            for (let p = 0; p < numbres.length; p += 2) {
            
                if (numbres.length % 2 === 0) {
                    arr.push(numbres[p] + numbres[p + 1]);
                } else {
                    numbres.push(0)
                    arr.push(numbres[p] + numbres[p + 1]);
                }
            }
            numbres = [...arr]
        } else if (command === 'print') {
            console.log(`[ ${numbres.join(', ')} ]`);
        }
    }

}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['sumPairs', 'contains 1', 'contains 3', 'print']
)
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)