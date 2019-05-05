var plrock = document.querySelector("#plRockBtn");
var plpaper = document.querySelector("#plPaperBtn");
var plscissors = document.querySelector("#plSciBtn");
var plChoice = document.querySelector("#playerChoice");

plrock.addEventListener("click", function(){
    plChoice.src = "rockhandpl.png";
});

plpaper.addEventListener("click", function(){
    plChoice.src = "paperhandpl.png";
});

plscissors.addEventListener("click", function(){
    plChoice.src = "scissorshandpl.png";
});

var cprock = document.querySelector("#cpRockBtn");
var cppaper = document.querySelector("#cpPaperBtn");
var cpscissors = document.querySelector("#cpSciBtn");
var cpChoice = document.querySelector("#computerChoice");

cprock.addEventListener("click", function(){
    cpChoice.src = "rockhandcp.png";
});

cppaper.addEventListener("click", function(){
    cpChoice.src = "paperhandcp.png";
});

cpscissors.addEventListener("click", function(){
    cpChoice.src = "scissorshandcp.png";
});