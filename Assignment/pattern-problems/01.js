/**

* * * * *
*       *
*       *
* * * * *

 */

for(let i = 1; i<=4; i++){
    let row = "";
for(let j=1; j<=5; j++){
    if(i === 1 || i === 4){
        row += "* "
    }else if((i === 2 || i === 3) && (j === 1 || j === 5) ){
        row += "* "
    }else{
        row += "  "
    }
}
console.log(row)
}