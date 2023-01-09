
let userScore=0;
let computerScore=0;

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

