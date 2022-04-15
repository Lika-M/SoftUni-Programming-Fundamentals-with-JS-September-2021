function classLaptop() {

    class Laptop {
        constructor(quality) {

            this.info = {};
            this.quality = quality;
        }
        getterPrice(age, quality) {
            let price = (800 – (age * 2) + (quality * 0.5));
            return price;
        }

        isOn = false;
        turnOn() {
            return isOn = true;
        }
        turOff() {
            return isOn = false;
        }
        // – function that returns the producer, age and brand as JSON
        showInfo(producer, age, brand) {
            return JSON.stringify(info);
        }


    }

}


let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
