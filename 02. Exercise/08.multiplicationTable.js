function multiplicationTable(integer) {

    let num = integer;
    for (i = 1; i <= 10; i++) {
        let result = `${num} X ${i} = ${num * i}`
        console.log(result);
    }

}
multiplicationTable(5)