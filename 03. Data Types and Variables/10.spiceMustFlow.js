function spiceMustFlow(yield) {

    let days = 0;
    let totalAmount = 0;

    while (yield >= 100) {
        days++;
        totalAmount += (yield - 26); 
        yield -= 10;    
    }
    
    if(totalAmount > 0){
        totalAmount -= 26; 
    } else {
        totalAmount = 0;
    }

    console.log(days);
    console.log(totalAmount);

}
spiceMustFlow(25)
