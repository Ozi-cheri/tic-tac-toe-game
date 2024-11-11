// Select DOM elements for game interactions
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('game-status');
const playerXScoreDisplay = document.getElementById('playerX-score');
const playerOScoreDisplay = document.getElementById('playerO-score');
const restartButton = document.getElementById('restart-button');
const instructionsButton = document.getElementById('instructions-button');
const closeInstructionsButton = document.getElementById('close-instructions-button');
const popupInstructions = document.getElementById('popup-instructions');

// Game state variables
let gameActive = true;
let currentPlayer = 'X'; // Player X starts first
let playerXScore = 0;
let playerOScore = 0;

let gameState = ["", "", "", "", "", "", "", "", ""]; // Empty game grid

// Winning conditions for Tic-Tac-Toe
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Updates cell with the current player's mark
function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
}

// Switches to the other player's turn
function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Update turn status
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Checks for a winner or a draw
function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  // Declare the winner and stop the game
  if (roundWon) {
    statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;

    if (currentPlayer === 'X') {
      playerXScore++;
      playerXScoreDisplay.textContent = playerXScore;
    } else {
      playerOScore++;
      playerOScoreDisplay.textContent = playerOScore;
    }

    return;
  }

  // Check if it's a draw
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.textContent = 'It\'s a draw!';
    gameActive = false;
    return;
  }
  handlePlayerChange(); // Switch to the next player
}

// Handles cell click, updates the cell and checks for a winner
function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  // Ignore click if cell is already played or game is over
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  checkWinner();
}

// Restarts the game
function handleRestartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.textContent = `Player X's turn`;
  cells.forEach(cell => (cell.textContent = ""));
}

// Toggles visibility of the instructions popup
function toggleInstructions() {
  popupInstructions.classList.toggle('hidden');
}

// Add event listeners to game cells and buttons
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);
instructionsButton.addEventListener('click', toggleInstructions);
closeInstructionsButton.addEventListener('click', toggleInstructions);