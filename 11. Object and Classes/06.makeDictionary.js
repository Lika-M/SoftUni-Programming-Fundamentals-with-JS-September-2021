function solve(array) {
    let dictionary = [];
    for (const objects of array) {
        let obj = JSON.parse(objects);

        for (const key in obj) {
            let term = key;
            let definition = obj[key];
            let list = { term, definition };

            let findObj = dictionary.find(obj => obj['term'] === term);
            if (findObj) {
                findObj.definition = definition;
            } else {
                dictionary.push(list);
            }
        }
    }
    dictionary.sort((a, b) => a['term'].localeCompare(b['term']));

    for (const obj of dictionary) {
        console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Bus":"proba"}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)