let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainern = document.querySelector(".msg");
let winMsg = document.querySelector("#win");

let playerX = true;

let count =0;

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,6,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () =>{
   playerX = true;
   count = 0;
   enableeBox();
   msgContainern.classList.add("hide")
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(playerX === true){
      box.innerText = "X";
      playerX = false;
    }else{
      box.innerText = "O";
      playerX = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if(count === 9 && !isWinner){
      gameDraw();
    }
  });
});

const gameDraw = () =>{
  winMsg.innerText = `Game was Draw.`;
  msgContainern.classList.remove("hide");
  disableBox();
};

const disableBox = () =>{
  for(box of boxes){
    box.disabled = true;
  }
}; 

const enableeBox = () =>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) =>{
     winMsg.innerText = `Congratulations, Winner is ${winner}`;
     msgContainern.classList.remove("hide");
     disableBox();

};

const checkWinner = () =>{
  for(pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);