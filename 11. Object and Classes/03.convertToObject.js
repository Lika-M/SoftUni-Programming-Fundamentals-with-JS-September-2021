function convertToObject(string) {

    let object = JSON.parse(string);
    for (const key in object) {
        const value = object[key];

        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')