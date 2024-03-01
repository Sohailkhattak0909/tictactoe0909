let wincontainer = document.querySelector( ".hide" );
let msg = document.querySelector("#msg")
let new_game = document.querySelector("#New_game");
let move= document.querySelector(".move");

let game_container= document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let reset_btn = document.getElementById("reset");


let turnO= true; //playerO



//array of  all the box index
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


//Adding click event to each box
boxes.forEach( (box)=> {
    box.addEventListener("click", () => {
       
        if (turnO=== true) {
            box.innerHTML = "O";
            move.innerHTML="Player X's Turn";
            turnO = false;
        } else {
            box.innerHTML="X";
            move.innerHTML="Player O's Turn";
            turnO=true;
        }
        box.disabled= true;
        
        checkWin();
        });
});

const  checkWin = ()=>{
    for(let pattern of winPatterns)
    {
        let p1 = boxes[pattern[0]].innerHTML;
        let p2 = boxes[pattern[1]].innerHTML;
        let p3 = boxes[pattern[2]].innerHTML;

        if( p1 != "" && p2 != "" && p3 !=  "")
        {
            if(p1 === p2 && p2 === p3)
            {
             showWinner(p1);
            }
       } 
    }  
}

const  showWinner = (player) => {
    wincontainer.classList.remove("hide");
    msg.innerHTML=`Congratulation, Winner is ${player}`;
    disabledboxes();
}

const disabledboxes= ()=>{
    for(let box of boxes)
    {
        box.disabled= true;
    }
  game_container.classList.add("hide") ;
  reset_btn.classList.add("hide");
  move.classList.add("hide");

}

const reset = ()=>{
    enableboxes();
    wincontainer.classList.add("hide");
    msg.innerHTML="";
}

const enableboxes= ()=>{
    for(let box of boxes)
    {
        box.disabled= false;
        box.innerHTML="";
    }
}
//On click event  listener to the buttons in the board
reset_btn.addEventListener('click', reset);
new_game.addEventListener('click', () =>{
    reset();
    game_container.classList.remove("hide") ;
    reset_btn.classList.remove("hide") ;
    move.classList.remove("hide") ;
});