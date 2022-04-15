function pascalCaseSplitter(string) {
    let arr = [];
    let str = string.toLowerCase();
    let word = string[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === string[i]) {
            word += string[i];
        } else {
            arr.push(word); 
            word = string[i]; 
        }
        if(i === string.length - 1){
            arr.push(word);
        }
    }
    console.log(arr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCanI');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')