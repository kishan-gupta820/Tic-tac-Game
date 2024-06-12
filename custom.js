let boxes = document.querySelectorAll(".boxs");
let resetBtn = document.querySelector(".reset");
let playerTurn = true;
let newgamebtn = document.querySelector(".new-game");
let gameMsg = document.querySelector(".winner-content");
let winmsg = document.querySelector(".win-ply");

const winArry = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  playerTurn = true;
  enableBoxes();
  gameMsg.style.display = "none";
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerTurn) {
      box.innerText = "O";
      playerTurn = false;
    } else {
      box.innerText = "X";
      playerTurn = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winArry) {
    let pos1Vlu = boxes[pattern[0]].innerText;
    let pos2Vlu = boxes[pattern[1]].innerText;
    let pos3Vlu = boxes[pattern[2]].innerText;

    if (pos1Vlu != "" && pos2Vlu != "" && pos3Vlu != "") {
      if (pos1Vlu === pos2Vlu && pos2Vlu === pos3Vlu) {
        gameMsg.style.display = "block";
        winmsg.innerText = `conguraulations the winner Player ${pos1Vlu}`;
        box.disabled = true;
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
