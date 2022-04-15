function furniture(input) {

    let totalMoney = 0;
    let pattern = /\>{2}(?<name>[A-Z](?:.+)?)\<{2}(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;
    
    console.log(`Bought furniture:`);
    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }
        let validFurniture = pattern.exec(line);
      
        if(validFurniture !== null){
            let item = validFurniture.groups.name;
            let price = Number(validFurniture.groups.price);
            let quantity = Number(validFurniture.groups.quantity); 
            totalMoney += price * quantity;

            console.log(item);
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']


)