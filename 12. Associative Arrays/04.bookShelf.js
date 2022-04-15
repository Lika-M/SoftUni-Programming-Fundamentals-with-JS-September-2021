function bookShelf(input) {

    let shelves = {};

    for (let line of input) {

        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelves[id]) {
                shelves[id] = { genre: genre, booksInfo: [] };
            }

        } else {
            let [name, rest] = line.split(': ');
            let [autor, genre] = rest.split(', ');

            let foundGenre = Object.values(shelves).find(x => x.genre === genre);

            if (foundGenre) {
                let bookInfo = `${name}: ${autor}`;
                foundGenre.booksInfo.push(bookInfo)
            }
        }
    }
    let sortedBooks = Object.entries(shelves)
    .sort((a, b) => b[1].booksInfo.length - a[1].booksInfo.length);
  
    for( let row of sortedBooks){
        console.log( `${row[0]} ${row[1].genre}: ${row[1].booksInfo.length}`)
        for(let item of row[1].booksInfo){
            console.log(`--> ${item}`); 
        }
    }
}


bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
)

console.log(' ');

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])