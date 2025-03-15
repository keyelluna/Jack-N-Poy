
document.getElementById("submit").onclick = function(){
    let NumOfRounds = parseInt(document.getElementById("NumberofRounds").value);

    let btnRock = document.getElementById("button_rock");
    let btnPaper = document.getElementById("button_paper");
    let btnScissor = document.getElementById("button_scissor");

    if (!isNaN(NumOfRounds) && NumOfRounds > 0) {
        document.getElementById("welcome").style.display = "none";
        btnRock.style.pointerEvents = "auto";
        btnPaper.style.pointerEvents = "auto";
        btnScissor.style.pointerEvents = "auto";     
    }else {
        
    }
    
    document.getElementById("roundNum").textContent = `${NumOfRounds}`;

    let rock = 1;
    let paper = 2;
    let scissor = 3;

    let player_Move;
    let comp_move;

    document.getElementById("button_rock").onclick = function(){
        player_Move = rock;
        play();
    }
    document.getElementById("button_paper").onclick = function(){ 
        player_Move = paper;
        play();
    }
    document.getElementById("button_scissor").onclick = function(){
        player_Move = scissor;
        play();

    }

 let remainingRounds = NumOfRounds;
 let pScore = 0;
 let cScore = 0;

 function play(){

    if (remainingRounds > 0){
        comp_move = Math.floor(Math.random() * 3) + 1;

        setMove(player_Move, "P_showMove");
        setMove(comp_move, "C_showMove");

        let playerWins = (player_Move == rock && comp_move == scissor) || (player_Move == scissor && comp_move == paper) || (player_Move == paper && comp_move == rock);

        let ComputerWins = (comp_move == rock && player_Move == scissor) || (comp_move == scissor && player_Move == paper) || (comp_move == paper && player_Move == rock);

        
        if (playerWins) {
            pScore++;
        } else if (ComputerWins) {
            cScore++;     
        }
        remainingRounds--;
        document.getElementById("roundNum").textContent = `${remainingRounds}`;
        document.getElementById("p_score").textContent = `${pScore}`;
        document.getElementById("c_score").textContent = `${cScore}`;
        console.log(comp_move);
    } 
    if (remainingRounds == 0 ){
        document.getElementById("win").style.display = "block";

        if (pScore > cScore){
            document.getElementById("winlose").textContent = "You Win!"; 
        } else if (pScore == cScore) {
            document.getElementById("winlose").textContent = "Draw"; 
        } else {
            document.getElementById("winlose").textContent = "You lose"; 
        }
        
        document.getElementById("PScore").textContent = pScore;
        document.getElementById("CScore").textContent = cScore;

        document.getElementById("reset").onclick = playAgain;
    }


 }

 function setMove(move, elementId) {

    if (move == rock){
        document.getElementById(elementId).textContent = "👊";
    } else if (move == paper){
        document.getElementById(elementId).textContent = "🤚";
    } else {
        document.getElementById(elementId).textContent = "✌️";
    }


}

function playAgain(){
    document.getElementById("p_score").textContent = 0;
    document.getElementById("c_score").textContent = 0;
    document.getElementById("win").style.display = "none";
    document.getElementById("welcome").style.display = "block";

}


}

