function maxInteger(array) {

    let string = '';
    for (let i = 0; i < array.length; i++) {

        let isFound = true;
        for (let j = i + 1; j < array.length + 1; j++) {

            if (array[i] <= array[j]) {
                isFound = false;
                break;
            }
        }
        if (isFound) { 
            string += `${array[i]} `; 
        }
    }
    console.log(string);
}
maxInteger([1, 4, 3, 2])
maxInteger([14, 24, 3, 19, 15, 17])
maxInteger([41, 41, 34, 20])
maxInteger([27, 19, 42, 2, 13, 45, 48])