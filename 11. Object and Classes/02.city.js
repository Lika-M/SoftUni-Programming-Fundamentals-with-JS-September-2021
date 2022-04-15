
function sity(object) {

    for (const entry of Object.entries(object)) {
        let [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}
// it's the same:
function sity3(object) {
    let entries = Object.entries(object); // return array ot tuples;
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
        [
            'addMovie Fast and Furious',
            'addMovie Godfather',
            'Inception directedBy Christopher Nolan',
            'Godfather directedBy Francis Ford Coppola',
            'Godfather onDate 29.07.2018',
            'Fast and Furious onDate 30.07.2018',
            'Batman onDate 01.08.2018',
            'Fast and Furious directedBy Rob Cohen'
            ]
            
    }
}
// it's the same:
function sity4(object){
    let tuples = Object.entries(object).forEach(([key,value]) => console.log(`${key} -> ${value}`));
}

function sity5(object){
    let keys = Object.keys(object);
    for (const key of keys) {
        let value = object[key];
        console.log(`${key} -> ${value}`);
    }
}


function sity2(object) {
    for (const key in object) {
        const value = object[key];

        console.log(`${key} -> ${value}`);
    }
}




sity5({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)