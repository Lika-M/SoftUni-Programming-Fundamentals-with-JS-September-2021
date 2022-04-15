function match(text) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = text.match(pattern);
    console.log(matches.join(' '));
    
}
function match2(text) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    let validNames = [];
    let matches = pattern.exec(text);

    while(matches !== null){
        validNames.push(matches[0]);
        matches = pattern.exec(text);
    }
    console.log(validNames.join(' '));
}



match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
match2("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")