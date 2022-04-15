function fancyBarcodes(input) {

    let pattern = /(@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;
    let productPattern = /[0-9]/g;

    let num = input.shift();

    for (let i = 0; i < num; i++) {
        let line = input[i];
        let barcode = pattern.exec(line);

        if (barcode !== null) {
            let product = barcode.groups.barcode;
            let productGroup = product.match(productPattern);
            
            if (productGroup !== null) {
                output = `Product group: ${productGroup.join('')}`
            } else {
                output = `Product group: 00`;
            }
            console.log(output);

        } else {
            console.log(`Invalid barcode`);
        }
    }

}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
console.log('');

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

///let pattern = /(@#+)(?<barcode>[A-Z][a-zA-Z(?<digits>0-9)]{4,}[A-Z])\1/g
 //(@#+)(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])\1/;