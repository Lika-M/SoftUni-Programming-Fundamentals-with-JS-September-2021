function schoolRegister(input) {

    let nextYearClass = {};
    for (let line of input) {
        let info = line.split(', ');
        let name = info[0].split(': ')[1];
        let grade = Number(info[1].split(': ')[1]) + 1;
        let score = Number(info[2].split(': ')[1]);

        if (!nextYearClass[grade] && score >= 3) {
            nextYearClass[grade] = {};
            nextYearClass[grade][name] = score;
        } else if (score >= 3) {
            nextYearClass[grade][name] = score;
        }

    }
    let sort = Object.entries(nextYearClass).sort((a, b) => a[0] - b[0]);
    for (let list of sort) {
        console.log(`${list[0]} Grade `);
        let studentList = Object.entries(list[1]);
        let averageScore = [];
        let names = [];
        for (let [name, score] of studentList) {
            names.push(name);
            averageScore.push(score);
        }
        names = names.join(', ');
        if (averageScore.length > 0) {
            averageScore = averageScore.reduce((a, b) => a + b) / averageScore.length;
        }
        console.log(`List of students: ${names}`);
        console.log(`Average annual grade from last year: ${averageScore.toFixed(2)}`);
        console.log('');
    }

}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])



// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]
// )