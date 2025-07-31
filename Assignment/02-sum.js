//Q2. Sum Positive Numbers Until a Number Divisible by 7 is Entered. Continuously ask the user for a positive number. Keep adding the numbers. Stop the loop when a number divisible by 7 is entered. Do NOT include that number in the sum.


import rl from "readline-sync";

function sum(){
    let sumOfNum = 0;
    while(true){
        let userInput = rl.questionFloat("Enter any number: ");
        sumOfNum += userInput

        if(userInput % 7 == 0){
            console.log(`${userInput} is divisible by 7 so the sum of all the positive number entered by the user is ${sumOfNum}`)
            process.exit();
        }
    }

}

sum();