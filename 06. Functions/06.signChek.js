function signChek(num1, num2, num3) {

    let result = '';
    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        result = 'Positive'
    } else if (num1 >= 0 && num2 >= 0 && num3 < 0) {
        result = 'Negative'
    } else if (num1 >= 0 && num2 < 0 && num3 < 0) {
        result = 'Positive'
    } else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
        result = 'Negative'
    } else if (num1 < 0 && num2 >= 0 && num3 < 0) {
        result = 'Positive'
    } else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
        result = 'Negative'
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = 'Negative'
    } else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
        result = 'Negative'
    } else if (num1 < 0 && num2 <0 )
}