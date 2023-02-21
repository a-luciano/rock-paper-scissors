const arrayOfChoices = ["Rock", "Paper", "Scissors"];
let counterComputer = 0;
let counterPlayer = 0;
let roundNumber = 1;
let points = 0;

function getComputerChoice (){
    const getIndex = Math.floor(Math.random()*3);
    const computerInput = arrayOfChoices[getIndex];
    return computerInput;
    }

    function getPlayerChoice (){
        const btnRock = document.querySelector('#btnRock');
        const btnPaper = document.querySelector('#btnPaper');
        const btnScissors = document.querySelector('#btnScissors');
        btnRock.addEventListener('click', function () {playRound(btnRock.outerText)}); 
        btnPaper.addEventListener('click', function () {playRound(btnPaper.outerText)});
        btnScissors.addEventListener('click', function () {playRound(btnScissors.outerText)});        
    }

function playRound (playerSelection){
    if (points < 5){playerSelection} else {return};//neutralize event "click" at 5 points;
    const computerSelection = getComputerChoice();
    if(computerSelection === playerSelection){
    }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        counterComputer ++;
    }else if (computerSelection === "Paper" && playerSelection === "Rock"){
        counterComputer ++;
    }else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        counterComputer ++;
    }else{
        counterPlayer ++;
    }          
    if (roundNumber === 1){
        informPoints(counterComputer, counterPlayer, roundNumber);
        informChoices(computerSelection, playerSelection);
        
    }else{
        updateRoundChoices (computerSelection, playerSelection, roundNumber);
        setTimeout(updatePoints, 1000); 
    }
    roundNumber ++;
    points = (counterComputer + counterPlayer);
    if(points === 5){
        informWinner(counterComputer, counterPlayer); 
        setTimeout(endGame, 1000);     
    } 
}

    function informChoices(computerChoice, playerChoice){
        const roundChoiceComputer = document.createElement ('p');
        roundChoiceComputer.classList.add('infoComputer');
        roundChoiceComputer.id = 'roundChoiceComputer';
        roundChoiceComputer.textContent = computerChoice;
        
        const roundChoicePLayer = document.createElement ('p');
        roundChoicePLayer.classList.add('infoPlayer');
        roundChoicePLayer.id = 'roundChoicePlayer';
        roundChoicePLayer.textContent = playerChoice;

        infoComputer.appendChild(roundChoiceComputer);
        infoPlayer.appendChild(roundChoicePLayer);
    }
    function updateRoundChoices (computerChoice, playerChoice, roundNumber){
        document.getElementById('round').textContent =  `ROUND ${roundNumber}`;
        document.getElementById('roundChoiceComputer').textContent = computerChoice;
        document.getElementById('roundChoicePlayer').textContent = playerChoice;
    }
    function informPoints(counterComputer, counterPlayer, roundNumber){  
        const round = document.createElement ('h1');
        round.classList.add('title');
        round.id = 'round';
        round.textContent = `ROUND ${roundNumber}`;

        const titleComputer = document.createElement ('h2');
        titleComputer.classList.add('infoComputer');
        titleComputer.id = 'titleComputer';            
        titleComputer.textContent = "COMPUTER";
            
        const pointsComputer = document.createElement ('p');
        pointsComputer.classList.add('infoComputer');
        pointsComputer.id = 'pointsComputer';
        pointsComputer.textContent = counterComputer;
            
        const titlePlayer = document.createElement ('h2');
        titlePlayer.classList.add('infoComputer');
        titlePlayer.id = 'titleComputer';            
        titlePlayer.textContent = "PLAYER";

        const pointsPlayer = document.createElement ('p');
        pointsPlayer.classList.add('infoPlayer');
        pointsPlayer.id = 'pointsPlayer';
        pointsPlayer.textContent = counterPlayer;
          
        title.appendChild(round);
        infoComputer.appendChild(titleComputer); 
        infoComputer.appendChild(pointsComputer);  
        infoPlayer.appendChild(titlePlayer); 
        infoPlayer.appendChild(pointsPlayer); 

        document.getElementById('infoComputer').style.border = 'solid';
        document.getElementById('infoPlayer').style.border = 'solid';

    }
    function updatePoints(){
        document.getElementById('pointsComputer').textContent = counterComputer;
        document.getElementById('pointsPlayer').textContent = counterPlayer;
    }

    function informWinner(counterComputer, counterPlayer){
        let gameWinner = counterComputer > counterPlayer ? 'COMPUTER' : 'PLAYER';
        winner = document.createElement ('h3');
        winner.classList.add('winner');
        winner.textContent = (`THE ${gameWinner} WON!`);
        title.appendChild(winner);
        
    }

    function endGame(){
        const btnTryAgain = document.createElement ('button');
        btnTryAgain.id = 'btnTryAgain';
        btnTryAgain.textContent = "TRY AGAIN";
        title.appendChild(btnTryAgain); 
        btnTryAgain.addEventListener('click', function () {window.location.reload()}); 
     
    }



getPlayerChoice();
