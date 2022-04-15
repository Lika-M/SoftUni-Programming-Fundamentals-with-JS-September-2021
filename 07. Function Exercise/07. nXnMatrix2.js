function nXnMatrix2(number) {

    function constructRow(n) {
        let row = '';
        for (let i = 0; i < n; i++) {
            row += `${n} `
        }
        return row;
    }

    for (let j = 0; j < number; j++) {
        console.log(constructRow(number));
    }
}
nXnMatrix2(2)