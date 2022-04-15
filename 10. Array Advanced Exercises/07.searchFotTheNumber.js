function searchForTheNumber(arr1, arr2) {

    let numberToTake = arr2[0];
    let numberToDelete = arr2[1];
    let searchNumber = arr2[2];

    let sequence = arr1.slice(0, numberToTake);
    sequence.splice(0, numberToDelete);
    let count = 0;
    for (const num of sequence) {
       if(num === searchNumber){
        count++
       }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}
searchForTheNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)