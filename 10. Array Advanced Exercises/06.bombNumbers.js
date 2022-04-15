function bombNumbers(array1, array2) {

    let bombNum = array2[0];
    let power = array2[1];
    let index = array1.indexOf(bombNum);

    while (index != -1) {

        if (index - power < 0) {
            array1.splice(0, power * 2 + 1)
        } else {
            array1.splice(index - power, power * 2 + 1);
        }
        index = array1.indexOf(bombNum);
    }

    let sum = 0;
    for (const element of array1) {
        sum += element;
    }
    console.log(sum);
}

bombNumbers
    ([1, 7, 7, 1, 2, 3],
        [7, 1]
    )