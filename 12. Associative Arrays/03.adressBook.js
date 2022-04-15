function adressBook(input) {

    let data = {};
    for (const line of input) {
        let [name, adress] = line.split(':');
        data[name] = adress;
    }
    let keys = Object.keys(data);
    let sortedKeys = keys.sort((a, b) => a.localeCompare(b));
    
    for (const key of sortedKeys) {
        console.log(`${key} -> ${data[key]}`);
    }
}




adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])
