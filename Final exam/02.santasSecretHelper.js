function santasSecretHelper(input) {

    let pattern = /@(?<name>[A-Za-z]+)(?:[^\|@|\-|\!|:|\>]+)!(?<type>G|N)!/;
    let key = Number(input.shift());
    
    let line = input.shift();
    while (line !== 'end') {
        
        let message = '';
        for (let symbol of line) {
            symbol = String.fromCharCode(symbol.charCodeAt(0) - key);
            message += symbol
        }
       
        let match = pattern.exec(message);

        if (match !== null) {
            let name = match.groups.name;
            let type = match.groups.type;
            if (type === 'G') {
                console.log(name);
            } 
        }

        line = input.shift();
    }
}

santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
])

santasSecretHelper([
    "3",
"N}eideidmk$'(mnyenmCNlpamnin$J$",
"ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
"ppqmkkkmnolmnnCEhq/vkievk$Q$",
"yyegiivoguCYdohqwlqh/kguimhk$J$",
"end"
])