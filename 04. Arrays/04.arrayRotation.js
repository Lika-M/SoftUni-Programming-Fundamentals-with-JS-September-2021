function arrayRotation(array, num) {

    let rotations = 1;
    while (rotations <= num) {

        let element = array.shift();
        array[array.length] = element;

        rotations++
    }
    let result = array.join(" ")
    console.log(result);
} 
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)