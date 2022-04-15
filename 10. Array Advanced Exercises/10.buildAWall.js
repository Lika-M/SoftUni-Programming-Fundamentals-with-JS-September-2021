function buildAWall(input) {
    let sum = 0;
    let price = 0;
    let feetPerDay = input;
    let output = [];
   

    while (feetPerDay.length > 0) {
        let concretePerDay = 0;
        let filtered = feetPerDay.filter(x => x < 30)
        let increases = filtered.map(x => x + 1);

        concretePerDay += 195 * increases.length;
        if(concretePerDay !== 0)
        output.push(concretePerDay);
        sum += concretePerDay;

        feetPerDay = increases;
    }
    price = sum * 1900;
    console.log(output.join(', '));
    console.log(`${price} pesos`);

}

buildAWall([21, 25, 28])