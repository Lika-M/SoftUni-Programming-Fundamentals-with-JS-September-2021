function factorialDivision(first, second){

    function factorial(number){
        let multiply = 1;

        for (let i = 1; i <= number; i++) {
            multiply *= i;
        }
        return multiply;
    }
    function division (a, b){
        let result = a / b;
        return result;
    }
    let multiply1 = factorial(first);
    let multiply2 = factorial(second);
    let output = division(multiply1, multiply2);

    console.log(output.toFixed(2));
}

factorialDivision(6, 2)