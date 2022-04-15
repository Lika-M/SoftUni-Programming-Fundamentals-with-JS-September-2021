// не е мое решението, но е 100/100
//тя е същата като Gladiators inventory от Arrays advanced exercises

function coffeeLover(arr) {
    let coffees = arr.shift().split(" ");
    let commandsCount = Number(arr.shift());
 
    let addCoffee = (array, commands) => {
        let coffeeToAdd = commands.shift();
        array.push(coffeeToAdd);
        return array;
    }
    let toRemove = (array, commands) => {
        let position = commands.shift();
        let count = Number(commands.shift());
        switch (position) {
            case "first":
                array.splice(0, count);
                break;
            case "last":
                let lastEl = array.length;
                array.splice(lastEl - count);
                break;
        }
        return array;
    }
 
    let toMove = (array, commands) => {
        let i1 = Number(commands.shift());
        let i2 = Number(commands.shift());
        let biggerI = Math.max(i1, i2)
        let smallerI = Math.min(i1, i2)
        let buffer = array.splice(biggerI, 1).join("");
        buffer = array.splice(smallerI, 1, buffer).join("");
        array.splice(biggerI, 0, buffer)
 
        return array;
    }
    let toReverse = (array) => {
        array = array.reverse();
        return array;
    }
    let toPrint = array => {
        console.log("Coffees:");
        console.log(array.join(" "));
    }
 
    for (let i = 0; i < commandsCount; i++) {
        let currentCommand = arr.shift().split(" ");
        let command = currentCommand.shift();
 
        switch (command) {
            case "Include":
                addCoffee(coffees, currentCommand);
                break;
            case "Remove":
                toRemove(coffees, currentCommand);
                break;
            case "Prefer":
                toMove(coffees, currentCommand);
                break;
            case "Reverse":
                toReverse(coffees)
                break;
        }
 
    }
    toPrint(coffees)

    }

