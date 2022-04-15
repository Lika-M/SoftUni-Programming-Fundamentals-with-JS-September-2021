function evenAndOddSubstraction(numbers){

    let oddSum = 0;
    let evenSum = 0;

    for(currentNum of numbers){
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        } else {
            oddSum += currentNum
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction([1,2,3,4,5,6])
evenAndOddSubstraction([3,5,7,9])
evenAndOddSubstraction([2,4,6,8,10])
	
