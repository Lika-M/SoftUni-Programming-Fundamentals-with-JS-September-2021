function softUniBar(input) {

    let template = /%(?<name>[A-z][a-z]+)%.*<(?<product>\w+)>.*\|(?<count>\d+)\|.*?(?<price>\d+(\.\d+)*)\$/;
    let totalIncome = 0;

    while (input[0] !== 'end of shift') {
        line = input.shift();
        let arr = template.exec(line);

        if (arr !== null) {
            let name = arr.groups.name;
            let product = arr.groups.product;
            let count = arr.groups.count;
            let price = arr.groups.price;
            let income = Number(count) * Number(price);
            totalIncome += income;
            
            console.log(`${name}: ${product} - ${income.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)

softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)