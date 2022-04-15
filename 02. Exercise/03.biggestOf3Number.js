function biggestOf3Num(firstNum, secondNum, thirdNum) {

    // console.log(Math.max(firstNum, secondNum, thirdNum));
    let biggestNum = Number.MIN_SAFE_INTEGER;
 
    if (firstNum > biggestNum){
        biggestNum = firstNum
    }
    if(secondNum > firstNum){
        biggestNum = secondNum
    }
    if(thirdNum > biggestNum){
        biggestNum = thirdNum
    }
    console.log(biggestNum);
}
biggestOf3Num(-2, 7, 3)

