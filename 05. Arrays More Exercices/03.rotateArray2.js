function rotateArray(array) {
    let rotations = Number(array.pop());
    if (rotations > array.length) {
        rotations = rotations % array.length;
    }
    let newArr = [];
    for (let i = 1; i <= rotations; i++) {
    
        let tempLastEl = array.pop();
        newArr.push(tempLastEl);
        
        for (const num of array) {
            newArr.push(num);
        }
        array = newArr;
        newArr = [];
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])	//3 4 1 2)
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])