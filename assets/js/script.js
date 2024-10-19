
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('game-status');
const playerXScoreDisplay = document.getElementById('playerX-score');
const playerOScoreDisplay = document.getElementById('playerO-score');
const restartButton = document.getElementById('restart-button');
const instructionsButton = document.getElementById('instructions-button');
const closeInstructionsButton = document.getElementById('close-instructions-button');
const popupInstructions = document.getElementById('popup-instructions');

let gameActive = true;
let currentPlayer = 'X';
let playerXScore = 0;
let playerOScore = 0;
let gameState = ["", "", "", "", "", "", "", "", ""];

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

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

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

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.textContent = 'It\'s a draw!';
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  checkWinner();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.textContent = `Player X's turn`;
  cells.forEach(cell => (cell.textContent = ""));
}

function toggleInstructions() {
  popupInstructions.classList.toggle('hidden');
}


cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);
instructionsButton.addEventListener('click', toggleInstructions);
closeInstructionsButton.addEventListener('click', toggleInstructions);
