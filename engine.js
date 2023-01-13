//Rock Paper Scissors game made in Pokemon world. Two scenarios for game tested with
// For and While loops. 
//Written by Dariusz Kozlowski


//Declaration of initial values of points for playeer and computer
let userScore=0;
let computerScore=0;


//Assign rock/paper/scissors value as computerChoice

function getComputerChoice(){
    const possibleChoices = ["rock", "paper", "scissors"]
    let computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computerChoice 
}

    
//One Round scripting

function playRound(){

    let choice= prompt("What do you choose?", "Type here...");
    let playerSelection= choice.toLowerCase();
    let computerChoice=getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);

   if(playerSelection==computerChoice){
    alert(`Draw! Both of you choose ${playerSelection} as a weapon!`);
    userScore=userScore;
    computerScore=computerScore;
    document.getElementById("userScore").textContent= userScore;
    document.getElementById("computerScore").textContent= computerScore;
    
   }
   else if((playerSelection=="rock" && computerChoice=="scissors") || 
   (playerSelection=="scisorss" && computerChoice=="paper")|| 
   playerSelection=="paper" && computerChoice=="rock"){
    alert(`You win, ${playerSelection} beats ${computerChoice}!`);
    userScore=++userScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
    document.getElementById("userScore").textContent= userScore;
    document.getElementById("computerScore").textContent= computerScore;
   }
   else if((playerSelection=="scissors" && computerChoice=="rock"||
   (playerSelection=="rock" && computerChoice == "paper") ||
    (playerSelection =="paper" && computerChoice=="scissors") )
       ) {
    alert(`You lose, ${computerChoice} beats ${playerSelection}!`);
    computerScore=++computerScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
    document.getElementById("userScore").textContent= userScore;
    document.getElementById("computerScore").textContent= computerScore;
   }
   else {
    alert(`You lose, what is ${playerSelection}?`)
    computerScore=++computerScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
    document.getElementById("userScore").textContent= userScore;
    document.getElementById("computerScore").textContent= computerScore;
   }  
}



//This function allows user to play first type of game
//(playing five rounds, result can be also a draw)
function game()
{
   
    for (let i = 0; i < 5; i++) {
        playRound();
        if(i==4 && userScore>computerScore){
            alert("You win!")
        }
        else if(i==4 && computerScore>userScore){
            alert("You lose")
        }
        else if(i==4 && computerScore==userScore){
            alert("Its a draw!")
        }
     }
 
}



//This function allows user to play game
//(playing until 5 point limit reached, no draws allowed)

function game2(){

    document.getElementById('btn').style.visibility='hidden';

    while(userScore<5 
        && computerScore<5)
    {
        playRound();
    }

    if(userScore==5){
        alert(`You beat the computer! 
        Result is ${userScore} - ${computerScore}`);
    }
    else if(computerScore==5){
        alert(`You lose! 
        Result is ${userScore} - ${computerScore}`);
    }
  //reset scores to allow user playing next game
    userScore=0;
    computerScore=0;


}


