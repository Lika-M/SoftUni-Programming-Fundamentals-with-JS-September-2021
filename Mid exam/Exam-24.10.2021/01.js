function solve(input) {

    let biscuitsPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let otherFactory = Number(input[2]);

    let sum = 0;
    for (let i = 1; i <= 30; i++) {

        let allBisquits = biscuitsPerDay * workers;
        if (i % 3 === 0) {
            sum += Math.floor(allBisquits * 0.75);
        } else {
            sum += allBisquits
        }
    }

    let diff = Math. abs(sum - otherFactory);
    let percent = diff / otherFactory * 100;
console.log(`You have produced ${sum} biscuits for the past month.`);
if(sum >otherFactory){

    console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
}
else {
    console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
}

}

solve(["78",
    "8",
    "16000"])

solve(["163",
    "16",
    "67020"])
