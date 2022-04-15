function rightPlace(firstStr, char, secondStr) {

    let result = firstStr.replace("_", char);

    let output = (result === secondStr) ? "Matched" : "Not Matched"

    console.log(output);

}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')