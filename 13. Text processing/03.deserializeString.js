function deserializeString(array) {
    let arr = [];
    let j = 0;
    let line = array[j];
    while (line !== 'end') {

        line = line.split('/');
        let firstEl = line.shift().split(':');
        let letter = firstEl[0];
        let temp = firstEl[1];
        line.unshift(temp);

        for (let i = 0; i < line.length; i++) {
            let index = Number(line[i]);
            arr[index] = letter;
        }
        j++;
        line = array[j];
    }
    let output = arr.join('');
    console.log(output);

}

// deserializeString(['a:0/2/4/6',
//     'b:1/3/5',
//     'end'])

    deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
])
