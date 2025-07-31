import rl from "readline-sync";
let savedps = '94944944'
function ask_password(){
    while(true){
        let password = rl.question("Enter your password: ");
        if(password === savedps){
            console.log(`Logged in successfully`);
            break;
        }else{
            console.log(`Wrong password, try again!`);
        }
}
}
ask_password();