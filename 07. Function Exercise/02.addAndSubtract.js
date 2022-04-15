function addAndSubtract(first, second, third) {
    function sum(first, second) {
        let result = first + second;
        return result;
    }

    function subtract(first, second) {
        let result = first - second;
        return result;
    }

    let addition = sum(first, second);
    let result = subtract(addition, third);
    return result;
}

let output = addAndSubtract(23,
    6,
    10
)
console.log(output);