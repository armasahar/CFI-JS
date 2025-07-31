/*
1  2  3  4
12       5
11       6
10 9  8  7
*/


const n = 4;
const matrix = Array.from({ length: n }, () => Array(n).fill(0));

let num = 1;
let top = 0, bottom = n - 1;
let left = 0, right = n - 1;

while (num <= n * n) {
  // Traverse from left to right on the top row
  for (let i = left; i <= right && num <= n * n; i++) {
    matrix[top][i] = num++;
  }
  top++;

  // Traverse down on the right column
  for (let i = top; i <= bottom && num <= n * n; i++) {
    matrix[i][right] = num++;
  }
  right--;

  // Traverse from right to left on the bottom row
  for (let i = right; i >= left && num <= n * n; i--) {
    matrix[bottom][i] = num++;
  }
  bottom--;

  // Traverse up on the left column
  for (let i = bottom; i >= top && num <= n * n; i--) {
    matrix[i][left] = num++;
  }
  left++;
}

// Print the matrix
for (let i = 0; i < n; i++) {
  let line = '';
  for (let j = 0; j < n; j++) {
    line += matrix[i][j].toString().padEnd(3, ' ');
  }
  console.log(line.trim());
}
