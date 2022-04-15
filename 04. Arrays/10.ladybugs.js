function ladybugs(input) {

    let fieldSize = Number(input.shift());
    let currentIndex = input.shift().split(" ").map(Number);
    let ladyBugs = [];

    // only indexes in the field
    currentIndex = currentIndex.filter(a => a >= 0 && a < fieldSize);

    //ladybug's field
    for (let p = 0; p < fieldSize; p++) {
        ladyBugs.push(0);
    }
    //push ladybugs      
    for (let i = 0; i < currentIndex.length; i++) {
        let index = currentIndex[i]
        ladyBugs[index] = 1;
    }
    // let fly
    for (let j = 0; j < input.length; j++) {
        let line = input[j];
        if (line === 'end') {
            break;
        }
        let moving = line.split(' ');
        let firstIndex = Number(moving[0])
        let direction = moving[1];
        let step = Number(moving[2]);

        //if there isn't flying ladybugs
        if (firstIndex < 0 || firstIndex >= ladyBugs.length || ladyBugs[firstIndex] === 0) {
            continue;
        }
        // change direction
        if (direction === 'left') {
            step *= -1;
        }

        let endIndex = firstIndex + step;
        ladyBugs[firstIndex] = 0;

        // end position while ladybugs are in the field
        while (endIndex >= 0 && endIndex < ladyBugs.length) {
            if (ladyBugs[endIndex] === 1) {
                endIndex += step;
            } else {
                ladyBugs[endIndex] = 1;
                break;
            }
        }
    }
    console.log(ladyBugs.join(' '));
}

ladybugs([3, '0 1 ',
    '0 right 1',
    '2 right 1']
)
// ladybugs([3, '0 1 2',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']
// )
// ladybugs([5, '3',
//     '3 left 2',
//     '1 left -2']
// )
