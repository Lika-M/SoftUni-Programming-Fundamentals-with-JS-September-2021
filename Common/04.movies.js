function movies(input) {

    let movies = [];
   
    for (let i = 0; i < input.length; i++) {

        let line = input[i];

        if (line.includes('addMovie')) {
            let splitLine = line.split('addMovie ');
            let name = splitLine[1];
            let movie = { name } 
            movies.push(movie);

        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(movie => movie.name === name); // method 'find'
            if(movie){
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate '); 
            let findIndex = movies.findIndex(movie => movie.name ===name); //method 'findIndex'
            if (findIndex !== -1) {
                movies[findIndex].date = date;
            }
        }
    }
   
    for (const movie of movies) {
        if(movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
            let json = JSON.stringify(movie)
            console.log(json);
        }
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