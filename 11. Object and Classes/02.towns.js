function towns(values) {
    let townData = []

    // for (const line of values) {
    //     let [town, latitude, longitude] = line.split(' | ');
    //     let data = {
    //         town,
    //         latitude: Number(latitude).toFixed(2),
    //         longitude: Number(longitude).toFixed(2)
    //     }
    //     townData.push(data);
    // }
    // for (const objects of townData) {
    //     console.log(objects);
    // }

    values.map(line => {
        let [town, latitude, longitude] = line.split(' | ');
        let data = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(data);
    });

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

towns(['Plovdiv | 136.45 | 812.575'])