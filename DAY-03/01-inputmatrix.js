import readlineSync from "readline-sync";

export function inputMatrix() {
  let rows = readlineSync.questionInt("Enter the number of rows: ");
  let columns = readlineSync.questionInt("Enter the number of columns: ");

  let array = new Array(rows);
  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns);
  }

  console.log("Enter the elements of the matrix:");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j] = readlineSync.questionInt(`array[${i}][${j}] = `);
    }
  }

  return array; 
}

// export default inputMatrix -- another way to import export (without using {})