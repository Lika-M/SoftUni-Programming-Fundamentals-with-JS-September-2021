function shoppingList(array) {

    let list = array.shift().split('!');
    let i = 0;
    let command = array[i];

    while (command !== 'Go Shopping!') {
        let line = command.split(' ');
        let toDo = line[0];
        let item = line[1];
        let newItem = line[2];

        switch (toDo) {
            case 'Urgent':
                if (!isExist(list, item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (isExist(list, item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                }
                break;
            case 'Correct':
                if (isExist(list, item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (isExist(list, item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                    list.push(item);
                }
                break;
        }
        i++;
        command = array[i];
    }
    console.log(list.join(', '));

    function isExist(list, item) {
        if (list.includes(item)) {
            return true;
        }
    }

}

shoppingList(["Tomatoes!Potatoes!Bread!",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
