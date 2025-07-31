/*
    *
   * *
  * * *
 * * * * 
* * * * * 

*/

// let n =5;

// for(let i= 1; i<=n; i++){
//     let row ='';

//     for(let j=1; j<= n-i; j++){
//         row += " ";
//     }

//     for(let k=1; k<=i-1; k++){
//         row += '* ';
//     }
// console.log(row)
// }


//another method using string methods:

for(let i=1; i<=5; i++){
    let space = " ".repeat(5-i);
    let star = "* ".repeat(i);
    console.log(space + star);
}