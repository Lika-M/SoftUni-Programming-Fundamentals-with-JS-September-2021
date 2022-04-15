function solve(input) {
 
    let courses = {};
    let studentCapacity = {};
 
    for (let line of input) {
        if (line.includes(":")) {
            let [courseName, capacity] = line.split(": ");
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = [];
                studentCapacity[courseName] = +capacity
            } else {
                studentCapacity[courseName] += +capacity;
            }
        } else {
            let studentInfo = line.split(" ");
            let userData = studentInfo[0];
            let email = studentInfo[3];
            let course = studentInfo[5];
            let index1 = userData.indexOf("[");
            let index2 = userData.indexOf("]");
            let name = userData.slice(0, index1);
            let score = Number(userData.slice(index1 + 1, index2));
 
            if (courses.hasOwnProperty(course)
                && studentCapacity[course] > courses[course].length) {
                let print = [];
                print.push(score, name, email);
                courses[course].push(print);
            }
        }
    }
    let sortedByCount = Object.entries(courses).sort((a, b) => b[1].length - a[1].length)
    for (let row of sortedByCount) {
        let placesLeft = studentCapacity[row[0]] - row[1].length;
        let sortByCredit = row[1].sort((a, b) => b[0] - a[0]);
 
        console.log(`${row[0]}: ${placesLeft} places left`);
        sortByCredit.forEach(el => console.log(`--- ${el[0]}: ${el[1]}, ${el[2]}`))
    }
}