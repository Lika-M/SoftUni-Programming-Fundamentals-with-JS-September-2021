function makeAdictionary(array) {
    let dictionary = [];
    for (const string of array) {
        let obj = JSON.parse(string);
        
        for (const key in obj) {
            let object = { term: key, definition: obj[key] };
            let findIndex = dictionary.findIndex(obj => obj.term === key);
            if (findIndex !== -1) {
                dictionary[findIndex].definition = obj[key];
            } else {
                dictionary.push(object);
            }
            dictionary = dictionary.sort((a, b) => (a.term).localeCompare(b.term))
        }
    }
    for (const object of dictionary) {
        console.log(`Term: ${object.term} => Definition: ${object.definition}`);
    }
}

makeAdictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
])