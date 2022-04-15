function ladybugs(input) {
    let ladybugs = [];
    let numOfBugs = input[0];
 
    // Initialization (fill with 0s everywhere)
    for (let i = 0; i < numOfBugs; i++) {
        ladybugs[i] = '0';
    }
 
    // Convert ladybugs' indexes to array
    let bugsIndex = input[1].split(" ");
 
    // Place ladybugs at their positions
    for (let i = 0; i < bugsIndex.length; i++) {
        if (bugsIndex[i] !== '' && numOfBugs > Number(bugsIndex[i])) {
            let posIndex = Number(bugsIndex[i]);
            ladybugs[posIndex] = '1';
        }       
    }
 
    // Read instructions (array of instructions)
    let instructions = [];
    for (let i = 2; i < input.length; i++) {
        instructions[i - 2] = input[i];
    }   
 
    // Apply each set of instructions
    for (let i = 0; i < instructions.length; i++) {
        let instruction = instructions[i].split(" ");       // convert instruction to array 
        let posIndex = Number(instruction[0]);              // get ladybug from array
        let posDir = instruction[1];                        // read direction from array
        let posSteps = Number(instruction[2]);              // move ladybugs x steps from array
        
        // Move only ladybugs (pick only 1s)
        if (ladybugs[posIndex] === '1') {
 
            // Remove ladybug from this position
            ladybugs[posIndex] = '0';
            switch (posDir) {
                case 'right':
                // Check if there's already a ladybug
                if (ladybugs[posIndex + posSteps] === '1') {
                    posIndex += posSteps;
                }
                ladybugs[posIndex + posSteps] = '1';                            
                break;
 
                case 'left':
                // Check if there's already a ladybug     
                if (ladybugs[posIndex - posSteps] === '1') {
                    posIndex -= posSteps;
                }
                ladybugs[posIndex - posSteps] = '1';
                break;
            }
        }
    }
 
    // Limit array
    if (ladybugs.length > numOfBugs) {
        ladybugs.length = numOfBugs;
    }
 
    // Prepare output
    let output = '';
    for (let i = 0; i < ladybugs.length; i++) {
        output += `${ladybugs[i]} `;
    }
    console.log(output);
}