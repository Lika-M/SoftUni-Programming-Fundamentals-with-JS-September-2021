function аrrayStatistics(array) {

    let sorted = array.sort((a, b) => a - b);
    console.log(sorted);
    let max = array[0];
    let min = array[array.length - 1];
    let sum = array.reduce((sum, a) => sum + a);
    let avarage = sum  / array.length;
    console.log(avarage);

}

аrrayStatistics([2, 3, 4, 5, 6, 1])
