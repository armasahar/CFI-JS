/*
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/


const rows = 5;
for(let i = 1; i <= rows; i++) {
    let row = '';
    let num = i % 2 === 1 ? 1 : 0;     // Determine the starting number for the row
    for(let j = 1; j <= i; j++) {
        row += num + ' ';
        num = 1 - num;                 // Flip between 1 and 0
    }
    console.log(row.trim());
}
