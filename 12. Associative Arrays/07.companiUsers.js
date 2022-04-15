function companyUsers(array){

    let companyList = {};
    for(let line of array){
        let [company, userID] = line.split(' -> ');

        if(!companyList.hasOwnProperty(company)){
            companyList[company] = [];
        }
        let idExistIndex =  companyList[company].indexOf(userID);
        if(idExistIndex === -1){
            companyList[company].push(userID);
        }
    }
    let sortedCompanies = Object.entries(companyList)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(let entries of sortedCompanies){
        console.log(entries[0]);
        for(id of entries[1]){
            console.log(`-- ${id}`);
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )