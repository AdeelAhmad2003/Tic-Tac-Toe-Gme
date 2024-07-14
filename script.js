let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let turnO=true; //playerx,playero
let newgamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8]
]

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
    box.innerText="O";
    box.style.color="black"
    turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
   })
})

const enablebtns=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const disablebtns=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}

const checkWinner= ()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner")
                showWinner(pos1val);
            }
        }
    }
}

const resetGame=()=>{
    turnO=true;
    enablebtns();
    msgcontainer.classList.add("hide")
}

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);