function simpleCalculator(a, b, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let operation;

    switch (operator) {
        case 'multiply': operation = multiply; break
        case 'divide': operation = divide; break
        case 'add':operation = add; break
        case 'subtract': operation = subtract; break
    }
    return operation(a, b);
}

let result = simpleCalculator(5, 5, 'multiply');
console.log(result);