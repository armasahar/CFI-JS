//Q1. Take User Input Until They Type “exit”. Keep accepting input from the user in a loop. Stop the loop only when the user types "exit".

import rl from "readline-sync";

function userInput(){
    while(true){
        let Input = rl.question("Type anything: ");
    
        if(Input === 'exit'){
            console.log(`Exiting...`);
            process.exit();
        }
        else{
            console.log(Input);
        }
    }

}

userInput();