//Rock Paper Scissors game made in Pokemon world. Two scenarios for game tested with
//Written by Dariusz Kozlowski


//Declaration of initial values of points for playeer and computer
let userScore=0;
let computerScore=0;
let playerSelection= "";

// Second paragraph comes after 2 seconds after first
setTimeout(() => {
    document.getElementById("userPokemon").textContent=`Choose your pokemon!`;   
  }, 3900)


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
        document.getElementById("userPokemon").textContent=`You choose ${playerSelection}`;
      

         document.getElementById("computerPokemon").textContent=`Your opponent chooses ${computerChoice}`;
        document.getElementById("scoreline").textContent=`THE RESULT IS ${userScore} vs ${computerScore}`; 
     }

     else if((playerSelection=="bulbasaur" && computerChoice=="squirtle") || 
     (playerSelection=="squirtle" && computerChoice=="charmander")|| 
     playerSelection=="charmander" && computerChoice=="bulbasaur"){
        document.getElementById("userPokemon").textContent=`You choose ${playerSelection}`
         document.getElementById("computerPokemon").textContent=`Your opponent chooses ${computerChoice}`
          userScore=++userScore;
           document.getElementById("scoreline").textContent=`THE RESULT IS ${userScore} vs ${computerScore}`; 

     }
     else if((playerSelection=="squirtle" && computerChoice=="bulbasaur"||
     (playerSelection=="bulbasaur" && computerChoice == "charmander") ||
      (playerSelection =="charmander" && computerChoice=="squirtle") )
         ) {
        document.getElementById("userPokemon").textContent=`You choose ${playerSelection}`
         document.getElementById("computerPokemon").textContent=`Your opponent chooses ${computerChoice}`;
     
      computerScore=++computerScore;
              document.getElementById("scoreline").textContent=`THE RESULT IS ${userScore} vs ${computerScore}`;

     }
     else {
      alert(`You lose, what is ${playerSelection}?`)
      computerScore=++computerScore;
        document.getElementById("scoreline").textContent=`THE RESULT IS ${userScore} vs ${computerScore}`;

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
    document.getElementById("scoreline").textContent=`THE RESULT IS ${userScore} vs ${computerScore}`;
  closeOverlay();
  document.getElementById("userPokemon").textContent=`Choose your pokemon!`
         document.getElementById("computerPokemon").textContent=``;
     
  
}

//Function that closes modal window and overlay after clicking "X" or overlay
function closeOverlay(){
    modal.style.display = "none";
    overlay.style.display = "none";
}