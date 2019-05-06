var computerPlay;
var cprock = document.getElementById("cpRockBtn");
var cppaper = document.getElementById("cpPaperBtn");
var cpscissors = document.getElementById("cpSciBtn");
var cpChoice = document.getElementById("computerChoice");

var playerPlay;
var plrock = document.getElementById("plRockBtn");
var plpaper = document.getElementById("plPaperBtn");
var plscissors = document.getElementById("plSciBtn");
var plChoice = document.getElementById("playerChoice");

listen();

function randomPlay(){
    var play = Math.floor(Math.random() * 3);
    switch(play){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

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
    return comPlay;
}

function Win(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
        return 0;
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper'))
            return 1;
    return -1;
}

function result(){
    var winner = Win(playerPlay, computerPlay);
    var displayWinner = document.querySelector("#roundWinner");
    if(winner == 1){
        displayWinner.style.width = "250px"
        displayWinner.src = "mickeyWon.png";
    }
    else if(winner == -1){
        displayWinner.style.width = "250px"
        displayWinner.src = "minnieWon.png";
    }
    else{
        displayWinner.style.width = "360px"
        displayWinner.src = "tie.png";
    }
}

function listen(){
    plrock.addEventListener("click", function(){
        plChoice.src = "rockhandpl.png";
        playerPlay = "rock";
        computerPlay = opponent();
        result();
    });
    
    plpaper.addEventListener("click", function(){
        plChoice.src = "paperhandpl.png";
        playerPlay = "paper";
        computerPlay = opponent();
        result();
    });
    
    plscissors.addEventListener("click", function(){
        plChoice.src = "scissorshandpl.png";
        playerPlay = "scissors";
        computerPlay = opponent();
        result();
    });
}




    
