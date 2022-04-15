function condenseArr(numbers){

    let newLength = numbers.length - 1;

    while(newLength >= 1){
        for(i = 0; i < newLength; i++){
            numbers[i] += numbers[i + 1];
        }
        newLength --;
    }
    console.log(numbers[0]);

}

condenseArr([2,10,3])
condenseArr([5,0,4,1,2])
condenseArr([1])
