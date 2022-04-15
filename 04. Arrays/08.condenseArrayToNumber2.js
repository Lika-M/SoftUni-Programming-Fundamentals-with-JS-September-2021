function condenseArr2(numbers){
    let newArray = numbers;
    let newLength = numbers.length - 1;

    while(newLength >= 1){
        newArray = [];
        for( let i = 0; i < newLength; i++){
            let currentNum = numbers[i] + numbers[i + 1];
            newArray.push(currentNum);
        }
        newLength--;
        numbers = newArray;
    }
    console.log(newArray[0]);

}
condenseArr2([2,10,3])
condenseArr2([5,0,4,1,2])
condenseArr2([1])