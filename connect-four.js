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

  clickTargets.addEventListener("click", () => {
    game.playInColumn();
    updateUI();
  });
});
