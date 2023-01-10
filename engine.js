//Declaration of initial values of points for playeer and computer
let userScore=0;
let computerScore=0;


//Function, that randomly assign rock/paper/scissors value as a computer choice

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
 if(computerChoice===0){
        return "rock"
    }
    else if(computerChoice===1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

    
//Function with the whole script of one round

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
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
    
   }
   else if((playerSelection=="rock" && computerChoice=="scissors") || 
   (playerSelection=="scisorss" && computerChoice=="paper")|| 
   playerSelection=="paper" && computerChoice=="rock"){
    alert(`You win, ${playerSelection} beats ${computerChoice}!`);
    userScore=++userScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
   }
   else if((playerSelection=="scissors" && computerChoice=="rock"||
   (playerSelection=="rock" && computerChoice == "paper") ||
    (playerSelection =="paper" && computerChoice=="scissors") )
       ) {
    alert(`You lose, ${computerChoice} beats ${playerSelection}!`);
    computerScore=++computerScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
   }
   else {
    alert(`You lose, what is ${playerSelection}?`)
    computerScore=++computerScore;
    console.log(`Your score is ${userScore} and you oponent ${computerScore}`);
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
    while(userScore<5 && computerScore<5)
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

