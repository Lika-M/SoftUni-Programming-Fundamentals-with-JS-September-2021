function neighborhoods(array){

    let places = array.shift().split(', ');
    let map = new Map;

    for(let place of places){
        map.set(place, []);
    }

    for(let line of array){
        let [place, name] = line.split(' - ');

        if(map.has(place)){
            let person = map.get(place);
            person.push(name);
        }
    }
    
    let arrMap = [...map];
    let sorted = arrMap.sort((a, b) => b[1].length - a[1].length);

    for(let [place, names] of sorted){
        console.log(`${place}: ${names.length}`);
        
        for (let name of names){
            console.log(`--${name}`);
        }
    }
    
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Herald Street - Keity',
'Abbey Street - Liam',
'Bright Mews - Mark',
'Abbey Street - John']

)