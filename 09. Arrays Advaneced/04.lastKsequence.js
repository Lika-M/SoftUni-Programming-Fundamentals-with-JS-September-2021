function lastKsequence(n, k) {

    let array = [1];
    
    for (let i = 1; i < n; i++) {

        let previousK = array.slice(-k);
        let sum = 0;
        for (const element of previousK) {
            sum += element;
        }
        array.push(sum);

    }
    console.log(array.join(' '));

}
lastKsequence(6,3)
lastKsequence(8, 2)