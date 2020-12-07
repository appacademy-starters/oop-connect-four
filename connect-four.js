import { Game } from "./game.js";

let game = undefined;

function updateUI() {
  const boardHolder = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name");
  const clickTargets = document.getElementById("click-targets");

  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();

    for(let rowIndex = 0; rowIndex <= 5; rowIndex++) {
      for(let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        const square = document.querySelector(`#square-${rowIndex}-${columnIndex}`);
        square.innerHTML = '';

        const playerNumber = game.getTokenAt(rowIndex, columnIndex);
        if (playerNumber === 1) {
          const token = document.createElement('div');
          token.classList.add('token');
          token.classList.add('black');
          square.appendChild(token);

        } else if (playerNumber === 2) {
          const token = document.createElement('div');
          token.classList.add('token');
          token.classList.add('red');
          square.appendChild(token);

        }
      }
    }

    if (game.currentPlayer === 1) {
      clickTargets.classList.add("black");
      clickTargets.classList.remove("red");
    } else {
      clickTargets.classList.add("red");
      clickTargets.classList.remove("black");
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");
  const newGameButton = document.getElementById("new-game");
  const clickTargets = document.getElementById("click-targets");

  function enableButton() {
    const player1Value = player1Input.value;
    const player2Value = player2Input.value;

    newGameButton.disabled =
      player1Value.length === 0 || player2Value.length === 0;
  }

  player1Input.addEventListener("keyup", () => {
    enableButton();
  });

  player2Input.addEventListener("keyup", () => {
    enableButton();
  });

  newGameButton.addEventListener("click", (e) => {
    game = new Game(player1Input.value, player2Input.value);
    player1Input.value = "";
    player2Input.value = "";
    enableButton();
    updateUI();
  });

  clickTargets.addEventListener("click", (e) => {
    const targetId = e.target.id;
    if(!targetId.startsWith('column-')) return;

    const columnIndex = Number.parseInt(targetId[targetId.length - 1]);

    game.playInColumn(columnIndex);
    updateUI();
  });
});
