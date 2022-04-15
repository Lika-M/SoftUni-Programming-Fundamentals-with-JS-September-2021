function cutAndReverse(string){
    
let halfLength = string.length /2;
let reversedFirstStr = string.substring(0, halfLength).split('').reverse().join('');
let reversedSecondStr = string.slice(halfLength).split('').reverse().join('');
console.log(reversedFirstStr );
console.log(reversedSecondStr);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')