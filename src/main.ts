import { pickRandomCell } from "./helpers/pickRandomCell";
import { checkDraw } from "./helpers/checkDraw";
import { checkWinner } from "./helpers/checkWinner";

const restartButton = document.getElementById("restart-button");
const aiCounter = document.getElementById("ai-counter");
const playerCounter = document.getElementById("player-counter");
const gameField = document.getElementById("game-field");

let cells: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let winsOfAI = 0;
let winsOfPlayer = 0;

const makeAITurn = () => {
  const AIchoosed = document.getElementById(pickRandomCell(cells));
  AIchoosed!.textContent = "o";
  cells.splice(+AIchoosed!.id, 1, "o");
  if (checkWinner(cells)) {
    gameField!.style.pointerEvents = "none";
    winsOfAI += 1;
    aiCounter!.textContent = winsOfAI.toString();
    restartButton!.style.display = "block";
  }
};

const catchPlayersTurn = (event: MouseEvent) => {
  const clicked = (event.target as HTMLElement).closest("td");
  if (clicked === null) return;
  if (clicked.textContent !== "") return;
  clicked.textContent = "x";
  cells.splice(+clicked.id, 1, "x");
  if (checkWinner(cells)) {
    gameField!.style.pointerEvents = "none";
    winsOfPlayer += 1;
    playerCounter!.textContent = winsOfPlayer.toString();
    restartButton!.style.display = "block";
    return;
  }
  if (checkDraw(cells)) {
    restartButton!.style.display = "block";
    return;
  }
  makeAITurn();
};

const restartGame = () => {
  gameField!.style.pointerEvents = "all";
  gameField!.querySelectorAll("td").forEach((cell) => (cell.textContent = ""));
  cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  restartButton!.style.display = "none";
};

gameField!.addEventListener("click", catchPlayersTurn);
restartButton!.addEventListener("click", restartGame);
