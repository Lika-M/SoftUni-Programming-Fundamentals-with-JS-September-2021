function partyTime(input) {

    let list = {
        vip: [],
        regular: []
    }
    let indexOfParty = input.indexOf('PARTY');
    //  for adding:
    let guests = input.slice(0, indexOfParty);
    // push in the list:
    for (let guest of guests) {

        if (isNaN(guest[0])) {
            list.regular.push(guest);
        } else {
            list.vip.push(guest);
        }
    }
    //  deleting:
    let forDeleting = input.slice(indexOfParty + 1);

    for (let guest of forDeleting) {
        if (list.vip.includes(guest)) {
            let index = list.vip.indexOf(guest);
            list.vip.splice(index, 1);
        } else if (list.regular.includes(guest)) {
            let index = list.regular.indexOf(guest);
            list.regular.splice(index, 1);
        }
    }
    console.log(list.vip.length + list.regular.length);
    console.log(list.vip.join('\n'));
    console.log(list.regular.join('\n'));
}

// function problem() {
//     let num = '7IK9Yo0h';
//     if(typeof (Number(num[0]) === 'number'))
//     console.log("yes");
// }
// problem()

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])