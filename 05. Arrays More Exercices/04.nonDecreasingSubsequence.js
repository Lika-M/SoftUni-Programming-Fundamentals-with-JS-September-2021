function nonDecreasingSubsequence(array) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let newArray = [];
    for (const number of array) {
        if (number >= maxNumber) {
            maxNumber = number;
            newArray.push(maxNumber);
        } else {
            continue;
        }
    }
    
    console.log(newArray.join(' '));

}
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])//1 3 8 10 12 24)
nonDecreasingSubsequence([ 1, 2, 3, 4])
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1])