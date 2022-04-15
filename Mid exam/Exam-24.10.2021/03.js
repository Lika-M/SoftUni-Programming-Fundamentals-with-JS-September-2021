function solve(input, num, item) {

    let priceRatings = input
    let entryPoint = Number(num);
    let type = item;

    let leftSum = 0;
    let rightSum = 0;
    let direction = '';
    let output = '';

    if (type === 'cheap') {

        for (let i = 0; i < entryPoint; i++) {
            if(priceRatings[i] < input[entryPoint])
            leftSum += priceRatings[i]
        }
        for (let j = entryPoint + 1; j < priceRatings.length; j++) {
            if(priceRatings[j] < input[entryPoint])
            rightSum += priceRatings[j];
        }
        if (leftSum > rightSum) {
            direction = 'Left';
            output = `${direction} - ${leftSum}`
        } else if (leftSum < rightSum) {
            direction = 'Right';
            output = `${direction} - ${rightSum}`
        } else if (leftSum = rightSum) {
            direction = 'Left';
            output = `${direction} - ${leftSum}`
        }

    } else if (type === 'expensive') {

        for (let i = 0; i < entryPoint; i++) {
            if(priceRatings[i] >= input[entryPoint])
            leftSum += priceRatings[i]
        }
        for (let j = entryPoint + 1; j < priceRatings.length; j++) {
            if(priceRatings[j] >= input[entryPoint])
            rightSum += priceRatings[j];
        }

        if (leftSum > rightSum) {
            direction = 'Left';
            output = `${direction} - ${leftSum}`
        } else if (leftSum < rightSum) {
            direction = 'Right';
            output = `${direction} - ${rightSum}`
        } else if (leftSum = rightSum) {
            direction = 'Left';
            output = `${direction} - ${leftSum}`
        }

    }
    console.log(output);
}

solve([1, 5, 1],
    1,
    "cheap")
    
    
    
    

