var userChoice;
var computerChoice;
var result;
var ranNum;
var userScore = 0;
var computerScore = 0;

const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const resetBtn = document.getElementById('reset');
const possibleChoices = document.querySelectorAll('.options3');
const pScore = document.getElementById('p-score');
const cScore = document.getElementById ('c-score');
const matchHistory = document.querySelectorAll('.match-score');
const matchList = document.getElementById('match-list');
const playerList = document.getElementById('player-list');
const compList = document.getElementById ('comp-list');
// const resultFinal = document.getElementById('result-final');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e =>
{
    userChoice = e.target.id;
    ranNum = Math.floor(Math.random() * 3) + 1;
    generateCompChoice();
    compareChoices();

    // const computerPick = document.querySelector('#compChoice');
    //   computerPick.classList.add('animate__animated', 'animate__rotateInDownLeft');
    computerPick.innerHTML = '<img class="animate__animated animate__rotateInDownLeft" width="250" height="250" src="'+ computerChoice + '.png">';

    // const userPick = document.querySelector('#userChoice');
    //   userPick.classList.add('animate__animated', 'animate__rotateInDownRight');
    userPick.innerHTML = '<img class="animate__animated animate__rotateInDownRight" width="250" height="250" src="' + userChoice + '.png">'; 
    displayResult.innerHTML = result;
    
    if (userChoice == computerChoice) {
        userScore += 0;
        computerScore += 0;
    }
    else {
        if (userChoice == "rock") {
            if (computerChoice == "scissors") {
                userScore += 1;

            }
            else if (computerChoice == "paper") {
               computerScore += 1;
            }
        }
        else if (userChoice == "scissors") {
            if (computerChoice == "paper") {
                userScore += 1;
            }
            else if (computerChoice == "rock") {
                computerScore += 1;
            }
        }
        else if (userChoice == "paper") {
            if (computerChoice == "rock") {
                userScore += 1;
            }
            else if (computerChoice == "scissors") {
                computerScore += 1;
            }
      }
    }

    // {
    //   if (userScore >= 5){
    //     let resultFinal = document.getElementById('result-final');
    //     // resultFinal.innerHTML = ("You are the WINNER !");
    //     // result.style.backgroundColor= "green";
    //     resultFinal.innerHTML = "<img width=300; height=300 src='winner.png'>";
    //     reset();
    //   }else if(computerScore >= 5){
    //     let resultFinal = document.getElementById('result-final');
    //     // resultFinal.innerHTML = ("Game Over! You lose.");
    //     // result.style.backgroundColor= "red";
    //     resultFinal.innerHTML = "<img width=300; height=300 src='comic2.png'>";
    //     reset();
    //   } 
    // }

    {
      if (userScore == 5) {
         alert("🥳🥳 Winner!!!🥳🥳");
         location.reload();
      }
      else if (computerScore === 5) {
          alert("You lose! Try again next time!");
          location.reload();
      }
    }

    document.getElementById("p-score").innerText = userScore;
    document.getElementById("c-score").innerText = computerScore;
}));

function generateCompChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'rock';
    
  }
  else if(ranNum == 2)
  {
    computerChoice = 'paper';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'scissors';
  }
}

function reset(){
  computerChoice = '';
  computerPick.innerHTML = computerChoice;
  ranNum = 0; 
  userChoice = '';
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = '';
  userScore = 0;
  computerScore = 0;
  pScore.innerHTML = '0';
  cScore.innerHTML = '0';
  matchList.innerHTML = '';
  playerList.innerHTML = '';
  compList.innerHTML = '';
  // resultFinal.innerHTML = '';
}

function compareChoices(){
  
  if(userChoice == computerChoice)
  {
    result = "Tie!";
    // let displayResult = document.getElementById('result');
    //   displayResult.innerText = ("Tieeeee");
    //   displayResult.style.color= "yellow";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#ca5e1b";
  }
  else if (userChoice == 'scissors' && computerChoice == 'paper')
  {
    result = "YOU WIN!!!";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#2755b0";
  }
   else if (userChoice == 'paper' && computerChoice == 'rock')
  {
    result = "YOU WIN!!!";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#2755b0";
  }
   else if (userChoice == 'rock' && computerChoice == 'scissors')
  {
    result = "YOU WIN!!!";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#2755b0";
  }
   else if (userChoice == 'rock' && computerChoice == 'paper')
  {
    result = "You lose :(";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#b81212";
  }
   else if (userChoice == 'paper' && computerChoice == 'scissors')
  {
    result = "You lose :(";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#b81212";
  }
   else if (userChoice == 'scissors' && computerChoice == 'rock')
  {
    result = "You lose :(";
    let resultFinal = document.getElementById('result');
      resultFinal.style.color= "#b81212";
  }
  
  let matchList = document.querySelector('#match-list');
  let list = document.createElement('div');
  list.innerHTML = result + "<hr>";
  list.style.fontSize = "large";
  list.style.marginTop = "2.40rem";
  matchList.insertBefore(list,matchList.firstElementChild);
  
  let playerList = document.querySelector('#player-list');
  let plist = document.createElement('li');
  plist.innerHTML = '<img width="50" height="50" src="'+ userChoice + '.png">' + "<hr>";
  // plist.style.innerHTML = width= '30px';
  plist.style.listStyleType = "none";
  playerList.insertBefore(plist,playerList.firstElementChild);

  let compList = document.querySelector('#comp-list')
  let clist = document.createElement('li');
  clist.innerHTML = '<img width="50" height="50" src="'+ computerChoice + '.png">' + "<hr>" ;
  // plist.style.innerHTML = width= '30px';
  clist.style.listStyleType = "none";
  compList.insertBefore(clist,compList.firstElementChild);


}
