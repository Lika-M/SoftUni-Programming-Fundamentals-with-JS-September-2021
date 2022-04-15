function employees2(string) {

let allEmployees = [];
    for (const line of string) {
        let name = line;
        let number = line.length;
        let person = { name, number };
        allEmployees.push(person);

    }
    
    for (const person of allEmployees) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}
employees2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])