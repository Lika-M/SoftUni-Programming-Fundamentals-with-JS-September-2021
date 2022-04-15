function printGrades(grade){

    if(grade >= 2 && grade < 3){
        console.log('Fail (2)');
    } else if (grade < 3.5){
        console.log(`Poor (${grade.toFixed(2)})`);
  
    } else if ( grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
        
    } else if(grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
       
    }else if( grade <= 6.0){
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

printGrades(2.70)
printGrades(3.50)
printGrades(5.70)