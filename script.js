const arrayOfChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice (){
    const getIndex = Math.floor(Math.random()*3);
    const computerInput = arrayOfChoices[getIndex];
    return computerInput;
    }

function getPlayerChoice (){
    let playerInput = window.prompt("Let's play: Choose Rock, Paper or Scissors. What is your choice:", " ");
    playerInput = playerInput.toUpperCase().charAt(0) + playerInput.toLowerCase().slice(1);  
    return playerInput;
}

function game (){
    let counterComputer = null;
    let counterPlayer = null;
    let winner;

    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection + ", Player: " + playerSelection);
            
            if (arrayOfChoices.includes(playerSelection)){
                if(computerSelection === playerSelection){
                    console.log("Tied. Try again!");
                    i--;
                }else if(computerSelection === "Rock" && playerSelection === "Scissors"){
                    counterComputer ++;
                }else if (computerSelection === "Paper" && playerSelection === "Rock"){
                    counterComputer ++;
                }else if (computerSelection === "Scissors" && playerSelection === "Paper"){
                    counterComputer ++;
                }else{
                    counterPlayer ++;
            }          
        }else{
            console.log("Invalid: You have to type an item from this list. Watch out for typos: Rock, Paper or Scissors")
            i--;
        }
         
        if (counterComputer > counterPlayer){
            winner = "Computer";
        }else{
            winner = "Player";
        }
    }
    
    function pluralizeWord(singularWord, pluralWord, count){
        return count > 1 ? pluralWord : singularWord;
    }
    function presentWinner (){
        const pluralComputer = pluralizeWord("point", "points", counterComputer);
        const pluralPlayer = pluralizeWord("point", "points", counterPlayer);
        console.log(`The Computer has ${counterComputer} ${pluralComputer} and the Player has ${counterPlayer} ${pluralPlayer}. The ${winner} won!`);
    }

    presentWinner();
    
}

game();