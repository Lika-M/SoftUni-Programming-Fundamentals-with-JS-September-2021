function firstAndLastKNummbers(input){
let k = input.shift(0);
let firstK = input.slice(0,k).join(' ');
let lastK = input.slice(-k).join(' ');

console.log(firstK);
console.log(lastK);
}

firstAndLastKNummbers([2, 7, 8, 9])