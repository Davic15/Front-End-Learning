/* 
    Chessboard
*/

let size = 15;
let board = '';
for (let i = 1; i <= size; i++){
    for (let j = 1; j <= size; j++) {
        if (i % 2 == 1){
            // Odd
            board = board + (j % 2 == 1 ? " ": "#")
        } else {
            // Even
            board = board + (j % 2 == 1 ? "#": " ");
        }
    }
    board = board + "\n";
}
console.log(board);