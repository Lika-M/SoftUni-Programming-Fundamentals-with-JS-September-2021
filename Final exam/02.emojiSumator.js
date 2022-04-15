// not submitted in judge!

function emojiSumator(input) {

    let text = input.shift();
    let code = input.shift().split(':');

    let validEmojies = [];
    let totalPower = [];
    let pattern = /\s:(?<emoji>[a-z]{4,}):(\s|,|\.|\?|!)/g; //my pattern
    // let pattern = /(?<=[\s])(:[a-z]{4,}:)(?=[\s,.!?])/g; ???? only this pattern isn't mine
    let emojies = pattern.exec(text);

    let emojiFromCode = '';
    for (let el of code) {
        emojiFromCode += String.fromCharCode(el);
    }

    while (emojies !== null) {
        let emoji = emojies.groups.emoji;
        validEmojies.push(emoji);

        emojies = pattern.exec(text);
    }

    for (let item of validEmojies) {
        let power = 0;

        for (let symbol of item) {
            let number = symbol.charCodeAt(0);
            power += number;
        }
        totalPower.push(power);
    }
    totalPower = totalPower.reduce((a, b) => a + b, 0);

    if (validEmojies.includes(emojiFromCode)) {
        totalPower *= 2;
    }

    if (validEmojies.length > 0){
        console.log(`Emojis found: ${validEmojies.join(', ')}`);
    }
    console.log(`Total Emoji Power: ${totalPower}`);

}

emojiSumator([
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']);

emojiSumator([
    'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
    '97:101:117:114'
])