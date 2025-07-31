/*
*******
 *****  
  ***  
   *
 */

  let starsCount = 7

for(let i=1; i<=4; i++){
    let row = '';
    for(let k=1; k<i; k++){
        row += " "
    }
    for(let j=1; j<=starsCount; j++){
        row += "*"
    }
console.log(row)
starsCount -= 2;
}