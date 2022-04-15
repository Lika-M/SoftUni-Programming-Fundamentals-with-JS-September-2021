function catCreator(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const data of array) {
        let [name, age] = data.split(' ');
        let cat = new Cat(name, age);
        cat.meow()
    }

}

catCreator(['Mellow 2', 'Tom 5'])
