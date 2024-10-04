// Game state variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
let scores = { X: 0, O: 0 };

// Winning combinations vertically
const winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

function updateStatus(message) {
    document.getElementById('game-status').innerText = message;
}

function checkWin() {
    let winner = null;
    winCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
        }
    });

    if (winner) {
        gameOver = true;
        updateStatus(`Player ${winner} wins!`);
        scores[winner]++;
        document.getElementById(`player${winner}-score`).innerText = scores[winner];
    } else if (!board.includes('')) {
        gameOver = true;
        updateStatus("It's a draw!");
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || gameOver) return;

    board[index] = currentPlayer;
    event.target.innerText = currentPlayer;
    checkWin();

    if (!gameOver) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus(`Player ${currentPlayer}'s turn`);
    }
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    updateStatus(`Player ${currentPlayer}'s turn`);
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
document.getElementById('restart-button').addEventListener('click', restartGame);