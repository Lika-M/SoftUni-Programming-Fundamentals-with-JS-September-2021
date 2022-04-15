function numbers(string) {
    let array = string.split(' ').map(Number);
    let average = array.reduce((sum, a) => sum + a) / array.length;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > average){
            result.push(element)
        }
    }
    
    result.sort((a, b) => b - a);
    let output = result.slice(0, 5);
    if(output.length <1){
        console.log('No');
    } else {   
        console.log(output.join(' '));
    }

}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')