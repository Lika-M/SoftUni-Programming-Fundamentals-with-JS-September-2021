function rotateArray(array) {
    let rotations = Number(array.pop());

    if(rotations > array.length){
        rotations = rotations % array.length;
    }
    for (let i = 1; i <= rotations; i++) {

        let extractedEl = array.pop();
        array.unshift(extractedEl);
    }
    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4', '2'])	//3 4 1 2)
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])