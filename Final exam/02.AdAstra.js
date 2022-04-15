function adAstra(input) {
    
    let pattern = /([|#])(?<name>[A-Za-z]+ ?[A-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g;
    let listOfProducts = [];
    let foodInfo = pattern.exec(input);
    let sumCal = 0;

    while (foodInfo !== null) {
        let foodName = foodInfo.groups.name;
        let expDate = foodInfo.groups.date;
        let calories = foodInfo.groups.cal;
        sumCal += Number(calories);
        let food = [foodName, expDate, calories];
        listOfProducts.push(food);

        foodInfo = pattern.exec(input);
    }
    let lastDays = sumCal / 2000;
    console.log(`You have food to last you for: ${Math.floor(lastDays)} days!`);

    for (let item of listOfProducts) {
        let name = item[0];
        let date = item [1];
        let nutrition = item[2];
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${nutrition}`);

    }
}

// adAstra([
//     // '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]
// )

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])