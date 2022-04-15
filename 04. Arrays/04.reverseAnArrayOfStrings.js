function reverseAnArrayOfStrings(array){


for (let i = 0; i < array.length / 2; i++) {
   let currentEl = array[i];
   let newPosition = array.length - 1 - i;
   array[i] = array [newPosition];
   array[newPosition] = currentEl;
}
    console.log(array.join(" "));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])