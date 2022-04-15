function towns2(array){

    // "Town", "Latitude" and "Longitude". 
    for (let line of array) {
        line = line.split(' | ');
        let town = line[0];
        let latitude = Number(line[1]).toFixed(2);
        let longitude = Number(line[2]).toFixed(2);

        let city = {town, latitude, longitude};
        console.log(city);
    }


}

towns2(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)