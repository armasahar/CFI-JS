/*
1  
2 3  
4 5 6  
7 8 9 10
*/

let count = 1;

for(let i=1; i<=4; i++){
    let row = '';
    for(let j=1; j<=i; j++){
        row += count + " "
        count++
    }
    console.log(row)
}