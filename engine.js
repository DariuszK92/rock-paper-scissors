


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



    let choice= prompt("What do you choose?", "Type here...");
    let playerSelection= choice.toLowerCase();
    let computerChoice=getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);


function playRound(){
   if(playerSelection==computerChoice){
    alert(`Draw! Both of you choose ${playerSelection} as a weapon!`)
   }
   else if((playerSelection=="rock" && computerChoice=="scissors") || 
   (playerSelection=="scisorss" && computerChoice=="paper")|| 
   playerSelection=="paper" && computerChoice=="rock"){
    alert(`You win, ${playerSelection} beats ${computerChoice}!`)
   }
   else if((playerSelection=="scissors" && computerChoice=="rock"||
   (playerSelection=="rock" && computerChoice == "paper") ||
    (playerSelection =="paper" && computerChoice=="scissors") )
   ) {
    alert(`You lose, ${computerChoice} beats ${playerSelection}!`);
   }
   else {
    alert(`You lose, what is ${playerSelection}?`)
   }  
}




console.log(playRound(playerSelection, computerChoice));
