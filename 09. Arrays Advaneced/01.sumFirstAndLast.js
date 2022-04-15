function sumFirstAndLast(array){

    let first = Number(array[0]);
    let last = Number(array[array.length-1]);
    let sum = first + last;
    return sum;
}
console.log(sumFirstAndLast(['20', '30', '40']))