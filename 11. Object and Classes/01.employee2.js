function employee2(array) {
    // create class:
    class Employee {
        constructor(string) {
            this.name = string;
            this.id = string.length;
        }
        // create method:
        print() {
            return `Name: ${this.name} -- Personal Number: ${this.id}`
        }
    }
    // for (const line of array) {
    //     let obj = new Employee(line);
    //     console.log(obj.print());
    // }

    //              this also is working!
    // array.map(line => new Employee(line)).forEach(obj => {
    //     console.log(obj.print());
    // });

    //                 this also:
     array.map(string => new Employee(string))
        .map(obj =>  console.log(obj.print()));
}

employee2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)