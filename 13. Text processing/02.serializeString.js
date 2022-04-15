function serializeString(input) {
    let str = input[0];

    let list = {};
    for (let i = 0; i < str.length; i++) {
        if (!list[str[i]]) {
            list[str[i]] = [i];
        }
        else {
            list[str[i]].push(i);
        }
    }
    for (let el of Object.entries(list)) {
        let index = el[1].join('/')
        let output = `${el[0]}:${index}`;
        console.log(output);
    }

}
serializeString(["avjavamsdmcalsdm"])
