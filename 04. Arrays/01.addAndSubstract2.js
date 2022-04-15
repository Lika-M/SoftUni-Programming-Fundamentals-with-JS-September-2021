function addAndSubstract2(array) {
    let sum1 = 0;
    for (const num of array) {
        sum1 += num;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }
    let sum2 = 0;
    for (const num of array) {
        sum2 += num;
    }

    console.log(array);
    console.log(sum1);
    console.log(sum2);

}
addAndSubstract2([5, 15, 23, 56, 35])
addAndSubstract2([-5, 11, 3, 0, 2])