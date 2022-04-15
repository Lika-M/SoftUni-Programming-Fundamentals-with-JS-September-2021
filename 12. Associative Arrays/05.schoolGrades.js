function scooolGrades(input) {

    let list = new Map;

    for (let line of input) {
        let splited = line.split(' ');
        let name = splited.shift();
        let grades = splited.map(Number); // an array

        if (!list.has(name)) {
            list.set(name, []); // add array of grades
        }
        let currentGrades = list.get(name);
        currentGrades.push(...grades);
    }

    let sortedList = Array.from(list);
    sortedList.sort((a, b) => compare(a[1], b[1]));

    for (let [name, grades] of sortedList) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function compare(arrA, arrB) {
        let averageA = arrA.reduce((sum, a) => sum + a) / arrA.length;
        let averageB = arrB.reduce((sum, a) => sum + a) / arrB.length;
        return averageA - averageB;
    }

}
scooolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)