function integerOrFloat(firstNum, secondNum, thirdNum){
    let sum = Number(firstNum) + Number(secondNum) + Number(thirdNum);
    let result = (sum % 1 === 0)? ` - Integer` : ` - Float`;
    console.log(sum + result);
}
integerOrFloat(9, 100, 1.1)
integerOrFloat(100, 200, 303)