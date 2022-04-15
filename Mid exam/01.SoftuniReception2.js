function softUniReception2(input) {

    let students = Number(input.pop());
    let arr = input.map(Number);
    let studentPerHour = arr.reduce((students, x) => students += x);
    let hours = 0;
    
    while (students > 0) {
        hours++
        students -= studentPerHour;
        if (hours % 4 === 0) {
            students += studentPerHour
            if(students <= 0){
                break;
            }
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception2(['1', '2', '3', '45'])
softUniReception2(['5', '6', '4', '20'])
softUniReception2(['3', '2', '5', '40'])