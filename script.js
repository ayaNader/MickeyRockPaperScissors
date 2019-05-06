function randomPlay(){
    var play = Math.floor(Math.random() * 3);
    switch(play){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
var computerPlay = "";
var cprock = document.getElementById("cpRockBtn");
var cppaper = document.getElementById("cpPaperBtn");
var cpscissors = document.getElementById("cpSciBtn");
var cpChoice = document.querySelector("#computerChoice");

function opponent(){
    var comPlay = randomPlay();
    cprock.style.border = "";
    cppaper.style.border = "";
    cpscissors.style.border = "";
    if(comPlay == 'rock'){
        cprock.style.border = "thick solid black";
        cpChoice.src = "rockhandcp.png";
    }
    else if(comPlay == 'paper'){
        cppaper.style.border = "thick solid black";
        cpChoice.src = "paperhandcp.png";
    }
    else{
        cpscissors.style.border = "thick solid black";
        cpChoice.src = "scissorshandcp.png";
    }
}

var playerPlay = "";
var plrock = document.querySelector("#plRockBtn");
var plpaper = document.querySelector("#plPaperBtn");
var plscissors = document.querySelector("#plSciBtn");
var plChoice = document.querySelector("#playerChoice");

plrock.addEventListener("click", function(){
    plChoice.src = "rockhandpl.png";
    playerPlay = "rock";
    computerPlay = opponent();
});

plpaper.addEventListener("click", function(){
    plChoice.src = "paperhandpl.png";
    playerPlay = "paper";
    computerPlay = opponent();
});

plscissors.addEventListener("click", function(){
    plChoice.src = "scissorshandpl.png";
    playerPlay = "scissors";
    computerPlay = opponent();
});

function Win(playerSelection, computerSelection){
    alert('hena');
    if(playerSelection == computerSelection)
        return 0;
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper'))
            return 1;
    return -1;
}

var winner = Win(playerPlay, computerPlay);
console.log("and the winner iiiis " + playerPlay + " " + computerPlay);
var displayWinner = document.querySelector("#roundWinner");
if(winner == 1){
    displayWinner.src = "mickeyWon.png";
    console.log("and the winner iiiis " + playerPlay + " " + computerPlay);
}
else if(winner == -1){
    displayWinner.src = "minnieWon.png";
    console.log("and the winner iiiis " + playerPlay + " " + computerPlay);
}
else{
    console.log("and the winner iiiis " + playerPlay + " " + computerPlay);
}