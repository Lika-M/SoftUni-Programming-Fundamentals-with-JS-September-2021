function personInfo(str1, str2, str3) {

    let person = {};
    person.firstName = str1;
    person['lastName']= str2;
    person.age = str3;
    return person;
}


console.log(personInfo("Peter",
    "Pan",
    "20"
));
