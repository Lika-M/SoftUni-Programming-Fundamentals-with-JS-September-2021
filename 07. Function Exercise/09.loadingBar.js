function loadingBar(num) {
    let result = '';
    let add = '';

    if (num === 100) {
        console.log(`${100}% Complete!`);
        console.log('[%%%%%%%%%%]');

    } else {
        let tens = num / 10;
        for (let j = 1; j <= tens; j++) {
            add += '%';
        }
        for (let k = tens; k < 10; k++) {
            add += '.';
        }

        add.split('');
        result += `${num}% [${add}]`;

        console.log(result);
        console.log('Still loading...');
    }
}

loadingBar(50)

