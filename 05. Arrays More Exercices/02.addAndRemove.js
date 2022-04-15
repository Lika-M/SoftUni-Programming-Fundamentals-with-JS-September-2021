function addAndRemove(array) {

    let arr = [];
    let currentNum = 1;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
       
        if (command === 'add') {
            arr.push(currentNum);
        } else if (command === 'remove') {  
            arr.pop();
        }

        currentNum++;
    }
    if(arr.length <= 0){
        console.log('Empty');
    } else {
        console.log(arr.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove']	)