function solve(arr) {
 
    arr = arr.map(Number);
 
    let numOfStud = arr[0];
 
  	if (numOfStud === 0) {
 
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
 
      return;
 
    }
 
    let numOfLectures = arr[1];
 
    let addBonus = arr[2];
 
    let totalBonus = 0;
 
    let arr2 = [];
 
    arr.splice(0, 3);
 
 
 
    for (let i = 0; i < numOfStud; i++) {
 
        totalBonus = arr[i] / numOfLectures * (5 + addBonus);
 
        arr2.push([totalBonus, arr[i]]);        
 
    } 
 
 
    arr2.sort((a, b) => b[0] - a[0]);
 
    // console.log(arr2);
 
    console.log(`Max Bonus: ${Math.ceil(arr2[0][0])}.`);
 
    console.log(`The student has attended ${arr2[0][1]} lectures.`);
 
 
  }