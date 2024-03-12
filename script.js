let currentPlayer = "x_image_path.jpg.png";
let currentPlayerImage = document.createElement('img');
currentPlayerImage.src = currentPlayer
let board = ["", "", "", "", "", "", "", "", ""];

function cellClicked(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    render();
    if (checkWinner(currentPlayer)) {
      document.getElementById("message").innerHTML = `
  <div>
    <img src="${currentPlayer}" alt="${currentPlayer} wins!" style="max-width: 50px; max-height: 50px;">
    <div>${currentPlayer === "x_image_path.jpg.png" ? "Dorian" : "Dani"} wins!</div>
  </div>`;
    } else if (board.every(cell => cell !== "")) {
      document.getElementById("message").innerText = "It's a draw!";
    } else {
     
      currentPlayer = currentPlayer === "x_image_path.jpg.png" ? "o_image_path.jpg.png" : "x_image_path.jpg.png";
    }
  }
}

function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === player);
  });
}

function render() {
  board.forEach((cell, index) => {
    const cellElement = document.getElementsByClassName("cell")[index];
    if (cell !== "") {
      const cellImage = document.createElement('img');
      cellImage.src = cell;
      cellElement.innerHTML = '';
      cellElement.appendChild(cellImage);
    } else {
      cellElement.innerText = "";
    }
  });
}

function reset() {
  currentPlayer = "x_image_path.jpg.png";
  board = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("message").innerText = "";
  render();
}