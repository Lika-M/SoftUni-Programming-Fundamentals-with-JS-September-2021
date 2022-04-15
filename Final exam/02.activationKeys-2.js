///problem of final exam retake 2019!
////this code is not mine!

function actKeys(inputString) {
    let regex = /[a-zA-Z0-9]{16,25}/;
    let areaInput = inputString[0].split('&');
    let i = 0;
    let ans = [];
    for (let j = 0; j < areaInput.length; j++) {
        let pattern = regex.exec(areaInput[j]);
        if (pattern != null) {
            let keyPassedTest = areaInput[j].split('');
            let newKey = [];
            let group = '';
            keyPassedTest.forEach(simbol => {
                if (keyPassedTest.length === 16) {
                    if (isNaN(simbol)) {
                        group += simbol.toUpperCase();
                    } else {
                        group += Math.abs(Number(simbol) - 9);
                    }
                    i++;
                    if (i === 4) {
                        newKey.push(group);
                        group = ''
                        i = 0;
                    }
                } else {
                    if (isNaN(simbol)) {
                        group += simbol.toUpperCase();
                    } else {
                        group += Math.abs(Number(simbol) - 9);
                    }
                    i++;
                    if (i === 5) {
                        newKey.push(group);
                        group = ''
                        i = 0;
                    }
                }
            });
            ans.push(newKey.join('-'));
        }
    }
    console.log(ans.join(', '));
}