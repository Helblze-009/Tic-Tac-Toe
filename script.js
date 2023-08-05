console.log("Welcome to tic-tac toe")

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

// Function to change the turn on the game

const changeTurn = function () {
    return turn === "X" ? "0" : "X";
}

// Function to check win

const checkWin = function () {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
           document.querySelector('.info').innerText = boxText[e[0]].innerText + "Won"; 
           isGameOver = true;
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

        }
    })
}
// Game main Logic

music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function(element){
 let boxText= element.querySelector('.boxText');
  element.addEventListener('click', ()=>{
    if(boxText.innerText === ""){
        boxText.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!gameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
        }
    }
  })
})

// Add onclick listener to reset button

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxText = document.querySelector('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = " "
    })
    turn = "X"
    isGameOver = true;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

});