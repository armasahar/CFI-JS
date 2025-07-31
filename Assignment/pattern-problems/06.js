const rows = 8;
const mid = rows / 2;

for (let i = 0; i < rows; i++) {
    let spaces, stars;
    if (i < mid) {
        spaces = mid - i - 1;
        stars = 2 * i + 1;
    } else {
        spaces = i - mid;
        stars = 2 * (rows - i - 1) + 1;
    }
    let row = '';
    for (let s = 0; s < spaces; s++) row += ' ';
    for (let j = 0; j < stars; j++) row += '*';
    console.log(row);
}
