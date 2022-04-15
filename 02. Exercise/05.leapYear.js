function leapYer(year){

    let ourYear = year;
    if((ourYear % 4 === 0 && ourYear % 100 !== 0 ) || ourYear % 400 !== 0){
    console.log("yes");
    } else {
        console.log("no");
    }
}
leapYer(4)