/*
  1
 121
12321
1234321
*/

const rows = 4;
for(let i = 1; i <= rows; i++) {
    let line = '';
    for(let s = 1; s <= rows - i; s++) {  // Print leading spaces
        line += ' ';
    }
    for(let num = 1; num <= i; num++) {    // Print increasing numbers
        line += num;
    }
    for(let num = i - 1; num >= 1; num--) {   // Print decreasing numbers  
        line += num;
    }
    console.log(line);
}
