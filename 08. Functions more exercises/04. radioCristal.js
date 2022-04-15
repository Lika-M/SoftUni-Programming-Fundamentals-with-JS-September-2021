function radioCristal(array) {

    let length = array.length;
    let neededThickness = array[0];

    for (let i = 1; i < length; i++) {
        let currentThickness = array[i];
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;
        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness > neededThickness) {

            if (currentThickness / 4 >= neededThickness) {
                currentThickness /= 4;
                cut++;
            } else if (currentThickness * 0.8 >= neededThickness) {
                currentThickness = Math.floor(currentThickness)
                currentThickness *= 0.8;
                lap++
            } else if (currentThickness - 20 >= neededThickness) {
                currentThickness = Math.floor(currentThickness)
                currentThickness -= 20;
                grind++;
            } else if (currentThickness > neededThickness) {
                currentThickness = Math.floor(currentThickness)
                currentThickness -= 2;
                etch++
            } 
        }
        if (neededThickness > currentThickness) {
            currentThickness += 1;
            xRay++
            if (xRay > 1) {
            }
        }

        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`)
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }
        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
        } 
        if (etch > 0) {
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        } if (xRay == 1)
        console.log(`X-ray x1`);
        console.log(`Finished crystal ${currentThickness} microns`);
    }
}

//  radioCristal([1375, 50000])  
radioCristal([1000, 4000, 8100])