function characterInRange(first, second){

    let firstChar = Number(first.charCodeAt());
    let secondChar = Number(second.charCodeAt());
    let min = firstChar;
    let max = secondChar;
    
    if(firstChar > secondChar){
        min = secondChar;
        max = firstChar;
    } 
    let result = '';
    for(let i = min + 1; i < max; i++) {
        let char = String.fromCharCode(i);
        result += `${char} `;
    }
    console.log(result);
}

characterInRange('C',
'#')