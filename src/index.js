import { TicTacToe } from "./TicTacToe";
import { GameBoard } from "./GameBoard";

customElements.define("tic-tac-toe", TicTacToe);
customElements.define("game-board", GameBoard);

const $game = document.querySelector("tic-tac-toe");
const setupGame = () => {
  if (!window.location.hash) {
    return;
  }
  if (window.location.hash[1] !== "X" && window.location.hash[1] !== "O") {
    return;
  }
  const gameId = window.location.hash.substring(2);
  const role = window.location.hash[1];
  $game.setAttribute("game-id", gameId);
  $game.setAttribute("role", role);
};

setupGame();
window.addEventListener("hashchange", setupGame);

document.querySelector("#game-id").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(event.target instanceof HTMLFormElement)) {
    return;
  }
  const data = new FormData(event.target);

  const gameId = data.get("game-id");
  const role = data.get("role");
  const hash = `${role}${gameId}`;
  window.location.hash = hash;
});
