function signChek2(a, b, c) {
    let result = a * b * c;
    if (result >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
signChek2(-1, -2, -3)