function pointvalidation(array) {

    function distanceBetween(a, b) {
        let distance = Math.sqrt(a * a + b * b);
        return distance;
    }
 
    let x1 = array[0];
    let y1 = array[1];
    let distance1 = distanceBetween(x1, y1);
    if(distance1 % 1 === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    let x2 = array[2];
    let y2 = array[3];
    let distance2 = distanceBetween(x2, y2);
    if(distance2 % 1 === 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let x = x2 - x1;
    let y = y2 - y1;
    let distance = distanceBetween(x, y);
    if(distance % 1 === 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
// pointvalidation([3, 0, 0, 4])

pointvalidation([2, 1, 1, 1])