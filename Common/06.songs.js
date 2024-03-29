function songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let n = array.shift();
    let type = array.pop();

    for (let line of array) {
        let [typeList, name, time] = line.split('_');

        let song = new Song(typeList, name, time);

        if (song.typeList === type || type === 'all') {
            console.log(song.name);
        }  
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// )

// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
//     )

    songs([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
        )