/*
*   *
 * *
  *
 * *
*   *
*/

const n = 5; // Size of the pattern (always odd for a perfect X)

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1) { // Print '*' when the column is equal to the row or its mirrored position
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
