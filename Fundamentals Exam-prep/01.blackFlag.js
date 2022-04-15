function blackFlag(array) {
    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let target = Number(array[2]);
    let sum = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            dailyPlunder *= 1.5;
        } else {
            dailyPlunder = Number(array[1]);
        }
        sum += dailyPlunder;
        if (i % 5 === 0) {
           sum *= 0.7;
        }
    }
    let percentage = sum / target * 100;
    if(sum >= target){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["5",
    "40",
    "100"])
blackFlag(["10",
    "20",
    "380"])
