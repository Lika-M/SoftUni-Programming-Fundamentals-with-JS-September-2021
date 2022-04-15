function addAndSubstract(oldArray){

    let oldSum = 0;
    let newSum = 0;
    let newElement = 0
    let newArray = [];

    for(i = 0; i < oldArray.length; i++){
        let element = oldArray[i];
        oldSum += element;
        
        if(element % 2 === 0){
            newElement = element +i;
        } else {
            newElement = element -i;
        }
        newArray.push(newElement)
        newSum += newElement; 
    }
    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])