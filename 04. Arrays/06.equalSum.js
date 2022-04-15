function equalSum(array) {
    isFound = false;
    let index = 0;

    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        let rightSum = 0;
        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];

        }
        if (leftSum === rightSum) {
            index = i;
            isFound = true;
        }
    }
    if (isFound) {
        console.log(`${index}`);

    } else {
        console.log(`no`);
    }
}
equalSum([1, 2, 3, 3])
equalSum([1, 2])
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSum([1])
equalSum([1, 2, 3])