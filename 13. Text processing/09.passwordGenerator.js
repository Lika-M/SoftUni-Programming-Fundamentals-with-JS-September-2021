function passwordGenerator(array) {
    let concat = array[0] + array[1];
    let letters = array[2];
    let vocals = 'aeiou';
    let list = '';

    let count = 0;
    for (let i = 0; i < concat.length; i++) {
        if (vocals.includes(concat[i])) {
            if (count >= letters.length) {
                count = 0;
            }
            list += letters[count].toUpperCase();
            count++
        } else {
            list += concat[i];

        }
    }
  let result = list.split('').reverse().join('');
 
  console.log(`Your generated password is ${result}`);
  

}

passwordGenerator([
    'easymoneyeazylife',
'atleasttencharacters',
'absolute'
])