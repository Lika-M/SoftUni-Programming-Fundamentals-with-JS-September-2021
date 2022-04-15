function arrayManipulations(input) {

    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add": array.push(Number(firstNum)); 
            break;
            case "Remove": 
            let index = array.indexOf(firstNum);
            if(index !== -1){
            array.splice(index, 1);
        }
            break;
            case "RemoveAt": array.splice(firstNum, 1); break;
            case "Insert": array.splice(secondNum, 0, firstNum); break;
        }

        function add(element){
            array.push(element);
            return array;
        }
        let additing = add(firstNum);

        function removeNumber(a){
           array = array.filter(a => a !== firstNum);
           return array;
        }
        function removeAt(index){
            array.splice(index, 1);
            return array;
        }
        function insert(num, index){
            array.splice(index, 0, num);
            return array;
        }
    }
    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)