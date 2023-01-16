//Rock Paper Scissors game made in Pokemon world. Two scenarios for game tested with
//Written by Dariusz Kozlowski


//Declaration of initial values of points for playeer and computer
let userScore=0;
let computerScore=0;
let playerSelection= "";



//Declaration of variables
// Get the modal
let modal = document.getElementById("newGame");

// When the user clicks the button, open the modal 
let  overlay = document.getElementById("overlay");


//Assign rock/paper/scissors value as computerChoice

function getComputerChoice(){
    const possibleChoices = ["bulbasaur", "charmander", "squirtle"]
    let computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return computerChoice 
}
   
    
//One Round scripting

function playRound(playerSelection){
  let computerChoice=getComputerChoice();
  if(userScore ===5 || computerScore === 5){
  modal.style.display = "block";
  overlay.style.display = "block";
  }

  else{
     if(playerSelection==computerChoice){
      alert(`Draw! Both of you choose ${playerSelection} as a weapon!`);
      userScore=userScore;
      computerScore=computerScore;
      document.getElementById("userScore").textContent= userScore;
      document.getElementById("computerScore").textContent= computerScore;    
     }

     else if((playerSelection=="bulbasaur" && computerChoice=="squirtle") || 
     (playerSelection=="squirtle" && computerChoice=="charmander")|| 
     playerSelection=="charmander" && computerChoice=="bulbasaur"){
      alert(`You win, ${playerSelection} beats ${computerChoice}!`);
      userScore=++userScore;
      computerScore=computerScore;
      document.getElementById("userScore").textContent= userScore;
      document.getElementById("computerScore").textContent= computerScore;

     }
     else if((playerSelection=="squirtle" && computerChoice=="bulbasaur"||
     (playerSelection=="bulbasaur" && computerChoice == "charmander") ||
      (playerSelection =="charmander" && computerChoice=="squirtle") )
         ) {
      alert(`You lose, ${computerChoice} beats ${playerSelection}!`);
      computerScore=++computerScore;
      document.getElementById("userScore").textContent= userScore;
      document.getElementById("computerScore").textContent= computerScore;

     }
     else {
      alert(`You lose, what is ${playerSelection}?`)
      computerScore=++computerScore;
      document.getElementById("userScore").textContent= userScore;
      document.getElementById("computerScore").textContent= computerScore;

     }  
     if(userScore ===5 || computerScore === 5){
        modal.style.display = "block";
        overlay.style.display = "block";
}
}
}



function restartGame(){
    userScore=0;
    computerScore=0;
    document.getElementById("userScore").textContent= userScore;
    document.getElementById("computerScore").textContent= computerScore;
    closeOverlay();
  
}

//Function that closes modal window and overlay after clicking "X" or overlay
function closeOverlay(){
    modal.style.display = "none";
    overlay.style.display = "none";
}