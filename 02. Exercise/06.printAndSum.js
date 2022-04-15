function printAndSum(first, last){

    let start = first;
    let end = last;
    let sum = 0;
    let row = "";
    for(i = start; i <= end; i++){
        sum += i;
        row += `${i} `
    }
    console.log(row);
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26)