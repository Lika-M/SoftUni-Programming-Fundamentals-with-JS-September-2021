function valueOfAString(array) {
    let sum = 0;
    let stringAsArr = array.shift().split('');

    for (let letter of stringAsArr) {
        if (array[0] === "LOWERCASE") {
            let num = letter.charCodeAt();
            if (num >= 97 && num <= 122) {
                sum += num;
            }

        } else if (array[0] === 'UPPERCASE') {
            let num = letter.charCodeAt();
            if (num >= 65 && num <= 90) {
                sum += num;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString(["HelloFromMyAwesomePROGRAM",
    "LOWERCASE"]
)
valueOfAString(["AC/DC",
"UPPERCASE"]
)