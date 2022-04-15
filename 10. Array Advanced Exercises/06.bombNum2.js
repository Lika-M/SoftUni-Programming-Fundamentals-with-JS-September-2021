function bombNum2(array1, array2) {

    let bombNum = array2[0];
    let power = array2[1];
    let resultArray = [...array1];

    for (let i = 0; i < array1.length; i++) {
        let element = array1[i]

        if (resultArray.includes(bombNum)) {
            if (element === bombNum) {
                let index = resultArray.indexOf(bombNum);

                if (index - power < 0) {
                    resultArray.splice(0, power * 2 + 1)
                } else {
                    resultArray.splice(index - power, power * 2 + 1);
                }
            }
        }
    }
    let sum = 0;
    for (const element of resultArray) {
        sum += element;
    }
    console.log(sum);
}
bombNum2
    ([1, 7, 7, 1, 2, 3],
        [7, 1]
    )