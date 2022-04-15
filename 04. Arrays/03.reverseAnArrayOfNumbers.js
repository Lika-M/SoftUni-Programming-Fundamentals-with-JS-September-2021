function reversAnArrayOfNumbers(n, numbers){

   let array = [];

   for(let i = 0; i < n; i++){
       array.push(numbers[i]);
        // array[i] = numbers[i];
   }
   
   let output = '';
   for (let j = array.length - 1; j >= 0 ; j--) {
       let newElement = array[j]
       output += `${newElement} `
       
   }
   console.log(output);
}
reversAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reversAnArrayOfNumbers(4, [-1, 20, 99, 5])