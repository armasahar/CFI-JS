/*
A  
B B  
C C C  
D D D D
 */

for(let i=1; i<=4; i++){
    let row = '';
    for(let j=1; j<=i; j++){
         let char = String.fromCharCode(64 + i);
        row += char + " "
    }
    console.log(row)
}