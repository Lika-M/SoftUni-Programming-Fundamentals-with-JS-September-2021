function movies(input) {

    let list = [];
    for (const line of input) {
        let command = line.split(' ');

        let film = {}
        if (command[0] === 'addMovie') {
            command.shift();
            let filmName = command.join(' ');
            film['name'] = filmName;
            list.push(film);

        } else if (command.includes('directedBy')) {
            let index = command.indexOf('directedBy');
            let filmName = command.slice(0, index).join(' ');
            let directorName = command.slice(index + 1).join(' ');
            //use find object:
            let findFilm = list.find(obj => obj['name'] === filmName)
            if (findFilm) {
                findFilm['director'] = directorName;
            }

        } else if (command.includes('onDate')) {
            let index = command.indexOf('onDate');
            let filmName = command.slice(0, index).join(' ');
            let date = command.slice(index + 1).join(' ');
            //use findIndex of array:
            let findIndex = list.findIndex(obj => obj['name'] === filmName);
            if(findIndex !== -1){
                let film = list[findIndex];
                film['date'] = date;
            }
        }
    }
    list = list.filter(obj => obj['date'] && obj['director']);
    for (const film of list){
        film = film.sort((a, b) => a.localeCompare(b))
    } {
        
    }
   
    
    for (const film of list) {
        let json = JSON.stringify(film);
        console.log(json);
    }


}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)