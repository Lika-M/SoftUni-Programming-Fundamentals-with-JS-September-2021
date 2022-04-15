function theLift(input) {
    let people = Number(input.shift());
    let lift  = input.join().split(' ').map(Number);
  
    let lengthLift = lift.length;
    for (let i = 0; i < lengthLift; i++) {
        let emptyPlace = 4 - lift[i];
        if (people === 0) {
           break;
        } else {  
            if (emptyPlace <= people) {
                lift[i] = 4;
                people -= emptyPlace;
            } else {
                lift[i] = people;
                people = 0;
            }
        }
    }
    function hasEmptySpot(arr, num){
        let maxCapacity = arr.length * 4;
        let currenrCapacity = arr.reduce((sum, a) => sum + a);
        if(currenrCapacity + num < maxCapacity){
            return true;
        } else {
            return false
        }
    }

    if (people === 0 && hasEmptySpot(lift, people)) {
        console.log(`The lift has empty spots!`);
    } else if (people > 0 && !hasEmptySpot(lift, people)) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(lift.join(' '));
}

theLift([
    "15",
    "0 0 0 0 0"
])
theLift([
    "20",
    "0 2 0"
])
