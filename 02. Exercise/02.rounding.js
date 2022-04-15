function rounding (num, prec){

    let ourNumber = num;
    let precision = prec;
    
    if(precision > 15){
        precision = 15;
    }
    let result = ourNumber.toFixed(precision);
    console.log((parseFloat(result)));
}
rounding(3.1415926535897932384626433832795,2)