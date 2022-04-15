function distinctArray(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {

        if (arr.includes(array[i])) {
            continue;
        } else {
            arr.push(array[i])
        }
    }
    console.log(arr.join(' '));
}

// distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])