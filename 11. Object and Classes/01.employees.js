function employees(array) {

    let allEmployees = [];

    for (const personalData of array) {
        let name = personalData
        let personalNumber = name.length;

        let employee = { name: name, number: personalNumber }
        allEmployees.push(employee);
    }

  for (const data of allEmployees) {
      console.log(`Name: ${data.name} -- Personal Number: ${data.number}`);
  }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)