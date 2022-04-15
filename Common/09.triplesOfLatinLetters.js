// function solve(n){
//     let num = Number(n);
//     let start = 97;
//     let end = 97 + num;
    
//     for(i = start; i < end; i ++){
//         for(j = start; j < end; j ++){
//             for(k = start; k < end; k ++){
//                 let firstLetter = String.fromCharCode(i);
//                 let secondLetter = String.fromCharCode(j);
//                 let thirdLetter = String.fromCharCode(k);
//                 console.log(`${firstLetter }${secondLetter}${thirdLetter}`);
//             }
//         }
//     }
// }

let text = "iglika"
let num = text.charCodeAt(5)
console.log(num);

solve("5")