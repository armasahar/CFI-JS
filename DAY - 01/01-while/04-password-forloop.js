import rl from "readline-sync"

const savedps = '92905'

function password(){
    for(;;){
        let password = rl.question("Enter your password: ");
                if(password === savedps){
                    console.log(`Logged in successfully`);
                    break;
                }else{
                    console.log(`Wrong password, try again!`);
                }
    }
}
password();