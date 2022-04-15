function guineaPig(array) {
    let food = Number(array[0]) * 1000;
    let hay = Number(array[1]) * 1000;
    let cover = Number(array[2]) * 1000;
    let weight = Number(array[3]) * 1000;
    let isNotEnought = false;

    for (let day = 1; day <= 30; day++) {
        food -= 300;
        if (day % 2 === 0) {
            hay -= food * 0.05;
        }
        if (day % 3 === 0) {
            cover -= weight / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            isNotEnought = true;
            break;
        }
    }
    if (isNotEnought) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    }

}
guineaPig(["10",
    "5",
    "5.2",
    "1"])

guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])

guineaPig(["9",
    "5",
    "5.2",
    "1"])
