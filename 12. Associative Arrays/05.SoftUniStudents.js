function softUniStudents(input) {

    let courses = {};
    let listOfStudents = {};

    for (let line of input) {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            if (!courses[courseName]) {
                courses[courseName] = {
                    capacity: Number(capacity),
                    count: 0,
                    students: []
                };
            } else {
                courses[courseName].capacity += Number(capacity);
            }

        } else {
            line = line.split(' ');
            let [studentName, credit] = line[0].split('[');
            credit = Number(credit.slice(0, -1));
            let email = line[3];
            let courseName = line[5];

            if (courses[courseName] && courses[courseName].capacity > 0) {
                let studentInfo = { name: studentName, credit: credit };
                courses[courseName].students.push(studentInfo);
                courses[courseName].capacity -= 1;
                courses[courseName].count += 1
                if (!listOfStudents[studentName]) {
                    listOfStudents[studentName] = { email: email, credit: credit }
                }
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort((a, b) => b[1].count - a[1].count);

    if(sortedCourses){

        for (let item of sortedCourses) {
    
            console.log(`${item[0]}: ${item[1].capacity} places left`);
            let studentsArr = item[1].students.sort((a, b) => b.credit - a.credit);
            if (studentsArr.length > 0){

                for (let one of studentsArr) {
                    for (let student of Object.entries(listOfStudents)) {
        
                        if (one.name === student[0]) {
                            let output = `--- ${one.credit}: ${one.name}, ${student[1].email}`
                            console.log(output);
                        }
                    }
                }
            }
        }
    }

}
    

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])

console.log('-'.repeat(20));

softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
])