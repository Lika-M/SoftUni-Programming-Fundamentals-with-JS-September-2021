//решението не е мое!


function solve(input){
    let username = input.shift();
 
    for(let  i = 0; i < input.length; i++){
        let [command, firstArg, secondArg] = input[i].split(' ');
        // console.log(command);
        switch(command){
            case "Case":
                if (firstArg === "lower") {
                  //console.log(username.toLowerCase());
                  username = username.toLowerCase();
                  console.log(username);
                } else if (firstArg === "upper") {
                  //console.log(username.toUpperCase());
                  username = username.toUpperCase();
                  console.log(username);
                }
                break;
                case "Reverse":
                    indexStart = Number(firstArg);
                    indexEnd = Number(secondArg);
                    if (
                      indexStart >= 0 &&
                      indexStart < username.length &&
                      indexEnd >= 0 &&
                      indexEnd < username.length
                    ) {
                      let str = username
                        .substring(indexStart, indexEnd + 1)
                        .split("")
                        .reverse()
                        .join("");
                      console.log(str);
                    }
                    break;
            case "Cut":                
                if(username.includes(firstArg)){
                   username = username.replace(firstArg, '');
                        console.log(username);                       
                } else {
                    console.log(`The word ${username.toLowerCase()} doesn't contain ${firstArg}.`);
                }              
                break;
            case "Replace":
                for(let i = 0; i < username.length; i++){
                    if(username.includes(firstArg)){
                    username = username.replace(firstArg, '*');
                    }                   
                }
                console.log(username);
                break;
            case "Check":
                if(username.includes(firstArg)){
                    console.log("Valid");                    
                } else {
                    console.log(`Your username must contain ${firstArg}.`);
                    
                }
                break;
            default:               
                break;
        }
        
    }
}
  