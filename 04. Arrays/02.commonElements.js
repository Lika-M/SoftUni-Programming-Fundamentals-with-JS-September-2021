function commonElements(array1, array2){

    for(let i = 0; i < array1.length; i ++){
        for( j = 0; j < array2.length; j++){

            let firstEl = array1[i];
            let seconEl = array2[j];

            if(firstEl === seconEl){
                console.log(firstEl);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)