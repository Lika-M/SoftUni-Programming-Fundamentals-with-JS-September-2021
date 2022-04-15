function bonusScoringSystem(input) {

    let studentsNum = Number(input[0]);
    let lecturesNum = Number(input[1]);
    let additionalBonus = Number(input[2]);
    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 3; i <= studentsNum + 3; i++) {
        let attendance = Number(input[i]);
        if(studentsNum!== 0 && attendance !== 0){
            let totalBonus = attendance / lecturesNum * (5 + additionalBonus);
            if (totalBonus >= maxBonus) {
                maxBonus = totalBonus;
                maxAttendance  = attendance;
            }
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
)